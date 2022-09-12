import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <Link className="linkNavBar" to="/">
        <p>Inicio</p>
      </Link>
      <Link className="linkNavBar" to="/characters">
        <p>Personajes</p>
      </Link>
      <Link className="linkNavBar" to="/users">
        <p>Usuarios</p>
      </Link>
      <Link className="linkNavBar" to="/form">
        <p>Contacto</p>
      </Link>
    </div>
  );
};

export default NavBar;
