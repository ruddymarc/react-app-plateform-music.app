/* eslint-disable linebreak-style */
import React from 'react';
import Navbar from './Navbar';

function Search() {
  return (
    <>
      <Navbar>
        <input type="search" placeholder="🔎 Search..." />
      </Navbar>
      <h2>Search</h2>
    </>
  );
}

export default Search;
