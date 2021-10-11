import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { pokemons } from '../mocks/pokemons.mock';

describe('Pokemon Options Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, { props: { pokemons } });
  });

  test('debe hacer match con snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('debe de mostrar las cuatro opciones correctamente', () => {
    const liEls = wrapper.findAll('li');
    expect(liEls.length).toBe(4);
    const [l1, l2, l3, l4] = liEls;
    expect(l1.text()).toBe('bulbasaur');
    expect(l2.text()).toBe('ivysaur');
    expect(l3.text()).toBe('venusaur');
    expect(l4.text()).toBe('charmander');
  });

  test('debe de emitir "selection" cuando sus respectivos parámetros al hacer click en las options', () => {
    const liEls = wrapper.findAll('li');
    const [l1, l2, l3, l4] = liEls;
    l1.trigger('click');
    l2.trigger('click');
    l3.trigger('click');
    l4.trigger('click');

    console.log(wrapper.emitted('selection'));
    expect(wrapper.emitted('selection').length).toBe(4);
    expect(wrapper.emitted('selection')[0]).toEqual([5]);
    expect(wrapper.emitted('selection')[1]).toEqual([10]);
    expect(wrapper.emitted('selection')[2]).toEqual([15]);
    expect(wrapper.emitted('selection')[3]).toEqual([20]);
  });
});
