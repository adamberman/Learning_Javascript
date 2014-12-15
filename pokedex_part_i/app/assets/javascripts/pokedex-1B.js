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
  
  pokemon.fetch({
    success: function () {
      pokemon.toys().each(function (toy) {
        console.table(toy.attributes.name)
      })
    }
  });
  var $toys = $("<ul></ul>");
  $toys.addClass('toys');
  this.$pokeDetail.append($toys)
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.target).data('id');
  var pokemon = this.pokes.get(id);
  this.renderPokemonDetail(pokemon);
};
