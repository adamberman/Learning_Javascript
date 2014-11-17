Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var $html = $("<div>" +
  "Name: " + pokemon.escape('name') + ", " +
  "Type: " + pokemon.escape('poke_type') + ", " +
  "Attack: " + pokemon.escape('attack') + ", " +
  "Defense: " + pokemon.escape('defense') + ", " +
  "Moves: " + pokemon.escape('moves') + ", " +
  "<img src='" + pokemon.escape('image_url') + "'>" +
  "</div>");
  $html.addClass("pokemon-detail");
  this.$pokeDetail.html($html);
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
};
