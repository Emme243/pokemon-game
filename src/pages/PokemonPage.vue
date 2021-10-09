<template>
  <h1>Who is this pokemon?</h1>
  <pokemon-picture />
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
