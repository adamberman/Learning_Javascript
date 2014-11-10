var sum = function(){
  var args = Array.prototype.slice.call(arguments);
  var sum = 0;
  for(i = 0; i < args.length; i++){
    sum += args[i];
  }
  return sum;
}

Function.prototype.myBind = function(){
  var that = this;
  var args = Array.prototype.slice.call(arguments);
  var object = args.shift();
  return function  () {
     object.that(args);
  }
}