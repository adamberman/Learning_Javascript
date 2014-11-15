// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$.FollowToggle = function (el) {
  this.$el = $(el);
  this.userId = this.$el.data('user-id');
  this.followedState = this.$el.data('followed-state');
  this.render();
  this.$el.on('click', this.handleClick.bind(this));
};

$.FollowToggle.prototype.render = function () {
  var setText = "";
  if (this.followedState === "following" || this.followedState === "unfollowing") {
      this.$el.prop('disabled', true);
  } else {
    if (this.followedState === "followed") {
      setText = "Unfollow!";
    } else {
      setText = "Follow!";
    }
    this.$el.prop('disabled', false);
    this.$el.html(setText);
  }
};

$.FollowToggle.prototype.handleClick = function (event) {
  event.preventDefault();

  if (this.followedState === 'followed') {
    this.followedState = 'unfollowing';
    this.render();
    var that = this;
    $.ajax({
      url: "/users/" + this.userId + "/follow",
      type: "DELETE",
      dataType: 'json',
      success: function(){
        that.followedState = "unfollowed";
        that.render();
      }
    })
  } else {
    this.followedState = 'following';
    this.render();
    var that = this;
    $.ajax({
      url: "/users/" + this.userId + "/follow",
      type: "POST",
      dataType: 'json',
      success: function(){
        that.followedState = "followed";
        that.render();
      }
    })
  };
}

$.fn.followToggle = function () {
  return this.each(function () {
    new $.FollowToggle(this);
  });
};

$(function() {
  $('.follow-toggle').followToggle();
});


$.UserSearch = function(el){
  this.$el = $(el);
  this.$input = this.$el.find('.search-string');
  this.$ul = this.$el.find('ul');
  this.$input.on('input', this.handleInput.bind(this));
};

$.UserSearch.prototype.handleInput = function(event){
  var that = this;
  $.ajax({
    url: "/users/search",
    type: "GET",
    dataType: 'json',
    data: { query: this.$input.val() },
    success: function(results){
      that.renderResults(results);
    }
  })
}

$.UserSearch.prototype.renderResults = function(results) {
  this.$ul.empty();
  for (var i = 0; i < results.length; i++) {
    var string = "";
    string += "<li><a href=/users/" + results[i].id;
    string += ">" + results[i].username + "</a></li>";
    this.$ul.append(string);
  }
}

$.fn.UserSearch = function () {
  return this.each(function () {
    new $.UserSearch(this);
  });
};

$(function() {
  $('.user-search').UserSearch();
});

