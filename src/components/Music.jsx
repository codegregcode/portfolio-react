import React, { useEffect, useState } from 'react';
import { getMusic } from '../firebase';

import '../styles/music.css';

const Music = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const musicData = await getMusic();
      setMusic(musicData);
    };

    fetchMusic();
  }, []);

  return (
    <div className="music-container">
      <h3>Music</h3>
      <p>I play the saxophone, piano and I also do some music production</p>
      <p>
        On this page you&apos;ll be able to find out (& listen) to some of the
        projects I&apos;m working, or have worked on.
      </p>
      {music.map((note) => (
        <div key={note.title} className="music-card">
          <h4>{note.title}</h4>
          <img src={note.image_link} alt={note.title} />
          <p>{note.description}</p>
          <p>
            Click <a href={note.bandcamp_link}>here</a> to visit bandcamp
          </p>
        </div>
      ))}
    </div>
  );
};

export default Music;
