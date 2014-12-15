var sum = function(){
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  for(var i = 0; i < args.length; i++){
    sum += args[i];
  }
  return sum;
}

Function.prototype.myBind = function(){
  var that = this;
  var args = Array.prototype.slice.call(arguments);
  var object = args.shift();
  return function  () {
     that.apply(object,args);
  }
}

var curriedSum = function (numArgs) {
  var numbers = [];
  var _curriedSum = function (nextNum) {
    numbers.push(nextNum);
    if (numbers.length === numArgs){
      var total = 0;//numbers.shift
      for(var i = 0; i < numbers.length; i++){
        total += numbers[i];
      }
      return total;
    }else{
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  var argumentPile = [];
  var that = this
  var _curry = function(nextArg){
    argumentPile.push(nextArg);
    if (argumentPile.length === numArgs){
      return that.apply(undefined, argumentPile);
    }else{
      return _curry;
    }
  }
  return _curry;
}

// function meow(a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// }
//
// var curriedMeow = meow.curry(3);
//
// var curriedMeow1 = curriedMeow(1)
//
// setTimeout(function () {
//   var curriedMeow2 = curriedMeow(2);
//   [1].forEach(curriedMeow2);
// }, 1000)

//functionSum(3)(3)(4)

Function.prototype.inherits = function(objParent){
  var Surrogate = function(){};
  Surrogate.prototype = objParent.prototype;
  this.prototype = new Surrogate();
}

function MovingObject () {
};
MovingObject.prototype.moveObject = function(){
    console.log("move the object");
  }
function Ship () {};
Ship.inherits(MovingObject);

function Asteroid () {};
Asteroid.inherits(MovingObject);