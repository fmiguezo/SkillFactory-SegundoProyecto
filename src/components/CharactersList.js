import Character from "./Character";

const CharacterList = ({ characters }) => {
  return (
    <div className="charactersContainer">
      {characters.map((character) => {
        return (
          <Character
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            gender={character.gender}
          />
        );
      })}
    </div>
  );
};
export default CharacterList;
