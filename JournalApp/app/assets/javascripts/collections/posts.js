JournalApp.Collections.Posts = Backbone.Collection.extend({
  url: '/posts',
  model: JournalApp.Models.Post,
  getOrFetch: function(id){
    var posts = this;
    var post;
    if (!(post = this.get(id))){
      post = new JournalApp.Models.Post({ id: id });
      post.fetch({
        success: function() {
          posts.add(post);
        }
      });
    }
    
    return post;
  }
});

JournalApp.posts = new JournalApp.Collections.Posts();