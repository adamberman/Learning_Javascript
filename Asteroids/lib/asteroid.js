(function (){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  //namespacced stuff
  var Asteroid = Asteroids.Asteroid = function(options) {
    if(!options.color) {
      options.color = Asteroid.COLOR;
    }
    if(!options.radius) {
      options.radius = Asteroid.RADIUS;
    }
    if(!options.vel) {
      options.vel = [Asteroids.Util.randomVec(), Asteroids.Util.randomVec()];
    }
    Asteroids.MovingObject.call(this, options);
  }

  Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "blue";
  Asteroid.RADIUS = 50;
})();