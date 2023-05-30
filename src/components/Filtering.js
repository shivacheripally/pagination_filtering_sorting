import React, { useState, useEffect } from 'react';
import Table from './Table';
import Pages from './Pages';

export default function Filtering({ showPagiNation, controlPagiNation }) {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState('');
  const [perPage, setPerPage] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    controlPagiNation(false);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter((user) => {
          // Check if the name starts with the entered value (case-insensitive)
          return user.name.toLowerCase().startsWith(value.toLowerCase());
        });

        setUsers(filteredData);
        setPerPage(filteredData.slice(0,4));
      });
    setValue('');
  };

  const pageHandler = (pageNumber) => {
    setPerPage(users.slice(pageNumber * 3 - 3, pageNumber * 3));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <button onClick={() => controlPagiNation(true)}>Reset</button>
      <br />
      {users.length > 0 ? (
        !showPagiNation && (
          <>
            <Table users={perPage} />
            <br />
            <Pages users={users} pageHandler={pageHandler} />
          </>
        )
      ) : (
        <p>No matching users found.</p>
      )}
    </>
  );
}
