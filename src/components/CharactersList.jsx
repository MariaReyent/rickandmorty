import { Cards } from "./Cards";
import { Grid } from "@chakra-ui/react";

function CharactersList({ character }) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      {character.results.map((char) => (
        <Cards key={char.id} name={char.name} image={char.image} />
      ))}
    </Grid>
  );
}

export { CharactersList };
