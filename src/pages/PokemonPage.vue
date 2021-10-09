<template>
  <h1>Who is this pokemon?</h1>
  <pokemon-picture :pokemonId="1" :show-pokemon="true" />
  <pokemon-options />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue';

export default {
  components: { PokemonPicture, PokemonOptions },
  name: 'pokemon-page'
};
</script>
