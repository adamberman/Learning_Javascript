$.Thumbnail = function (el) {
  this.$el = $(el);
  this.$activeImg = this.$el.find('.gutter-images > div:first');
  this.activate(this.$activeImg);
  this.gutterIdx = 0;
  this.$images = this.$el.find('.gutter-images > div');
  this.fillGutterImages();
  this.$el.on("click", ".gutter-images > div", this.onClick.bind(this));
  this.$el.on("mouseenter", ".gutter-images > div", this.onMouseEnter.bind(this));
  this.$el.on("mouseleave", ".gutter-images > div", this.onMouseLeave.bind(this));
};

$.fn.thumbnail = function () {
  return this.each(function () {
    new $.Thumbnail(this);
  });
};

$.Thumbnail.prototype.fillGutterImages = function(){
  this.$el.find('.gutter-images > div').remove();    
  var $gutterImages = this.$el.find('.gutter-images');
  for(var i = this.gutterIdx; i < this.gutterIdx + 5; i ++){
    $gutterImages.html(this.$images[i]);
  }
  return $gutterImages.html();
}

$.Thumbnail.prototype.activate = function($img){
  var $clonedImg = $img.clone();
  var $activeDiv = this.$el.find('.active');
  $activeDiv.html($clonedImg);
}

$.Thumbnail.prototype.onClick = function(event){
  var $currentImg = $(event.currentTarget);
  this.$activeImg = $currentImg;
  this.activate(this.$activeImg);
}

$.Thumbnail.prototype.onMouseEnter = function(event){
  var $currentImg = $(event.currentTarget);
  this.activate($currentImg);
}

$.Thumbnail.prototype.onMouseLeave = function(event){
  this.activate(this.$activeImg);
}