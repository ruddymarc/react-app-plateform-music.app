/* eslint-disable linebreak-style */
export const toTimeString = (seconds) => {
  const parser = parseInt(seconds, 10); // ensure args is integer
  const min = Math.floor(((parser / 60) * 100) / 100);
  const sec = parser % 60;
  return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
};

export const albums = [
  {
    id: Math.random(),
    type: ['Single', 'Album', 'Compilation'].at(Math.floor(Math.random() * 3)),
    name: 'Album name',
    picture: 'https://via.placeholder.com/200',
    author: {
      picture: 'https://via.placeholder.com/200',
      name: 'Author',
    },
    yearProduct: '2000',
    recordingTime: 300,
    titles: [
      { id: 1, name: 'music title', length: 200 },
      { id: 2, name: 'music title', length: 100 },
    ],
  },
  {
    id: Math.random(),
    type: ['Single', 'Album', 'Compilation'].at(Math.floor(Math.random() * 3)),
    name: 'Album name',
    picture: 'https://via.placeholder.com/200',
    author: {
      picture: 'https://via.placeholder.com/200',
      name: 'Author',
    },
    yearProduct: '2000',
    recordingTime: 400,
    titles: [
      { id: 1, name: 'music title', length: 200 },
      { id: 2, name: 'music title', length: 100 },
      { id: 3, name: 'music title', length: 100 },
    ],
  },
  {
    id: Math.random(),
    type: ['Single', 'Album', 'Compilation'].at(Math.floor(Math.random() * 3)),
    name: 'Album name',
    picture: 'https://via.placeholder.com/200',
    author: {
      picture: 'https://via.placeholder.com/200',
      name: 'Author',
    },
    yearProduct: '2000',
    recordingTime: 100,
    titles: [
      { id: 1, name: 'music title', length: 100 },
    ],
  },
];

export default toTimeString;
