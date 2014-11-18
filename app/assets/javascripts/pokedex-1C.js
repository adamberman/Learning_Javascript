Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokeman = new Pokedex.Models.Pokemon(attrs);
  var that = this;
  pokeman.save({success: function(){
    that.pokes.add(pokeman);
    that.addPokemonToList(pokeman);
  }});
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
};
