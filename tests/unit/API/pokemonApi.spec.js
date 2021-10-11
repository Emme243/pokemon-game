import pokemonApi from '@/API/pokemonApi.js';

describe('pokemon api', () => {
  test('axios debe de estar configurado con el api de pokemon', () => {
    const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon';
    expect(pokemonApi.defaults.baseURL).toBe(pokemonApiUrl);
  });
});
