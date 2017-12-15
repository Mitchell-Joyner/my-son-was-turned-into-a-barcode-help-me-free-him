const ISBN = require("./ISBN.js");
const EAN = require("./EAN.js");

const BookFactory = function (){

    function createBook(pubYear){
      if(pubYear < 2007){
        return new ISBN();
      }
      else{
        return new EAN();
      }
    }
    return {createBook};
}

function test(){
    let b = new BookFactory();
    console.log(b.createBook(2000).read());
}

module.exports = BookFactory;
