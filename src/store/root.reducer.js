/* eslint-disable linebreak-style */
import { combineReducers } from '@reduxjs/toolkit';
import homepage from './homepage.reducer';
import playlist from './playmist.reducer';
import albums from './albums.reducer';

const rootReducer = combineReducers({
  homepage, albums, playlist,
});

export default rootReducer;
