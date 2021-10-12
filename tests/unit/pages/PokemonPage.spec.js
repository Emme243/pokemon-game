import { shallowMount, mount } from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';
import PokemonPicture from '@/components/PokemonPicture';
import PokemonOptions from '@/components/PokemonOptions';
import { pokemons } from './../mocks/pokemons.mock';

describe('Pokemon Page Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage);
  });

  test('debe hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de llamar el mixPokemonArray al montar', () => {
    const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArr');
    shallowMount(PokemonPage);
    expect(mixPokemonArraySpy).toHaveBeenCalled();
  });

  test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        };
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {
    const wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        };
      }
    });

    // Ambos debe existir
    const pokemonPictureWrapper = wrapper.findComponent(PokemonPicture);
    expect(pokemonPictureWrapper.exists()).toBeTruthy();

    const pokemonOptionsWrapper = wrapper.findComponent(PokemonOptions);
    expect(pokemonOptionsWrapper.exists()).toBeTruthy();

    // PokemonPicture attribute pokemonId === 5
    expect(pokemonPictureWrapper.props('pokemonId')).toBe(5);

    // PokemonOptions attribute pokemons toBe true
    expect(pokemonOptionsWrapper.props('pokemons')).toBeTruthy();
  });

  test('pruebas con checkAnswer', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        };
      }
    });

    await wrapper.vm.checkAnswer(5);
    expect(wrapper.find('h2').exists()).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
    expect(wrapper.find('h2').text()).toBe(`Correcto, ${pokemons[0].name}`);

    await wrapper.vm.checkAnswer(10);
    expect(wrapper.vm.message).toBe(`Oops, era ${pokemons[0].name}`);
  });
});
