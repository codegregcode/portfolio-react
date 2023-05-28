import React, { useEffect, useState } from 'react';
import { getPhotos } from '../firebase';

import '../styles/photoreel.css';

const PhotoReel = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photosData = await getPhotos();
      setPhotos(photosData);
    };

    fetchPhotos();
  }, []);

  return (
    <div className="photoreel-container">
      <h3>Photo Reel</h3>
      <p>See what I&apos;ve been up to!</p>
      {photos.map((photo) => (
        <div key={photo.title} className="photo-card">
          <img src={photo.image_link} alt={photo.title} />
        </div>
      ))}
    </div>
  );
};

export default PhotoReel;
