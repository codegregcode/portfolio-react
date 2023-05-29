import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { getMusic } from '../firebase';

import '../styles/music.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Music = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      const musicData = await getMusic();
      setMusic(musicData);
    };

    fetchMusic();
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10%',
        },
      },
    ],
    focusOnSelect: true,
  };

  return (
    <div className="music-container">
      <h3>Music</h3>
      <p>I play the saxophone, piano and I also do some music production</p>
      <p>
        On this page you&apos;ll be able to find out (& listen) to some of the
        projects I&apos;m working, or have worked on.
      </p>
      <Slider {...settings}>
        {music.map((note) => (
          <div key={note.title} className="music-card">
            <h4>{note.title}</h4>
            <div className="content">
              <img src={note.image_link} alt={note.title} />
              <div>
                <p>{note.description}</p>
                <p>
                  Click <a href={note.bandcamp_link}>here</a> to visit bandcamp
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Music;
