import React, { useEffect } from 'react';


function AudioPlay() {

  const mp3Play = new Audio(process.env.PUBLIC_URL + '/music/music.mp3');
  let isPlay = false;

  function mp3PlayLocal() {
    if (!isPlay) {
      mp3Play.play();
      isPlay = true;
    } else {
      mp3Play.pause();
      isPlay = false;
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        mp3PlayLocal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return isPlay;
}

export default AudioPlay;