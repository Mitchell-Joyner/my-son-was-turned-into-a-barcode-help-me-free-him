const Random = function(){

    function continuousRange(a,b){
        return (b-a)*Math.random()+a;
    }

    function discreteRangeIn(a,b){
        return Math.round((b-a)*Math.random()+a);
    }

    function discreteRangeEx(a,b){
        a = a+1;
        b = b-1;
        return discreteRangeIn(a,b);
    }

    function digit(d){
        let number = "";
        while(d>0){
            temp = Math.floor(10*Math.random());
            number = number+String(temp);
            d--;
        }
        return number;
        //return Math.floor(Math.pow(10,d)*Math.random());
    }
    return {continuousRange,discreteRangeIn,discreteRangeEx,digit};
};

function main(){
    console.log(Random().continuousRange(10,50));
    console.log(Random().discreteRangeIn(1,5));
    console.log(Random().discreteRangeEx(1,5));
    console.log(Random().digit(5));
}
//main();

module.exports = Random;
