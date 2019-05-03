import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { storage } from '../../firebase';

const StorageImage = ({ path, loader = <span />, alt }) => {
  const [isLoading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(true);
  const storageRef = storage.ref();
  const imageRef = storageRef.child(path);

  const waitForImage = (url) => {
    setImageUrl(url);
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        setLoading(false);
        resolve(url);
      };
      image.onerror = reject;
    });
  };

  imageRef.getDownloadURL().then(waitForImage).catch((error) => {
    // If anything goes wrong while getting the download URL, log the error
    console.error(error);
  });

  return isLoading ? loader : (
    <img src={imageUrl} alt={alt} />
  );
};
StorageImage.propTypes = {
  path: PropTypes.string.isRequired,
  loader: PropTypes.element,
  alt: PropTypes.string.isRequired,
};

export default StorageImage;
