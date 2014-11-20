JournalApp.Views.PostsIndex = Backbone.View.extend({

  initialize: function(){
    this.listenTo(this.collection, "add remove reset change:title sync", this.render)
  },
  
  template: JST['posts/index'],
  
  render: function(){
    var content = this.template({
      posts: this.collection
    });
    this.$el.html();
    this.$el.html(content);

    return this;
  },
  
  events: {
    "click button.delete": "handleDelete"
  },
  
  handleDelete: function(event){
    var $target = $(event.currentTarget);
    var id = $target.data('id');
    this.collection.remove(id);
  }

});
