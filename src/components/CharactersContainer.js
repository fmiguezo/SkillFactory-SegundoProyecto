import { useState, useEffect } from "react";
import axios from "axios";
import CharactersList from "./CharactersList";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharactersAxios = async () => {
    const getAxios = await axios.get("https://rickandmortyapi.com/api/character/");
    setCharacters(getAxios.data.results.map((character) => character));
  };

  useEffect(() => {
    getCharactersAxios();
  }, []);

  return (
    <div>
      <h1>Personajes</h1>
      <br />
      <div>
        <CharactersList characters={characters} />
      </div>
    </div>
  );
};
export default Characters;
