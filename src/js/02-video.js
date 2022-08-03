import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player('vimeo-player');
const KEY = 'videoplayer-current-time';

function getCurrentTime() {
  return localStorage.getItem(KEY);
}

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(KEY, seconds);
    console.log(seconds);
  }, 1000)
);

player
  .setCurrentTime(getCurrentTime())
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    console.log(error);
  });
