JournalApp.Views.PostForm = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render)
  },
  
  template: JST['posts/form'],
  
  render: function(){
    var that = this;
    var content = this.template({
      post: that.model
    })
    this.$el.html(content);
    return this;
  },
  
  events: {
    'submit form': 'handleSubmit'
  },
  
  handleSubmit: function(event){
    debugger;
    event.preventDefault();
    var $target = $(event.currentTarget);
    var formData = $target.serializeJSON();
    var that = this;
    this.model.set(formData.post);
    debugger;
    this.model.save(formData.post, {
      success: function(){
        Backbone.history.navigate('', {trigger: true})
      },
      error: function(model, resp){
        console.log(resp.responseText);
        that.render();
      }
    })
    
  }
  
})