import React, { PropTypes } from 'react'

const UserListComponent = (props) => {
  const {users} = props;
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th> </th>
        </tr>
        {users.map((user, i) => (
          <tr key={i} >
            <td>{user.user_id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <a href={`/#/user/${user.user_id}`} >Details</a >
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};

UserListComponent.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserListComponent