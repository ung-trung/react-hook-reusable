import React from 'react';
import useResource from './useResource';

const UserList = () => {
  const users = useResource('users');
  return (
    <>
      {users.map(user => (
        <div key={user.id} className="item">
          <div className="content">{user.name}</div>
        </div>
      ))}
    </>
  );
};

export default UserList;
