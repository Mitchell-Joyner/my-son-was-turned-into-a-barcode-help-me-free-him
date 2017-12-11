const Random = require('./Random.js');

const ISBN = function(){

    let code = Random().digit(9);
    let checkDigit = check();

    function check(){
        let sum = 0;
        for(let number = 10;number>=2;number--){
            sum += number*code[0];
        }
        let remainder = sum % 11;
        if(remainder == 0){
            return "0";
        }
        if(remainder ==1){
            return "X";
        }
        return 11-remainder;
    }
    function read(){
      return code + "-" + checkDigit;
    }

    return {code, checkDigit, read};
};

function test(){
    let b = new ISBN();
    console.log(b.code);
    console.log(b.checkDigit);
    console.log(b.read());
}
//test();
module.exports = ISBN;
