/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import styled from 'styled-components';
import Home from './Components/Home';
import Search from './Components/Search';
import Player from './Components/Player';
import Playlist from './Components/Playlist';

function App() {
  const PAGES = ['HOME_PAGE', 'SEARCH_PAGE', 'PLAYLIST_PAGE'];
  const [activePage, setActivePage] = useState(PAGES.at(0));
  const mainContent = (activePage === PAGES.at(0) && <Home />)
    || (activePage === PAGES.at(1) && <Search />)
    || (activePage === PAGES.at(2) && <Playlist />);

  return (
    <Wrapper>
      <Header>
        <section>
          <Button onClick={() => { setActivePage(PAGES.at(0)); }}>
            <Title>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-disc" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z" />
              </svg>
              Spotifuz
            </Title>
          </Button>
          <Nav>
            <Button onClick={() => { setActivePage(PAGES.at(0)); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
              </svg>
              Home
            </Button>
            <Button onClick={() => { setActivePage(PAGES.at(1)); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              Search
            </Button>
            <Button onClick={() => { setActivePage(PAGES.at(2)); }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
                <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
                <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
                <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
                <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
              </svg>
              Playlist
            </Button>
          </Nav>
        </section>
        <Player />
      </Header>

      <Main>
        { mainContent }
        <Footer>
          This app is made with 💕 by Ruddy
        </Footer>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  gap: .5em;
  display: flex;
  width: 100vw;
`;

const Header = styled.header`
  height: 100vh;
  width: 16em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Main = styled.main`
  gap: .5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  ._info,
  ._actions,
  ._heading {
    display: flex;
    gap: .8em;
    box-sizing: border-box;
    align-items: end;
  }
  ._name {
    text-transform: uppercase;
    font-size: xx-large;
  }
  ._info img {
    height: 1.5em;
    width: auto;
    border-radius: 50%;
  }
`;

const Nav = styled.nav`
  gap: .5em;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  margin: 2em;
  text-align: center;
  font-weith
`;

const Title = styled.h1`
  display: inline-flex;
  align-items: center;
  gap: .3em;
  &> svg {
    height: 1.5em;
    width: auto;
  }
`;

const Button = styled.button`
  gap: .5em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;
`;

export default App;
