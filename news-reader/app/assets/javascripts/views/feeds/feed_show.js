NewsReader.Views.FeedShow = Backbone.View.extend({
  initialize: function(options){
    this.listenTo(this.model, 'sync', this.render);
  },
  
  events: {
    "click button.refresh": "refresh"
  },
  
  refresh: function () {
    this.model.fetch();
  },
  
  template: JST['feeds/feed_show'],
  
  render: function(){
    var template = this.template({ 
      model: this.model 
    });
    this.$el.html(template);
    return this;
  }
})
