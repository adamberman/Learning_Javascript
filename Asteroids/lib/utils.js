(function (){
  if typeof(Asteroids.Util == "undefined"){
    Asteroids.Util = {};
  }

  var Util = Asteroids.Util = function(){}

  Function.prototype.inherits = function(objParent){
    var Surrogate = function(){};
    Surrogate.prototype = objParent.prototype;
    this.prototype = new Surrogate();
  }

  // Asteroids.Util.inherits = function (child, parent)




});