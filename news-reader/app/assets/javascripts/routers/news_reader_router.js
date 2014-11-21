NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "index",
    "feeds/:id": "feedShow"
  },
  
  index: function () {
    NewsReader.feeds.fetch();
    var view = new NewsReader.Views.FeedIndex({ 
      collection: NewsReader.feeds 
    });
    this.$rootEl.html(view.render().$el);
  },
  
  feedShow: function (id) {
    var model = new NewsReader.Models.Feed({id: id})
    model.fetch();
    var view = new NewsReader.Views.FeedShow({
      model: model
    });
    this.$rootEl.html(view.render().$el);
  }
})