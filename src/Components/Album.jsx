/* eslint-disable linebreak-style */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { formatTime, userName } from '../functions';
import { addDepth, backTo } from '../store/homepage.reducer';
import AlbumDetail from './AlbumDetail';

function Album({ album }) {
  const dispatch = useDispatch();

  const {
    type, picture, name, author, yearProduct, recordingTime, titles,
  } = album;

  const onSelectTitle = (title) => {
    dispatch(addDepth({
      actions: (
        <Button onClick={() => { dispatch(backTo()); }}>
          Back to album
        </Button>
      ),
      content: (
        <AlbumDetail music={{
          ...title, picture, author, yearProduct,
        }}
        />
      ),
    }));
  };
  const albumTitles = titles.map((title) => (
    <li key={`title-${title.id}`}>
      <ButtonStyled onClick={() => { onSelectTitle(title); }}>
        <span>{ title.id }</span>
        <div>{ title.name }</div>
        <span>{ formatTime(title.length) }</span>
      </ButtonStyled>
    </li>
  ));

  return (
    <>
      <header className="_heading">
        <img src={picture} alt="album-img" />
        <div className="_heading-desc">
          <span className="_type">{ type }</span>
          <div className="_name">{ name }</div>
          <div className="_info">
            <img src={author.picture} alt="author-img" />
            { [userName(author), yearProduct, titles.length, formatTime(recordingTime)].join(' - ') }
          </div>
        </div>
      </header>

      <article>
        <div className="_actions">
          <ButtonPlay>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
            </svg>
          </ButtonPlay>
          <ButtonIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg>
          </ButtonIcon>
          <ButtonIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </ButtonIcon>
        </div>

        <AlbumTitles>
          <li>
            <span>#</span>
            <div>title</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stopwatch" viewBox="0 0 16 16">
              <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
              <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
            </svg>
          </li>
          { albumTitles }
        </AlbumTitles>
      </article>
    </>
  );
}

const albumTypes = ['Single', 'Album', 'Compilation', 'Ep'];
Album.propTypes = {
  album: PropTypes.shape({
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
  }).isRequired,
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 1em;
  font-size: 1em;
`;

const ButtonStyled = styled(Button)`
  display: flex;
  flex: auto;
  gap: .5em;
  border-radius: 0;
  // Animate
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

const ButtonIcon = styled(Button)`
  background: none;
  &> svg {
    height: 1.5em;
    width: auto;
  }
`;

const ButtonPlay = styled(ButtonIcon)`
  &> svg {
    height: 3em;
    color: green;
  }
`;

const AlbumTitles = styled.ul`
  padding: 0;
  li {
    gap: .5em;
    margin: 1em;
    display: flex;
    align-items: strench;
    justify-contents: space-between;
  }
  li:first-of-type {
    font-weight: 700;
    border-bottom: thin solid grey;
  }
  div {
    display: flex;
    flex: auto;
  }
`;

export default Album;
