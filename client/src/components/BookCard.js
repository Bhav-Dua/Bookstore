import React, { useState } from 'react';
import fallbackBookImg from './fallbackBookImg.jpg';

function BookCard({ id, title, author, img }) {
  const [imageSrc, setImageSrc] = useState(img);

  function handleImageError() {
    if (imageSrc !== fallbackBookImg) {
      setImageSrc(fallbackBookImg);
    }
  }

  return (
    <div key={id} className='ui card'>
      <div className='image'>
        <a href={`/books/${id}`}>
          <img
            src={imageSrc}
            onError={handleImageError}
            alt={title}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </a>
      </div>
      <div className='content'>
        <a className='header' href={`/books/${id}`}>
          {title}
        </a>
        <div className='meta'>{author}</div>
      </div>
    </div>
  );
}

export default BookCard;
