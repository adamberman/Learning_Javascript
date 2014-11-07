var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function HanoiGame(){
  this.stacks = [[2, 1, 0], [], []];
};
HanoiGame.prototype.isWon = function(){
  if(this.stacks[0].length == 0 && 
      (this.stacks[1].length == 0 || this.stacks[2].length == 0)) {
    return true;
  } else{
    return false;
  };
};
HanoiGame.prototype.isValidMove = function(start, end){
  var startEl = this.stacks[start][(this.stacks[start].length - 1)];
  var endEl = this.stacks[end][(this.stacks[end].length - 1)];
  if(this.stacks[start].length === 0 || startEl > endEl){
    return false;
  } else{
    return true;
  };
};
HanoiGame.prototype.move = function(start, end){    
  if(this.isValidMove(start, end)) {
    this.stacks[end].push(this.stacks[start].pop());
    return true;
  } else { 
    return false; 
  };
};
HanoiGame.prototype.print = function() {
  return JSON.stringify(this.stacks);
};
HanoiGame.prototype.promptMove = function(callback) {
  console.log(this.print());

  reader.question("Enter start tower", function (numString1) {
    reader.question("Enter end tower", function (numString2) {
      var start = parseInt(numString1);
      var end = parseInt(numString2);
      callback(start, end);
    });
  });
};
HanoiGame.prototype.run = function(completionCallback) {
  var that = this
  this.promptMove(function (start, end) {
    if(!that.move(start, end)){
      console.log("Invalid Move");
    }
    
    if(that.isWon()) {
      completionCallback();
    } else {
      that.run(that.endGame.bind(that))
    }
  })
};
HanoiGame.prototype.endGame = function(){
  reader.close();
  console.log("We have a winner!");
}

var game = new HanoiGame;

game.run(game.endGame.bind(game));












