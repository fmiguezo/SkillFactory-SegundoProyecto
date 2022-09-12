const User = ({ id, name, email, phone, address, company }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>{company}</td>
    </tr>
  );
};
export default User;
