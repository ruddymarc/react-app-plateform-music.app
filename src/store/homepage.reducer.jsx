/* eslint-disable linebreak-style */
import { createAction, createSlice } from '@reduxjs/toolkit';
import React from 'react';

const actions = {
  addDepth: createAction('ADD_DEPTH'),
  backTo: createAction('BACK_TO'),
};

const initialState = {
  homepage: [
    {
      actions: undefined,
      content: (
        <>
          <h2>Welcome</h2>
          <span>Loading ...</span>
        </>
      ),
    },
  ],
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.addDepth, (state, action) => ({
        ...state,
        homepage: [...state.homepage, action.payload],
      }))
      .addCase(actions.backTo, (state) => ({
        ...state,
        homepage: [...state.homepage.slice(0, -1)],
      }))
      .addDefaultCase((state) => state);
  },
});

export const { addDepth, backTo } = actions;
export default homepageSlice.reducer;
