$.Carousel = function (el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.activate();
  this.$el.on('click', '.slide-right', this.slide.bind(this, -1));
  this.$el.on('click', '.slide-left', this.slide.bind(this, 1));
};

$.Carousel.prototype.activate = function(){
  var $firstChild = this.$el.find('div.items > div:first');
  $firstChild.addClass('active');
};

$.fn.carousel = function () {
  return this.each(function () {
    new $.Carousel(this);
  });
};

$.Carousel.prototype.slide = function(dir) {
  if(this.transitioning){
    return;
  }
  this.transitioning = true;
  var $divItems = this.$el.find('div.items > div');
  var $currentActive = $divItems.eq(this.activeIdx);
  // $currentActive.removeClass('active');
  
  if(this.activeIdx + dir < 0){
    this.activeIdx = $divItems.length - 1;
  } else {
    this.activeIdx += dir;
    this.activeIdx = this.activeIdx % $divItems.length;
  }
  
  var $nextItem = $divItems.eq(this.activeIdx);
  
  if(dir === -1){
    $nextItem.addClass('right');
    $currentActive.addClass('left');
    setTimeout(function() {
      $nextItem.removeClass('right')
    }, 0);
  } else {
    $nextItem.addClass('left');
    $currentActive.addClass('right');
    setTimeout(function(){
      $nextItem.removeClass('left')
    }, 0);
  }
  var that = this;
  this.$el.one('transitionend', 'div', function(){
    $currentActive.removeClass();
    that.transitioning = false;
  })
  $nextItem.addClass('active');

  true;
}