<template>
  <h1>Who is this pokemon?</h1>
  <pokemon-picture :pokemonId="1" :show-pokemon="true" />
  <pokemon-options :pokemons="pokemonArr" />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  name: 'pokemon-page',
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: []
    };
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions();
    }
  },
  mounted() {
    this.mixPokemonArr();
  }
};
</script>
