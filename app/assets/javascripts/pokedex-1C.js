Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var pokeman = new Pokedex.Models.Pokemon(attrs);
  var that = this;
  pokeman.save({},{success: function(){
    that.pokes.add(pokeman);
    debugger;
    that.addPokemonToList(pokeman);
    callback(pokeman);
  }});
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var options = $(event.target).serializeJSON();
  this.createPokemon(options, this.renderPokemonDetail.bind(this));
};
