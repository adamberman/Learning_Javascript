/*global Pokedex, JST */

Pokedex.Views = {};

Pokedex.Views.PokemonIndex = Backbone.View.extend({
  events: {
    "click li": "selectPokemonFromList"
  },

  initialize: function () {
    this.collection = new Pokedex.Collections.Pokemon()
  },

  addPokemonToList: function (pokemon) {
    var shortInfo = ['name', 'poke_type'];
    var content = JST["pokemonListItem"]({ pokemon: pokemon,  shortInfo: shortInfo});
    this.$el.append(content);
  },

  refreshPokemon: function (options, callback) {
    var that = this;
    this.collection.fetch({
      success: function(){
        that.render();
        callback();
      }
    });
  },

  render: function () {
    this.$el.empty();
    this.collection.each(function(pokemon){
      this.addPokemonToList(pokemon);
    }.bind(this))
  },

  selectPokemonFromList: function (event) {
    var $target = $(event.target);
    var pokeId = $target.data('id');
    var pokemon = this.collection.get(pokeId);
    // var view = new Pokedex.Views.PokemonDetail({model: pokemon});
    Backbone.history.navigate("pokemon/" + pokeId, { trigger: true });
    // $("#pokedex .pokemon-detail").html(view.$el);
    // view.refreshPokemon();
  }
});

Pokedex.Views.PokemonDetail = Backbone.View.extend({
  events: {
    "click .toys li": "selectToyFromList" 
  },

  refreshPokemon: function (options) {
    var detailView = this;
    this.model.fetch({
      success: function () {
        detailView.render();
      }
    });
  },

  render: function () {
    var attrs = ["name", "attack", "defense", "poke_type", "moves"];
    var content = JST['pokemonDetail']({
      pokemon: this.model,
      attrs: attrs
    });
    var shortInfo = ['name', 'happiness', 'price'];
    var that = this;
    var toyContent = "";
    
    this.model.toys().each(function (toy) {
       toyContent += JST['toyListItem']({ 
        toy: toy, 
        shortInfo: shortInfo });
    });
    
    this.$el.html(content);
    this.$el.find('.toys').html(toyContent);
  },

  selectToyFromList: function (event) {
    var $target = $(event.currentTarget);
    var toyId = $target.data('id');
    var toy = this.model.toys().get(toyId);
    var toyDetailView = new Pokedex.Views.ToyDetail({model: toy});
    $("#pokedex .toy-detail").html(toyDetailView.$el)
    toyDetailView.render();
  }
});

Pokedex.Views.ToyDetail = Backbone.View.extend({
  render: function () {
    var content = JST['toyDetail']({ toy: this.model, pokes: [] });
    this.$el.html(content);
  }
});


// $(function () {
//   var pokemonIndex = new Pokedex.Views.PokemonIndex();
//   pokemonIndex.refreshPokemon();
//   $("#pokedex .pokemon-list").html(pokemonIndex.$el);
// });

