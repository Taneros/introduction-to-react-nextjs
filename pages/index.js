import styled from "@emotion/styled";
import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";
import { CssBaseline } from "@mui/material";
import store from "../src/store";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1rem;
`;

export async function getServerSideProps() {
  const pokemon = await (
    await fetch("http://localhost:3000/pokemon.json")
  ).json();
  return {
    props: { pokemon },
  };
}

const Home = ({ pokemon }) => {
  store.setPokemon(pokemon);
  return (
    <Container>
      <CssBaseline />
      <Title>Pokemon Search App</Title>
      <TwoColumnLayout>
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  );
};

export default Home;
