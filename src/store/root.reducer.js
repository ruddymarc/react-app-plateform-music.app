/* eslint-disable linebreak-style */
import { combineReducers } from '@reduxjs/toolkit';
import homepage from './homepage.reducer';
import albums from './albums.reducer';

const rootReducer = combineReducers({
  homepage, albums,
});

export default rootReducer;
