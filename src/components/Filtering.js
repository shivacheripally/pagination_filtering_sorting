import React, { useState } from 'react';

export default function Filtering({setUsers,setPerPage,handleReset}) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <button onClick={handleReset}>Reset</button>
    </>
  );
}