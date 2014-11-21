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
    this._swapView(view);
  },
  
  feedShow: function (id) {
    var model = new NewsReader.Models.Feed({id: id})
    model.fetch();
    var view = new NewsReader.Views.FeedShow({
      model: model
    });
    this._swapView(view);
  },
  
  _swapView: function(newView){
    if(this.currentView){
      this.currentView.remove();
    }
    this.$rootEl.html(newView.render().$el);
    this.curentView = newView;
  }
})