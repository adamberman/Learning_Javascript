(function (){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = {}

  Util.inherits = function(objChild, objParent){
    var Surrogate = function(){};
    Surrogate.prototype = objParent.prototype;
    objChild.prototype = new Surrogate();
  }
  Util.randomVec = function() { return Math.floor(Math.random() * 5) + 1;}

  // Asteroids.Util.inherits = function (child, parent)



})();