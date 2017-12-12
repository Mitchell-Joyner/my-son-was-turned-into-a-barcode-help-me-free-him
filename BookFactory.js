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

module.exports = BookFactory;
