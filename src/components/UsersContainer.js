import { useState, useEffect } from "react";
import axios from "axios";
import UsersList from "./UsersList";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsersAxios = async () => {
    const getAxios = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(getAxios.data.map((user) => user));
  };

  useEffect(() => {
    getUsersAxios();
  }, []);

  return (
    <div className="usersContainer">
      <h1>Usuarios</h1>
      <table className="usersTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Ciudad</th>
            <th>Teléfono</th>
            <th>Empresa</th>
          </tr>
        </thead>
        <UsersList users={users} />
      </table>
    </div>
  );
};
export default Users;
