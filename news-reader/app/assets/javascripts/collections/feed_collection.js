NewsReader.Collections.Feeds = Backbone.Collection.extend({
  model: NewsReader.Models.Feed,
  
  url: "/api/feeds"
});

NewsReader.feeds = new NewsReader.Collections.Feeds();