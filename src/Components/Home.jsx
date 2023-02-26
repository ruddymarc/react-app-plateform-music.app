/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { addDepth } from '../store/homepage.reducer';
import { albums } from '../functions';
import Navbar from './Navbar';
import Albums from './Albums';

function Home() {
  const dispatch = useDispatch();
  // first screen - homepage
  const homepage = useSelector((state) => state.homepage);
  const { length } = homepage;
  const { actions, content } = homepage.at(length - 1);

  useEffect(() => {
    // Prevent rewiting depths
    if (homepage.length !== 1) {
      return;
    }

    dispatch(addDepth({
      actions: homepage.actions,
      content: (
        <>
          <h2>Welcome</h2>
          <Albums albums={albums} />
          <Albums title="Prefered albums" albums={albums} />
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

export default Home;
