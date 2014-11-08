var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfLessThan (el1, el2, callback) {
  console.log("el1: " + el1 + ", el2: " + el2)
  reader.question("Is el1 greater than el2? true/false", function (boolString) {
    if (boolString == "true") { 
      callback(true); 
    } else {
        callback(false);
      }
  });
};

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if(i == arr.length - 1){
    outerBubbleSortLoop(madeAnySwaps); 
  } else {
    askIfLessThan(arr[i], arr[i+1], function (bool) {
      console.log(arr);
      if(bool){
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
      } else{
        madeAnySwaps = false;
      }
      innerBubbleSortLoop(arr, (i + 1), madeAnySwaps, outerBubbleSortLoop);
    });
  }
};

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop (madeAnySwaps) {
    if(madeAnySwaps){
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    } else{
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});