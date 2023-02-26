/* eslint-disable linebreak-style */
import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { formatTime, formatTitle, userName } from '../functions';
import { addDepth, backTo } from '../store/homepage.reducer';
import Album from './Album';

function Albums({ title, albums }) {
  const dispatch = useDispatch();

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

  const cards = albums.map((album) => (
    <Card key={album.id} onClick={() => { onSelectAlbum(album); }}>
      <img src={album.picture} alt="album-img" />
      <div className="_caption">
        { formatTitle(album.name, album.yearProduct, formatTime(album.recordingTime)) }
      </div>
      <span>{ userName(album.author) }</span>
    </Card>
  ));

  return (
    <section>
      <h3>{ title }</h3>
      { cards || <span>Loading ...</span> }
    </section>
  );
}

Albums.defaultProps = {
  title: 'Albums',
  albums: [],
};

const albumTypes = ['Single', 'Album', 'Compilation', 'Ep'];
Albums.propTypes = {
  title: PropTypes.string,
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(albumTypes),
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      author: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        names: PropTypes.exact({
          first: PropTypes.string,
          last: PropTypes.string,
        }).isRequired,
      }).isRequired,
      yearProduct: PropTypes.string.isRequired,
      recordingTime: PropTypes.number.isRequired,
      titles: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.number,
          name: PropTypes.string,
          length: PropTypes.number,
          lirycs: PropTypes.string,
        }),
      ),
    }),
  ),
};

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

export default Albums;
