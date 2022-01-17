import {
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "@emotion/styled";
import { withRouter } from "next/router";

const Container = styled.div`
  margin: auto;
  width: 800px;
  paddingtop: 1rem;
`;

export async function getServerSideProps(context) {
  const allPokemon = await (
    await fetch("http://localhost:3000/pokemon.json")
  ).json();
  const pokemon = allPokemon.find(
    ({ id }) => id.toString() === context.query.id
  );
  return {
    props: { pokemon },
  };
}

export default withRouter(({ pokemon }) => {
  return (
    <Container>
      <CssBaseline />
      {pokemon && (
        <div>
          <h1>{pokemon.name.english}</h1>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(pokemon.base).map((k) => (
                <TableRow key={k}>
                  <TableCell>{k}</TableCell>
                  <TableCell>{pokemon.base[k]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Container>
  );
});
