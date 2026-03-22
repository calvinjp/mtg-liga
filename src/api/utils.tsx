export async function getPokemonList() {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
    .then((res) => res.json())
    .catch((error) => console.error("Error: " + error));
  return data.results;
}

export async function getPokemonDescription(pokemonName: string) {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`,
  )
    .then((res) => res.json())
    .catch((error) => console.error("Error: " + error));
  return data.flavor_text_entries[0].flavor_text;
}

export async function getPokemonSprite(pokemonName: string) {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((res) => res.json())
    .catch((error) => console.error("Error: " + error));
  return data.sprites.front_default;
}
