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

