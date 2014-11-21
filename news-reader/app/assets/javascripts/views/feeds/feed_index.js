NewsReader.Views.FeedIndex = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  template: JST['feeds/feed_index'],
  
  render: function () {
    var template = this.template({collection: this.collection});
    this.$el.html(template);
    return this;
  }
  
});