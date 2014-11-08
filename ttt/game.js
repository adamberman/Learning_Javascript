require("./board")
var readline = require('readline');

function Game(readline){
  this.reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
}