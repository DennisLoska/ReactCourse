import React from 'react';
import getResources from './getResources';

const UserList = () => {
  const users = getResources('users');
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
