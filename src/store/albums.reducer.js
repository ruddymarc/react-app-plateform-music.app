/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const picture = 'https://via.placeholder.com/200';
const lirycs = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente hic voluptates reprehenderit fuga architecto, dolorem soluta doloribus odit unde, laboriosam vero. Quae atque recusandae voluptatibus quibusdam molestias, nostrum ipsa?';
const albumTypes = ['Single', 'Album', 'Compilation', 'Ep'];
const albumType = albumTypes.at(Math.random() * albumTypes.length - 1);
const yearProduct = Math.floor(Math.random() * (2000 - 1980) + 1980).toFixed();

const USER = {
  id: Math.random(),
  names: { first: 'Jane', last: 'Doe' },
  picture,
};
const USER2 = {
  ...USER,
  id: Math.random(),
  names: { ...USER.names, first: 'Jhon' },
  speudo: 'Doe\'s',
};

const initialState = [
  {
    id: Math.random(),
    type: albumType,
    name: 'Album one',
    picture,
    author: USER,
    yearProduct,
    recordingTime: 300,
    titles: [
      {
        id: 1, name: 'music title', length: 200, lirycs,
      },
      {
        id: 2, name: 'music title', length: 100, lirycs,
      },
    ],
  },
  {
    id: Math.random(),
    type: albumType,
    name: 'Album three',
    picture,
    author: USER,
    yearProduct,
    recordingTime: 400,
    titles: [
      {
        id: 1, name: 'music title', length: 200, lirycs,
      },
      {
        id: 2, name: 'music title', length: 100, lirycs,
      },
      {
        id: 3, name: 'music title', length: 100, lirycs,
      },
    ],
  },
  {
    id: Math.random(),
    type: albumType,
    name: 'Album two',
    picture,
    author: USER2,
    yearProduct,
    recordingTime: 100,
    titles: [
      {
        id: 1, name: 'music title', length: 100, lirycs,
      },
    ],
  },
];

export const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addDefaultCase((state) => state);
  },
});

export default albumsSlice.reducer;
