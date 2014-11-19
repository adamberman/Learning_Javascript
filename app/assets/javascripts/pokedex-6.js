Pokedex.Router = Backbone.Router.extend({
  routes: {
    "": "pokemonIndex",
    "pokemon/:id": "pokemonDetail" 
  },

  pokemonDetail: function (id, callback) {
    if(!this._pokemonIndex){
      this.pokemonIndex(function(){
        this.pokemonDetail(id, callback);
      });
      
    }
  },

  pokemonIndex: function (callback) {
    this._pokemonIndex = new Pokedex.Views.PokemonIndex();
    this._pokemonIndex.refreshPokemon(callback)
    debugger;
  },

  toyDetail: function (pokemonId, toyId) {
  }
});


$(function () {
  new Pokedex.Router();
  Backbone.history.start();
  var pokemonIndex = new Pokedex.Views.PokemonIndex();
  pokemonIndex.refreshPokemon();
  $("#pokedex .pokemon-list").html(pokemonIndex.$el);
});