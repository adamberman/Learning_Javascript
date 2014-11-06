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

