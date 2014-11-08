function Clock() {
  this.time = new Date();
}
Clock.TICK = 5000;

Clock.prototype.printTime = function(){
  var h = this.time.getHours();
  var m = this.time.getMinutes();
  var s = this.time.getSeconds();
  console.log(h + ":" + m + ":" + s);
};

Clock.prototype.run = function(){
 var tickTime = ((this.time * 1) + Clock.TICK);
 this.time = new Date(tickTime);
 this.printTime();
 setTimeout(this.run.bind(this), Clock.TICK);
};

clock = new Clock();
clock.run();