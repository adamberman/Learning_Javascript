window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  }
};

$(document).ready(function(){
  JournalApp.initialize();
  new JournalApp.Routers.Posts({$rootEl: $('#content')});
  Backbone.history.start();
});
