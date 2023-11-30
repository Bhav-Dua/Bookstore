import React from 'react';

function BookCard({ id, title, author, img }) {
  return (
    <div key={id} className='ui card'>
      <div className='image'>
        <img src={img} alt={title} />
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
