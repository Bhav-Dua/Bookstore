import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import Review from './Review';

function BookPage() {
    const { id } = useParams();
    const user = useSelector((state) => state.user.data);
    const book = useSelector((state) => state.books.inventory).find((book) => book.id === parseInt(id, 10));

    const reviews = book.reviews.map((review) => (
        <Review
            id={review.id}
            content={review.content}
            rating={review.rating}
            username={review.username}
            userId={review.user_id}
            />
    ))

    function handleAddReview() {

    }

    return (
        <div className='ui placeholder segment'>
        <div class='ui two column very relaxed stackable grid'>
        <div className='column'>
          {isAdding ? (
            <>
              {/* <form onSubmit={handleSubmit}>
                <div>
                <textarea
                  value={reviewContent}
                  onChange={(e) => setReviewContent(e.target.value)}
                  placeholder='Write your review...'
                />
                <label htmlFor='rating'>Rating: </label>
                <input
                  type='number'
                  value={reviewRating}
                  onChange={(e) => setReviewRating(Number(e.target.value))}
                  style={{ width: '100px' }}
                />
                </div>
                <div className='ui buttons'>
                  <button className='ui button' onClick={handleCancelAdd}>Cancel</button>
                <button className='ui button' type='submit'>Submit Review</button>
                </div>
                  
              </form>
              {errors.map((error) => (
          <p>{error}</p>
        ))} */}
              </>
          ) : (
            <>
            <div className='ui vertical menu'>{reviews}</div>
            <div style={{ position: 'fixed', bottom: '1rem', left: '50%', transform: 'translateX(-50%)' }}>
              {user ? (
                <button className='ui button' onClick={handleAddReview}>Add Review</button>
              ) : (
                <div className='ui animated fade button' tabIndex='0' onClick={() => history.push('/login')}>
                <div className='visible content'>Add Review</div>
               <div className='hidden content'>Sign in</div>
               </div>
              )}
              </div>
              </>
          )}
  
          </div>
          <div className='middle aligned column'>
              {/* <img src={} alt={} /> */}
          </div>
          </div>
          <div className='ui vertical divider'></div>
      </div>
    )
}

export default BookPage;