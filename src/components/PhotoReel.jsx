import React, { useEffect, useState } from 'react';
import ReactImageGallery from 'react-image-gallery';

import { getPhotos } from '../firebase';

import '../styles/photoreel.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const PhotoReel = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photosData = await getPhotos();
      setPhotos(photosData);
    };

    fetchPhotos();
  }, []);

  const images = photos.map((photo) => ({
    original: photo.image_link,
    originalAlt: photo.title,
  }));

  return (
    <div className="photoreel-container">
      <div className="react-image-gallery-container">
        <h3>Photo Reel</h3>
        <ReactImageGallery items={images} />
      </div>
    </div>
  );
};

export default PhotoReel;
