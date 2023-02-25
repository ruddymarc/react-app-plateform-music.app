/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { albums, toTimeString } from '../functions';
import Navbar from './Navbar';
import AlbumDetail from './AlbumDetail';
import Album from './Album';

function Home() {
  const title = (name, year, time = null) => `${name} (${year}) ${time || ''}`;
  // first screen - homepage
  const [depths, setDepths] = useState([
    {
      actions: undefined,
      content: (
        <>
          <h2>Welcome</h2>
          <section>
            <h3>Prefered albums</h3>
            <span>Loading ...</span>
          </section>
        </>
      ),
    },
  ]);
  const { length } = depths;
  const { actions, content } = depths.at(length - 1);

  useEffect(() => {
    // Prevent rewiting depths
    if (depths.length !== 1) {
      return;
    }
    // prepare screen - album-detail
    const onSelectAlbumDetail = (music) => {
      setDepths([...depths, {
        actions: (
          <Button
            onClick={() => {
              setDepths([...depths.slice(0, length)]);
            }}
          >
            Back to album
          </Button>
        ),
        content: (
          <AlbumDetail music={music} />
        ),
      }]);
    };
    // prepare screen - album
    const onSelectAlbum = (album) => {
      setDepths([...depths, {
        actions: (
          <Button
            onClick={() => {
              setDepths([...depths.slice(0, length)]);
            }}
          >
            Back to home
          </Button>
        ),
        content: (
          <Album album={album} onShowDetail={onSelectAlbumDetail} />
        ),
      }]);
    };
    // list prefered albums
    const preferedAlbums = albums.map((album) => (
      <Card key={album.id} onClick={() => { onSelectAlbum(album); }}>
        <img src={album.picture} alt="album-img" />
        <div className="_caption">
          { title(album.name, album.yearProduct, toTimeString(album.recordingTime)) }
        </div>
        <span>{ Object.values(album.author.names).join(' ') }</span>
      </Card>
    ));
    // update first screen
    setDepths([...depths, {
      actions: depths.actions,
      content: (
        <>
          <h2>Welcome</h2>
          <section>
            <h3>Prefered albums</h3>
            { preferedAlbums }
          </section>
        </>
      ),
    }]);
  }, [depths, length]);

  console.log(depths, length);
  return (
    <>
      <Navbar>{ actions }</Navbar>
      { content }
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
