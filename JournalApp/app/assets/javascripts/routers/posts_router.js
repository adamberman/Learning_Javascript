JournalApp.Routers.Posts = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "postsIndex",
    "posts/:id/edit": "postsForm",
    "posts/:id": "postsShow"
    
  },
  
  postsIndex: function(){
    JournalApp.posts.fetch();
    var view = new JournalApp.Views.PostsIndex({
      collection: JournalApp.posts
    });
    this.$rootEl.html(view.render().$el);
  },
  
  postsShow: function(id){
    var view = new JournalApp.Views.PostShow({
      model: JournalApp.posts.getOrFetch(id)
    });
    this.$rootEl.html(view.render().$el);
  },
  
  postsForm: function(id) {
    var view = new JournalApp.Views.PostForm({
      model: JournalApp.posts.getOrFetch(id)
    });
    this.$rootEl.html(view.render().$el);
  }
});
