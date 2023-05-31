import React, { useState, useEffect } from 'react';
import Pages from './Pages';
import Table from './Table';
import Filtering from './Filtering';

export default function PagiNation() {
  const [users, setUsers] = useState([]);
  const [perPage, setPerPage] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setPerPage(data.slice(0, 4));
      });
  }, []);

  useEffect(() => {
    // Apply sorting when sortBy state changes
    if (sortBy === 'name') {
      const sortedData = [...users].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPerPage(sortedData.slice(0, 4));
    } else if (sortBy === 'phone') {
      const sortedData = [...users].sort((a, b) =>
        a.phone.localeCompare(b.phone)
      );
      setPerPage(sortedData.slice(0, 4));
    } else if (sortBy === 'email') {
      const sortedData = [...users].sort((a, b) =>
        a.email.localeCompare(b.email)
      );
      setPerPage(sortedData.slice(0, 4));
    } else if (sortBy === 'address') {
      const sortedData = [...users].sort((a, b) =>
        a.address.city.localeCompare(b.address)
      );
      setPerPage(sortedData.slice(0, 4));
    }
  }, [sortBy, users]);

  const pageHandler = (pageNumber) => {
    setPerPage(users.slice(pageNumber * 3 - 3, pageNumber * 3));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleReset = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setPerPage(data.slice(0, 4));
      });
  };
  

  return (
    <>
      <Filtering
        setUsers={setUsers}
        setPerPage={setPerPage}
        handleReset={handleReset}
      />
      <br />
      <Table users={perPage} />
      <br />
      <Pages users={users} pageHandler={pageHandler} />
      <br />
      <select
        name="sortby"
        id="sortby"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="">Select an option</option>
        <option value="name">Name</option>
        <option value="phone">Phone</option>
        <option value="email">Email</option>
        <option value="address">Address</option>
      </select>
    </>
  );
}
