(function(){
  if(typeof "undefined"){
    window.$ = {};
  }
})

$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data('content-tabs'));
  this.$activeTab = $(this.$contentTabs.find('.active'));
  this.$el.on("click", 'li', this.clickTab.bind(this));
  
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs.prototype.clickTab = function(event) {
  var that = this
  event.preventDefault();
  that.$activeTab.removeClass('active');
  var $currentDiv = $(that.$activeTab.filter('div'));
  $currentDiv.addClass('transitioning');
  var $currentTab = $(event.currentTarget);
  that.$el.one('transitionend', 'div', function(){
    $currentDiv.removeClass('transitioning');
    $currentTab.addClass('active');
    var $id = $currentTab.find('a').attr('href');
    var $div = $(that.$el.find($id));
    $div.addClass('active transitioning');
    var that2 = that;
    setTimeout(function(){
      $div.removeClass('transitioning');
    }, 0);
    that.$activeTab = $(that.$contentTabs.find('.active'));
  })
}