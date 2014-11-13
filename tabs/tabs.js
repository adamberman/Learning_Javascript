(function(){
   if(typeof "undefined"){
     window.$ = {};
   }
})

$.Tabs = function (el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.data('content-tabs'));
  this.$activeTab = $(this.$contentTabs.find('.active'));
  this.clickTab();
  
};

$.fn.tabs = function () {
  return this.each(function () {
    new $.Tabs(this);
  });
};

$.Tabs.prototype.clickTab = function() {
  var that = this
  this.$el.on("click", 'li', function(event){
    event.preventDefault();
    that.$activeTab.removeClass('active');
    var $currentDiv = $(that.$activeTab.filter('div'));
    $currentDiv.addClass('transitioning');
    var $currentTab = $(event.currentTarget);
    $currentTab.addClass('active');
    
    var $id = $currentTab.find('a').attr('href');
    var $div = $(that.$el.find($id));
    $div.addClass('active');
    that.$activeTab = $(that.$contentTabs.find('.active'));
  } )
  
}