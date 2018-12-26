import React from 'react';

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <img src={image.urls.small} alt={image.description} className="image" />
    );
  });

  return <div className="image-grid">{images}</div>;
};

export default ImageList;
