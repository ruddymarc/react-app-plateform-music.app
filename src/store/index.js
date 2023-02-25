/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import reducer from './homepage.reducer';

const store = configureStore({
  reducer,
});

export default store;
