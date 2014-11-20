NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "index",
    "/feeds/:id": "show"
  },
  
  index: function () {
    // debugger;
    NewsReader.feeds.fetch();
    var view = new NewsReader.Views.FeedIndex({ collection: NewsReader.feeds });
    view.render();
    this.$rootEl.html(view.$el);
  },
  
  show: function () {
    
  }
  
  
  
  
})