var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback){
  if(numsLeft > 0){
    reader.question("What number would you like to add?", function(numString1) {
      var num = parseInt(numString1);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft-1, completionCallback)
    });
  } else { completionCallback(sum) };
};

var completionCallback = function(sum) {
  console.log("Total Sum:" + sum);
  reader.close();
}

addNumbers(0, 3, completionCallback);