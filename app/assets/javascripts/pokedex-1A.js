Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var $listItem = $("<li>Name: " + pokemon.escape('name') + ", Type: " + 
    pokemon.escape('poke_type') + "</li>").addClass("poke-list-item");
  $listItem.attr('data-id', pokemon.id);
  this.$pokeList.append($listItem);
};

Pokedex.RootView.prototype.refreshPokemon = function (callback) {
  var that = this;
  this.pokes.fetch({success: function(){
    that.pokes.forEach(function(poke){
      this.addPokemonToList(poke);
    }.bind(that))
  }})
};
