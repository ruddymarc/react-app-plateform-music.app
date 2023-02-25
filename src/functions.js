/* eslint-disable linebreak-style */
export const toTimeString = (seconds) => {
  const parser = parseInt(seconds, 10); // ensure args is integer
  const min = Math.floor(((parser / 60) * 100) / 100);
  const sec = parser % 60;
  return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
};

const picture = 'https://via.placeholder.com/200';
const lirycs = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum sapiente hic voluptates reprehenderit fuga architecto, dolorem soluta doloribus odit unde, laboriosam vero. Quae atque recusandae voluptatibus quibusdam molestias, nostrum ipsa?';
const albumTypes = ['Single', 'Album', 'Compilation', 'Ep'];
const albumType = albumTypes.at(Math.random() * albumTypes.length);
const yearProduct = Math.floor(Math.random() * (2000 - 1980) + 1980).toFixed();
const authors = [
  {
    id: Math.random(),
    names: { first: 'Jhon', last: 'Doe' },
    speudo: 'Doe\'s',
    picture,
  },
  {
    id: Math.random(),
    names: { first: 'Jane', last: 'Doe' },
    picture,
  },
];
const author = authors.at(Math.floor((Math.random() * Number.MAX_SAFE_INTEGER) % 2));

export const albums = [
  {
    id: Math.random(),
    type: albumType,
    name: 'Album one',
    picture,
    author,
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
    author,
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
    author,
    yearProduct,
    recordingTime: 100,
    titles: [
      {
        id: 1, name: 'music title', length: 100, lirycs,
      },
    ],
  },
];

export default toTimeString;
