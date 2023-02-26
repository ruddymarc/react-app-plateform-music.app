/* eslint-disable linebreak-style */
const formatFunctions = {
  formatTime: (seconds) => {
    const parser = parseInt(seconds, 10); // ensure args is integer
    const min = Math.floor(((parser / 60) * 100) / 100);
    const sec = parser % 60;
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  },
  formatTitle: (name, year, time = null) => `${name} (${year}) ${time || ''}`,
  userName: (user) => Object.values(user.names).join(' '),
};

export const { formatTime, formatTitle, userName } = formatFunctions;
