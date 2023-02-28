/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatTime, formatTitle, userName } from '../functions';

function Player() {
  const {
    picture, name, author, yearProduct, length,
  } = useSelector((state) => state.playlist.currentPlay);
  const [playedSong, setPlayedSong] = useState(false);
  const [stick, setStick] = useState(0.0);
  const percent = (100 * stick) / length;
  const tooglePlay = () => { setPlayedSong(!playedSong); };
  const incrementCursor = () => { setStick(Math.min(stick + 10, length)); };
  const decrementCursor = () => { setStick(Math.max(stick - 10, 0)); };

  useEffect(() => {
    const timer = setInterval(() => {
      if (playedSong) {
        setStick(stick + 0.5);
      }
    }, (500));

    if (stick > length) {
      setStick(0);
      setPlayedSong(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [length, playedSong, stick]);

  return (
    <Wrapper>
      <img src={picture} alt="music-img" />
      <MusicInfo>
        { formatTitle(name, yearProduct) }
        <span>{ userName(author) }</span>
      </MusicInfo>
      <MusicStatus>
        <span>{ formatTime(0) }</span>
        <Bars>
          { formatTime(stick) }
          <Bar
            value={percent}
            content={formatTime(stick)}
          />
        </Bars>
        <span>{ formatTime(length) }</span>
      </MusicStatus>
      <PlayerActions>
        <Button onClick={decrementCursor}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rewind" viewBox="0 0 16 16">
            <path d="M9.196 8 15 4.633v6.734L9.196 8Zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L8.404 7.304Z" />
            <path d="M1.196 8 7 4.633v6.734L1.196 8Zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L.404 7.304Z" />
          </svg>
        </Button>
        <ButtonPlay onClick={tooglePlay}>
          { playedSong ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pause-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          ) }
        </ButtonPlay>
        <Button onClick={incrementCursor}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fast-forward" viewBox="0 0 16 16">
            <path d="M6.804 8 1 4.633v6.734L6.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
            <path d="M14.804 8 9 4.633v6.734L14.804 8Zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z" />
          </svg>
        </Button>
      </PlayerActions>
    </Wrapper>
  );
}

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

const Wrapper = styled.div`
  position: relative;
  gap: .5em;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 2em;
`;

const PlayerActions = styled.div`
  gap: .5em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const MusicInfo = styled.div`
  // overlay
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 6.5em;
  left: .5em;
  width: 95%;
  background-color: #222;
  color: #fff;
  font: italic smaller sans-serif;
`;

const MusicStatus = styled.div`
  gap: .5em;
  display: flex;
  justify-content: space-between;
`;

const Bars = styled.div`
  overflow: hidden;
  text-align: center;
  border: thin solid blue;
  background-color: blue;
  border-radius: 1em;
  color: snow;
  flex: 1;
`;

const Bar = styled.div`
  top: 0;
  heigth: 100%;
  width: ${(props) => props.value}%;
  content: ${(props) => (props.value > 50 ? props.content : '')}
  background: snow;
`;

export default Player;
