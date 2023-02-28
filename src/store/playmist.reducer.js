/* eslint-disable linebreak-style */
import { createAction, createSlice } from '@reduxjs/toolkit';

const actions = {
  resetPlaylist: createAction('RESET_PLAYLIST'),
};

const initialState = {
  playlist: [],
  currentPlay: {
    name: 'Song test',
    picture: 'https://via.placeholder.com/50',
    author: {
      names: { first: 'Ruddy', last: '' },
    },
    yearProduct: '1977',
    length: 15,
  },
};

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.resetPlaylist, () => initialState)
      .addDefaultCase((state) => state);
  },
});

export const { resetPlaylist } = actions;
export default playlistSlice.reducer;
