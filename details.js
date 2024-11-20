const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get("id");

(async function fetchPokemonDetails() {
  const detailsDiv = document.getElementById("details");
  detailsDiv.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!response.ok) throw new Error("Pokémon not found");
    const data = await response.json();

    detailsDiv.innerHTML = `
      <div class="text-center">
        <img src="${data.sprites.front_default}" alt="${data.name}" class="mb-4">
        <h2>${data.name.toUpperCase()}</h2>
        <p>Type: ${data.types.map(t => t.type.name).join(", ")}</p>
        <p>Abilities: ${data.abilities.map(a => a.ability.name).join(", ")}</p>
        <p>Stats:</p>
        <ul>${data.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join("")}</ul>
        <a href="search.html" class="btn btn-secondary mt-3">Back to Search</a>
      </div>`;
  } catch (error) {
    detailsDiv.innerHTML = `<p class="text-danger">Pokémon not found. Please try again.</p>`;
  }
})();
