const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

function IsbnEanAdapter(isbnOBJ){
  let code = isbnOBJ.read();
  code = "978"+code;
  code = code.substring(0,12);

  function check(){
      let sum = 0;
      for(let c=0;c<12;c++){
          if(c%2 ==0){
              sum += 1*code[c];
          }
          else{
              sum += 3*code[c];
          }
      }
      let remainder = sum %10
      if(remainder = 0){
          return 0;
      }
      return 10-remainder;
  }
  let checkDigit = check();
  function read(){
      return code + "-" + checkDigit;
  }
  return {code, checkDigit, read};
}
function test(){
    let i = new ISBN();
    let a = new IsbnEanAdapter(i);
    console.log(a.code);
    console.log(a.checkDigit);
    console.log(a.read());
}

module.exports = IsbnEanAdapter;
