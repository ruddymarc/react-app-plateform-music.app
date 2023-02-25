/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { addDepth, backTo } from '../store/homepage.reducer';
import { albums, toTimeString } from '../functions';
import Navbar from './Navbar';
import Album from './Album';

function Home() {
  const dispatch = useDispatch();
  // first screen - homepage
  const homepage = useSelector((state) => state.homepage);
  const { length } = homepage;
  const { actions, content } = homepage.at(length - 1);

  useEffect(() => {
    const title = (name, year, time = null) => `${name} (${year}) ${time || ''}`;
    // Prevent rewiting depths
    if (homepage.length !== 1) {
      return;
    }
    // prepare screen - album
    const onSelectAlbum = (album) => {
      dispatch(addDepth({
        actions: (
          <Button onClick={() => { dispatch(backTo()); }}>
            Back to home
          </Button>
        ),
        content: (
          <Album album={album} />
        ),
      }));
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
    dispatch(addDepth({
      actions: homepage.actions,
      content: (
        <>
          <h2>Welcome</h2>
          <section>
            <h3>Prefered albums</h3>
            <span>{ preferedAlbums || <span>Loading ...</span> }</span>
          </section>
        </>
      ),
    }));
  }, [dispatch, homepage, length]);
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
