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

var range = function(start, end) {
  var arr = [];
  if(start > end){
    return arr;
  } else{
    arr = [start];
    var newArr = range((start + 1), end);
    return arr.concat(newArr);
  }
};

var rSum = function(arr){
  var sum = 0;
  if (arr.length === 0){
    return sum;
  } else {
    sum = arr.shift(1);
    return (sum + rSum(arr));
  }
};

var iSum = function(arr){
  var sum = 0;
  var len = arr.length;
  for(i = 0; i < len; i++){
    sum += arr[i];
  }
  return sum;
};

var exp1 = function(num, exp){
  var result = 1;
  if (exp ===0){
    return result;
  } else{
    var step = exp1(num, (exp-1));
    return (num * step);
  }
};

var exp2 = function(num, exp){
  var result = 1;
  if (exp ===0){
    return result;
  } else{
    if (exp % 2 === 0){
      var step = exp2(num, (exp / 2));
      return step * step;
    } else {
      var step = exp2(num, ((exp - 1) / 2));
      return num * step * step;
    }
  }
};

var fib = function(n) {
  var arr = [];
  if(n === 0) {
    return arr;
  } else if (n === 1){
    return [0];
  } else if (n === 2){
    return [0, 1];
  }
  var step1 = fib(n - 1);
  step1.push(step1[n - 2] + step1[n - 3]);
  return step1;
};

var bsearch = function(arr, target){
  var pivot = arr.length/2|0;
  if (target === arr[pivot]){
    return pivot;
  } else if (target < arr[pivot]){
    var sliced_array = arr.slice(0, pivot);
    return bsearch(sliced_array, target);
  } else {
    var sliced_array = arr.slice(pivot);
    return pivot + bsearch(sliced_array, target);
  }
  return nil;
};

var makeChange = function(value, coins){
  if (value === 0){
    return [];
  } else if (coins[0] === 1){
    return new Array(value).join(1).split("");
  } else{
    if (value < coins[0]){
      return makeChange(value, coins.slice(1));
    } else{
      var case1 = makeChange(value, coins.slice(1));
      var case2 = [coins[0]].concat(makeChange((value - coins[0]), coins));
      if (case1.length > case2.length){
        return case2;
      } else{
        return case1;
      }
    }
  }
};

var mergeSort = function(arr) {
  var middle = arr.length/2|0;
  if(arr.length === 1){
    return arr;
  } else {
    var half1 = mergeSort(arr.slice(0, middle));
    var half2 = mergeSort(arr.slice((middle)));
    return merge(half1, half2);
  }
};

var merge = function(half1, half2){
  var mergedArr = [];
  while(half1.length !== 0 && half2.length !== 0) {
    if (half1[0] > half2[0]){
      mergedArr.push(half2.shift());
    } else {
      mergedArr.push(half1.shift());
    }
  }
  return mergedArr.concat(half1).concat(half2);
};

var subsets = function(arr) {
  if (arr.length === 0) {
    return [[]];
  } else {
    var prevSubsets = subsets(arr.slice(0, (arr.length - 1)));
    var secondHalf = prevSubsets.myMap(function (el) {
      return el.concat(arr[(arr.length - 1)]);
    });
    return prevSubsets.concat(secondHalf);
  }
};