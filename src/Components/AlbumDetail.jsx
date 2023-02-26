/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

function AlbumDetail({ music }) {
  const {
    picture, name, author, yearProduct, length, lirycs,
  } = music;

  const userName = (user) => Object.values(user.names).join(' ');
  const formatTime = (seconds) => {
    const parser = parseInt(seconds, 10); // ensure args is integer
    const min = Math.floor(((parser / 60) * 100) / 100);
    const sec = parser % 60;
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  return (
    <>
      <header className="_heading">
        <img src={picture} alt="album-img" />
        <div className="_heading-desc">
          <span className="_type">title</span>
          <div className="_name">{ name }</div>
          <div className="_info">
            <img src={author.picture} alt="author-img" />
            { [userName(author), yearProduct, formatTime(length)].join(' - ') }
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
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart" viewBox="0 0 16 16">
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg>
          </Button>
          <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </Button>
        </div>

        <section className="lirycs">
          <h2>Lirycs</h2>
          { lirycs }
        </section>
      </article>
    </>
  );
}

AlbumDetail.propTypes = {
  music: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    author: PropTypes.shape({
      picture: PropTypes.string.isRequired,
      names: PropTypes.exact({
        first: PropTypes.string,
        last: PropTypes.string,
      }).isRequired,
    }).isRequired,
    yearProduct: PropTypes.string.isRequired,
    length: PropTypes.number.isRequired,
    lirycs: PropTypes.string,
  }).isRequired,
};

const Button = styled.button`
  gap: .5em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;
  &> svg {
    height: 1.5em;
    width: auto;
  }
`;

const ButtonPlay = styled(Button)`
  &> svg {
    height: 3em;
    color: green;
  }
`;

export default AlbumDetail;
