const Character = ({ name, image, species, status, gender }) => {
  let classNameStatus;
  let classNameGender;

  if (species === "Human") {
    species = "Humano";
  }

  switch (status) {
    case "Alive":
      status = "Vivo";
      classNameStatus = "alive";
      break;
    case "Dead":
      status = "Muerto";
      classNameStatus = "dead";
      break;
    case "unknown":
      status = "Desconocido";
      classNameStatus = "unknown";
      break;
    default:
      status = "Desconocido";
      classNameStatus = "unknown";
  }

  switch (gender) {
    case "Male":
      gender = "Masculino";
      classNameGender = "male";
      break;
    case "Female":
      gender = "Femenino";
      classNameGender = "female";
      break;
    case "unknown":
      gender = "Desconocido";
      classNameGender = "unknown";
      break;
    default:
      gender = "Desconocido";
      classNameGender = "unknown";
  }

  return (
    <div className="characterCard">
      <img src={image} alt="avatar" className="characterImage" />
      <h2 className="characterName">{name}</h2>
      <div>
        <p className="characterDetail">Especie: {species}</p>
        <br />
        <p>Estado:</p>
        <p className={classNameStatus}> {status}</p>
        <br />
        <p>Género:</p>
        <p className={classNameGender}> {gender}</p>
      </div>
    </div>
  );
};
export default Character;
