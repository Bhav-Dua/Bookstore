import React, { useState } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
import { setBooks } from '../features/books/booksSlice';

function BookPage() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const book = useSelector(state => state.books.inventory).find(
    book => book.id === parseInt(id, 10)
  );
  const [isAdding, setisAdding] = useState(false);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [errors, setErrors] = useState([]);

  const reviews = book.reviews.map(review => (
    <Review
      id={review.id}
      content={review.content}
      rating={review.rating}
      username={review.username}
      userId={review.user_id}
    />
  ));

  function handleAddReview() {
    if (!user) {
      history.push('/login');
    } else {
      setisAdding(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: reviewContent,
        rating: reviewRating,
        book_id: id,
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(addReview);
        setisAdding(false);
      } else {
        r.json().then(r => setErrors(r.errors));
      }
    });
  }

  function addReview(newReview) {
    const updatedBooks = useSelector(state => state.books.inventory).map(
      book => {
        if (book.id === newReview.book_id) {
          book.reviews = [...book.reviews, newReview];
        }
        return book;
      }
    );
    dispatch(setBooks(updatedBooks));
  }

  function handleCancelAdd() {
    setisAdding(false);
    setErrors([]);
    setReviewContent('');
    setReviewRating(0);
  }

  return (
    <div className='ui placeholder segment'>
      <div class='ui two column very relaxed stackable grid'>
        <div className='column'>
          {isAdding ? (
            <>
              <form onSubmit={handleSubmit}>
                <div>
                  <textarea
                    value={reviewContent}
                    onChange={e => setReviewContent(e.target.value)}
                    placeholder='Write your review...'
                  />
                  <label htmlFor='rating'>Rating: </label>
                  <input
                    type='number'
                    value={reviewRating}
                    onChange={e => setReviewRating(Number(e.target.value))}
                    style={{ width: '100px' }}
                  />
                </div>
                <div className='ui buttons'>
                  <button className='ui button' onClick={handleCancelAdd}>
                    Cancel
                  </button>
                  <button className='ui button' type='submit'>
                    Submit Review
                  </button>
                </div>
              </form>
              {errors.map(error => (
                <p>{error}</p>
              ))}
            </>
          ) : (
            <>
              <div className='ui vertical menu'>{reviews}</div>
              <div
                style={{
                  position: 'fixed',
                  bottom: '1rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {user ? (
                  <button className='ui button' onClick={handleAddReview}>
                    Add Review
                  </button>
                ) : (
                  <div
                    className='ui animated fade button'
                    tabIndex='0'
                    onClick={() => history.push('/login')}
                  >
                    <div className='visible content'>Add Review</div>
                    <div className='hidden content'>Sign in</div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className='middle aligned column'>
          <div className='meta'>ISBN: {book.isbn}</div>
          <img src={book.img} alt={book.title} />
          <h1>{book.title}</h1>
          <h2>By: {book.author}</h2>
          <h3>Published in {book.published_year}</h3>
          <h4>Genre: {book.genre}</h4>
          <p className='description'>{book.description}</p>
        </div>
      </div>
      <div className='ui vertical divider'></div>
    </div>
  );
}

export default BookPage;
