Array.prototype.uniq = function(){
  var myAnswerArray = [];
  var len = this.length;
  for(var i = 0; i < len; i++) {
    if(myAnswerArray.indexOf(this[i]) === -1) {
      myAnswerArray.push(this[i]);
    }
  }
  return myAnswerArray;
};

Array.prototype.twoSum = function() {
  var myAnswerArray = [];
  var len = this.length;
  for(var i = 0; i < (len - 1); i++) {
    for(var j = (i + 1); j < len; j++) {
      if(this[i] + this[j] === 0) {
        myAnswerArray.push([i, j]);
      }
    }
  }
  return myAnswerArray;
};

var myTranspose = function(arr){
  var myAnswerArray = [];
  var len = arr.length;
  for(var i = 0; i < len; i++) {
    myAnswerArray.push([]);
    for(var j = 0; j < len; j++) {
      myAnswerArray[i][j] = arr[j][i];
    }
  }
  return myAnswerArray;
};

var myDoubler = function(arr){
  var myAnswerArray = [];
  var len = arr.length;
  for(var i = 0; i < len; i++){
    myAnswerArray.push(arr[i] * 2);
  }
  return myAnswerArray;
};

Array.prototype.myEach = function(callback){
  var len = this.length;
  for(var i = 0; i < len; i++) {
    callback(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(callback){
  var myAnswerArray = [];
  this.myEach(function (el) {
   myAnswerArray.push(callback(el));
  });
  return myAnswerArray;
};

Array.prototype.myInject = function(callback) {
  var myAnswer = this.shift(1);
  this.myEach(function (el) {
    myAnswer = callback(myAnswer, el);
  });
  return myAnswer;
};

var bubbleSort = function(arr) {
  var sorted = false;
  while (sorted === false) {
    sorted = true;
    var len = arr.length;
    for(var i = 0; i < (len - 1); i++){
      if (arr[i] > arr[i + 1]){
        sorted = false;
        var placeholder = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = placeholder;
      }
    }
  }
  return arr;
};

var subStrings = function(str) {
  var result = [];
  var arr = str.split("");
  var len = arr.length;
  for(var i = 0; i < len; i++){
    for(var j = i; j < len; j++){
      var subarr = [];
      for(var k = i; k <= j; k++){
        subarr.push(arr[k]);
      }
      var substr = subarr.join("");
      result.push(substr);
    }
  }
  return result.uniq();
};
