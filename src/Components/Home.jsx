/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { albums, toTimeString } from '../functions';
import Navbar from './Navbar';
import Album from './Album';

function Home() {
  const [showAlbum, setShowAlbum] = React.useState(false);
  const [activeAlbum, setActiveAlbum] = React.useState(null);
  const onSelectAlbum = (album) => {
    setActiveAlbum(album);
    setShowAlbum(true);
  };

  const title = (name, year, time = null) => `${name} (${year}) ${time || ''}`;
  const preferedAlbums = albums.map((album) => (
    <Card key={album.id} onClick={() => { onSelectAlbum(album); }}>
      <img src={album.picture} alt="album-img" />
      <div className="_caption">
        { title(album.name, album.yearProduct, toTimeString(album.recordingTime)) }
      </div>
      <span>{ album.author.name }</span>
    </Card>
  ));

  return (
    <>
      <Navbar>
        { showAlbum && <Button onClick={() => setShowAlbum(false)}>Back to home</Button> }
      </Navbar>
      { showAlbum ? <Album album={activeAlbum} /> : (
        <>
          <h2>Welcome</h2>
          <section>
            <h3>Prefered albums</h3>
            { preferedAlbums }
          </section>
        </>
      ) }
    </>
  );
}

const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 1em;
  font-size: 1em;
  // Animate
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const Card = styled(Button)`
  position: relative;
  width: 14em;
  // Childs
  &> img {
    width: 100%;
    height: auto;
  }
  &> ._caption {
    // overlay
    position: absolute;
    bottom: 3em;
    width: 88%;
    margin: 0 .5em;
    background-color: #222;
    color: #fff;
    font: italic smaller sans-serif;
    padding: 3px;
    text-align: center;
  }
`;

export default Home;
