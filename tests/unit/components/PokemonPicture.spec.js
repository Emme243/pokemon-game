import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture.vue';

describe('PokemonPicture component', () => {
  test('should match snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, { props: { pokemonId: 100 } });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar la imagen oculta y el pokemon 100', () => {
    const wrapper = shallowMount(PokemonPicture, { props: { pokemonId: 100, showPokemon: false } });

    const [img1, img2] = wrapper.findAll('img');
    expect(img1.exists()).toBeTruthy();
    expect(img2).toBeUndefined();

    expect(img1.classes('fade-in')).toBeTruthy();

    expect(wrapper.vm.imgSrc).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
    );
    expect(img1.attributes('src')).toBe(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
    );
  });

  test('debe de mostrar el pokemon si showPokemon:true', () => {
    const wrapper = shallowMount(PokemonPicture, { props: { pokemonId: 100, showPokemon: true } });

    const [img1, img2] = wrapper.findAll('img');
    expect(img1.exists()).toBeTruthy();
    expect(img2).toBeUndefined();

    expect(img1.classes('hidden-pokemon')).toBeTruthy();
  });
});
