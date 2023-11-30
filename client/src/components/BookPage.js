import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review';
import { setBooks } from '../features/books/booksSlice';
import { login } from '../features/user/userSlice';

function BookPage() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const inventory = useSelector(state => state.books.inventory);
  const book = useSelector(state => state.books.inventory).find(
    book => book.id === parseInt(id, 10)
  );
  const [isAdding, setisAdding] = useState(false);
  const [isOwned, setisOwned] = useState(false);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [errors, setErrors] = useState([]);
  const [orderErrors, setOrderErrors] = useState([]);

  useEffect(() => {
    if (book && user && user.books.some(userBook => userBook.id === book.id)) {
      console.log('owned');
      setisOwned(true);
    } else {
      setisOwned(false);
    }
  }, [user, book]);

  if (!book) return <p>No Book to be found</p>;

  const reviews = book.reviews.map(review => (
    <Review
      id={review.id}
      content={review.content}
      rating={review.rating}
      username={review.username}
      userId={review.user_id}
      bookId={review.book_id}
    />
  ));

  function handleOrder() {
    fetch('/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        book_id: book.id,
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(createOrder);
        setOrderErrors([]);
      } else {
        r.json().then(r => setOrderErrors(r.errors));
      }
    });
  }

  function createOrder(newOrder) {
    const updatedOrders = [...user.orders, newOrder];
    const updatedBooks = [...user.books, book];
    const updatedUser = { ...user, orders: updatedOrders, books: updatedBooks };
    dispatch(login(updatedUser));
  }

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
        setReviewContent('');
        setReviewRating(0);
      } else {
        r.json().then(r => setErrors(r.errors));
      }
    });
  }

  function addReview(newReview) {
    const updatedBooks = inventory.map(book => {
      if (book.id === newReview.book_id) {
        const updatedReviews = [...book.reviews, newReview];
        return { ...book, reviews: updatedReviews };
      }
      return book;
    });
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
      <div className='ui two column very relaxed stackable grid'>
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
                    min={1}
                    max={5}
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
                <div
                  style={{
                    position: 'fixed',
                    bottom: '1rem',
                    right: '50vh',
                    zIndex: '9999',
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
              </div>
            </>
          )}
        </div>
        <div className='middle aligned column'>
          <div className='meta'>ISBN: {book.isbn}</div>
          <img src={book.img} alt={book.title} />
          <h1>{book.title}</h1>
          <h3>By: {book.author}</h3>
          <h3>Published in {book.published_year}</h3>
          <h4>Genre: {book.genre}</h4>
          <p className='description'>{book.description}</p>
          <div style={{
                    position: 'fixed',
                    bottom: '1rem',
                    right: '44vh',
                    zIndex: '9999',
                  }}>
            {isOwned ? (
              <button className='ui disabled button'>Already Owned</button>
            ) : user ? (
              <button className='ui button' onClick={handleOrder}>
                Order Book
              </button>
            ) : (
              <div
                className='ui animated fade button'
                tabIndex='0'
                onClick={() => history.push('/login')}
              >
                <div className='visible content'>Order Book</div>
                <div className='hidden content'>Sign in</div>
              </div>
            )}
          </div>
          {orderErrors.map(error => (
            <p>{error}</p>
          ))}
        </div>
      </div>
      <div className='ui vertical divider'></div>
    </div>
  );
}

export default BookPage;
