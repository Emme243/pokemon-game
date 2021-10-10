<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>Who is this pokemon?</h1>
    <pokemon-picture :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
    <pokemon-options :pokemons="pokemonArr" @selection="checkAnswer" />

    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
  </div>
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
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    };
  },
  methods: {
    async mixPokemonArr() {
      this.pokemonArr = await getPokemonOptions();
      const rdnInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rdnInt];
    },
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (selectedId === this.pokemon.id) this.message = `Correcto, ${this.pokemon.name}`;
      else this.message = `Oops, era ${this.pokemon.name}`;
    },
    async newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemon = null;
      await this.mixPokemonArr();
    }
  },
  mounted() {
    this.mixPokemonArr();
  }
};
</script>
