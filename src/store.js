import { makeAutoObservable } from "mobx";

class Store {
  pokemon = require("./pokemon.json");
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }

  setFilter(filter) {
    this.filter = filter;
  }

  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

export default store;
