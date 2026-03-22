import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  getPokemonDescription,
  getPokemonList,
  getPokemonSprite,
} from "../api/utils";

const Pokedex = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [selected, setSelected] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [sprite, setSprite] = useState<string>("");

  type Pokemon = {
    name: string;
    url: string;
  };

  useEffect(() => {
    //cant put async here since useeffect does not expect a promise
    const getData = async () => {
      //outer function must then have async
      const result = await getPokemonList(); // since we getpokemon is a promise, we need to await
      setData(result);

      if (result.length > 0) {
        setSelected(result[0].name);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    async function getDesc() {
      const result = await getPokemonDescription(selected);
      setDescription(result);
      const spriteResult = await getPokemonSprite(selected);
      setSprite(spriteResult);
    }
    getDesc();
  }, [selected]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
        bgcolor: "#ACBFA4",
        padding: 10,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "#FF7F11",
          fontFamily: "Space Grotesk",
          fontWeight: "600",
        }}
      >
        Pokemon List
      </Typography>
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        {data.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      {selected && ( // && is conditional rendering
        <>
          <Typography
            variant="h1"
            sx={{
              color: "#FF7F11",
              fontFamily: "Space Grotesk",
              fontWeight: "600",
            }}
          >
            {selected}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: "#FF7F11",
              fontFamily: "Space Grotesk",
              fontWeight: "600",
            }}
          >
            {description}
          </Typography>
          <img src={sprite} style={{ height: "450px", width: "450px" }}></img>
        </>
      )}
    </Box>
  );
};
export default Pokedex;
