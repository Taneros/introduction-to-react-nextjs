import PokemonRow from "./PokemonRow";
import { observer } from "mobx-react";
import store from "../src/store";

const PokemonTable = () => (
  <table width="100%">
    <thead>
      <tr>
        <th>Pokemon</th>
        <th>Base</th>
        <th>Choose</th>
      </tr>
    </thead>
    <tbody>
      {store.pokemon
        .filter((pokemon) =>
          pokemon.name.english
            .toLowerCase()
            .includes(store.filter.toLowerCase())
        )
        .slice(0, 20)
        .map((pokemon) => (
          <PokemonRow
            pokemon={pokemon}
            key={[pokemon.id, pokemon.name.english].join(":")}
            onClick={(pokemon) => store.setSelectedPokemon(pokemon)}
          />
        ))}
    </tbody>
  </table>
);

export default observer(PokemonTable);
