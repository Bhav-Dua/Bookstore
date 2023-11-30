import React from 'react';
import { useSelector } from 'react-redux';

function MyReviews() {
  const user = useSelector(state => state.user.data);
  let reviews;

  if (user && user.reviews && user.reviews.length > 0) {
    reviews = user.reviews.map(review => (
      <div className='item'>
        <div className='header'>{review.book_title}</div>
        {review.content}
        <div className='rating' style={{ marginTop: '10px' }}>
          Rating: {review.rating}
        </div>
      </div>
    ));
  }
  else reviews = <p>You have not posted any reviews</p>

  return (
    <div className='ui very relaxed list' style={{ marginTop: '10rem' }}>
      {reviews}
    </div>
  );
}

export default MyReviews;
