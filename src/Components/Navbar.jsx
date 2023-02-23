/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Navbar({ children }) {
  return (
    <NavbarStyled>
      { children }
      <span />
      <button type="button">teset</button>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.3em;
  padding: .5em .8em;
  background: grey;
  button {
    font-size: 1em;
    border-radius: .3em;
  }
  input[type="search"] {
    font-size: 1em;
    border-radius: 1em;
    width: 100%;
    max-width: 20em;
    padding: .2em .5em;
    border: 1px solid grey;
    box-sizing: border-box;
  }
`;

Navbar.defaultProps = {
  children: null,
};

export default Navbar;
