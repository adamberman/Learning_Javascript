JournalApp.Views.PostShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render)
  },
  events: {
    'click button.back': 'backToIndex'
  },
  
  template: JST['posts/show'],
  
  render: function(){
    var that = this;
    var content = this.template({
      post: that.model
    })
    this.$el.html(content);
    return this;
  },
  
  backToIndex: function(){
    Backbone.history.navigate('', { trigger: true })
  }
})