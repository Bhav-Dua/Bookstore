import React from 'react';

function BookCard({ id, title, author, img }) {
  return (
    <div key={id} className='ui card'>
      <div className='image'>
        <a className='image' href={`/books/${id}`}>
          <img src={img} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
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
