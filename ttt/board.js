function Board(){
  this.grid = [["", "", ""], 
               ["", "", ""], 
               ["", "", ""]];
};
Board.prototype.won = function(){
  if (this.diagWins || (this.vertWins || this.horizWins)){
    return true;
  } else{
    return false;
  }
};
Board.prototype.diagWins = function(){
  var chars = ["o", "x"];
  for(var i = 0; i < 2; i++){
    if(this.grid[1][1] == chars[i] && 
      ((this.grid[0][0] == chars[i] && this.grid[2][2] == chars[i]) ||
        this.grid[0][2] == chars[i] && this.grid[2][0] == chars[i])){
          return true;
        } else{
          return false;
        }
  }
};
Board.prototype.horizWins = function(){
  var chars = ["o", "x"]
  for(var i = 0; i < 2; i++){
    for(var j = 0; j < 3; j++){
      if (this.grid[j][0] == chars[i] && (this.grid[j][1] == chars[i] &&
          this.grid[j][2] == chars[i])){
            return true;
          } else{
            return false;
          }
    }
  }
};
Board.prototype.vertWins = function(){
  var chars = ["o", "x"]
  for(var i = 0; i < 2; i++){
    for(var j = 0; j < 3; j++){
      if (this.grid[0][j] == chars[i] && (this.grid[1][j] == chars[i] &&
          this.grid[2][j] == chars[i])){
            return true;
          } else{
            return false;
          }
    }
  }
};
Board.prototype.empty = function(idx1, idx2){
  if (this.grid[idx1][idx2] == "") {
    return true;
  } else { 
    return false; 
  }
};

Board.prototype.placeMark = function(idx1, idx2, mark){
  this.grid[idx1][idx2] = mark;
};

Board.prototype.draw = function() {
  var over = true;
  for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 3; j++) {
      if (this.grid[i][j] == "") {
        over = false;
      }
    }
  }
  return over;
};
Board.prototype.gameOver = function() {
  return (this.draw || this.won)
};















