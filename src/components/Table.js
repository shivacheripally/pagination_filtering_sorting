import React from 'react';

export default function Table(props){
  const users = props.users;
  return(
    <>
    <br />
      <table border='1px'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=><tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  );
} 