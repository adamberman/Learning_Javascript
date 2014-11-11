(function (){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }


  var Game = Asteroids.Game = function(){
    this.DIM_X = 800;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 50;
    this.asteroidsArr = [];
    this.addAsteroids(this.NUM_ASTEROIDS);
  }

  Game.prototype.addAsteroids = function(numAsteroids){
    var i = 0;
    while (i < numAsteroids) {
      this.asteroidsArr.push(new Asteroids.Asteroid({pos: this.eligibleRoidPos()}));
      i ++;
    }
  }

  Game.prototype.eligibleRoidPos = function(){
    var screenSide = Math.floor(Math.random() * 4);
    var roidPos = [0,0];
    var randomPos = Math.floor(Math.random() * this.DIM_X)


    switch(screenSide){
    case 0:
      roidPos = [0, randomPos];
      break;
    case 1:
      roidPos = [this.DIM_X, randomPos];
      break;
    case 2:
      roidPos = [randomPos, 0];
      break;
    case 3:
      roidPos = [randomPos, this.DIM_Y];
      break;
    }
    return roidPos;
  }

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0,this.DIM_X, this.DIM_Y);
    for(var i = 0; i < this.asteroidsArr.length; i++){
      this.asteroidsArr[i].draw(ctx);
    }
  }
  Game.prototype.moveObjects = function() {
    for (var i = 0; i < this.asteroidsArr.length; i++){
      this.asteroidsArr[i].move();
    }
  }


})();