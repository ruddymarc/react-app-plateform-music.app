/* eslint-disable linebreak-style */
import { createAction, createSlice } from '@reduxjs/toolkit';
import React from 'react';

const actions = {
  addDepth: createAction('ADD_DEPTH'),
  backTo: createAction('BACK_TO'),
};

const initialState = [
  {
    actions: undefined,
    content: (
      <>
        <h2>Welcome</h2>
        <span>Loading ...</span>
      </>
    ),
  },
];

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.addDepth, (state, action) => [
        ...state, action.payload,
      ])
      .addCase(actions.backTo, (state) => [
        ...state.slice(0, -1),
      ])
      .addDefaultCase((state) => state);
  },
});

export const { addDepth, backTo } = actions;
export default homepageSlice.reducer;
