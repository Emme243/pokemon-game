import pokemonApi from '../API/pokemonApi';

export const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));
  return pokemonsArr.map((_, idx) => idx + 1);
};

const getPokemonOptions = async () => {
  const maxPokemons = 4;
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await getPokemonNames(mixedPokemons.slice(0, maxPokemons));
  return pokemons;
};

export const getPokemonNames = async (pokemons = []) => {
  const promiseArr = pokemons.map(pokemon => pokemonApi.get(`/${pokemon}`));
  const resps = await Promise.all(promiseArr);
  return resps.map(({ data }) => ({ name: data.name, id: data.id }));
};

export default getPokemonOptions;
