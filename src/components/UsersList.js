import User from "./User";

const UserList = ({ users }) => {
  return (
    <tbody>
      {users.map((user) => {
        return (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address.city}
            phone={user.phone}
            company={user.company.name}
          />
        );
      })}
    </tbody>
  );
};
export default UserList;
