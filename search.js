document.getElementById("searchForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const query = document.getElementById("pokemonInput").value.toLowerCase();
  const resultDiv = document.getElementById("pokemonResult");
  resultDiv.innerHTML = "<p>Loading...</p>";

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    if (!response.ok) throw new Error("Pokémon not found");
    const data = await response.json();

    resultDiv.innerHTML = `
      <div class="card mx-auto" style="width: 18rem;">
        <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${data.name.toUpperCase()}</h5>
          <p class="card-text">Type: ${data.types.map(t => t.type.name).join(", ")}</p>
          <a href="details.html?id=${data.id}" class="btn btn-primary">View Details</a>
        </div>
      </div>`;
  } catch (error) {
    resultDiv.innerHTML = `<p class="text-danger">Pokémon not found. Please try again.</p>`;
  }
});
