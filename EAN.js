const Random = require('./Random.js');

const EAN = function(){

    let sysCode = makeSysCode();//3 digits
    let manCode = makeManCode();// 5 digits
    let proCode = makeProCode();// 4 digits
    let checkDigit = check();


    function makeSysCode(){
      let r = Random().discreteRangeIn(1,8);
          if (r = 1){
              return "001";//'Merica
          }
          else if (r = 2){
              return "002";//Canada
          }
          else if (r = 3){
              return "040";//Germany
          }
          else if (r = 4){
              return "049";//Japan
          }
          else if (r = 5){
              return "030";//France
          }
          else if (r = 6){
              return "046";//Russia
          }
          else if (r = 7){
              return "070";//Norway
          }
          else if (r = 8){
              return "080";//Italy
          }
        }

        function makeManCode(){
          return String(Random().digit(5));
        }

        function makeProCode(){
          return String(Random().digit(4));
        }

    function check(){
        let code = sysCode+manCode+proCode;
        let sum = 0;
        for(let c=0;c<12;c++){
            if(c%2 ==0){
                sum += 1*code[c];
            }
            else{
                sum += 3*code[c];
            }
        }
        console.log("the sum is ="+sum);
        let remainder = sum %10;
        if(remainder == 0){
            return 0;
        }
        return 10-remainder;
    }

    function read(){
      let code = sysCode+manCode+proCode;
      return code + "-" + checkDigit;
    }
    return {sysCode,manCode,proCode,checkDigit,read};
};

function test(){
    let e = new EAN();
    console.log(e.checkDigit);

}
//test();
module.exports = EAN;
