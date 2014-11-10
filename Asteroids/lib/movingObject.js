(function (){
  if (typeof Asteroids == "undefined"){
    window.Asteroids = {};
  }

  //namespacced stuff
  var MovingObject = Asteroids.MovingObject = function(options){

    this.pos = options.pos; //[x, y]
    this.vel = options.vel;
    this.radius = options.radius; //all colision is based on circles
    this.color = options.color;
  }

  MovingObject.prototype.draw = function(){
    var canvas = document.getElementById('game');
    var context = canvas.getContext('2d');
    var centerX = this.pos[0];
    var centerY = this.pos[1];
    var radius = this.radius;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
  }

  MovingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }




})();