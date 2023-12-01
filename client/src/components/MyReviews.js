import React from 'react';
import { useSelector } from 'react-redux';

function MyReviews() {
  const user = useSelector(state => state.user.data);
  let reviews;

  if (user && user.reviews && user.reviews.length > 0) {
    reviews = user.reviews.map(review => (
      <div className='item'>
        <h3>{review.book_title}</h3>
        {review.content}
        <div className='rating' style={{ marginTop: '10px' }}>
          Rating: {review.rating}
        </div>
      </div>
    ));
  }
  else reviews = <p>You have not posted any reviews</p>

  return (
    <div className='my-reviews' style={{ marginTop: '10rem' }}>
      <h1>My Reviews</h1>
      {reviews}
    </div>
  );
}

export default MyReviews;
