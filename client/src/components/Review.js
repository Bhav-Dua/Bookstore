import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../features/books/booksSlice';

function Review({ id, content, rating, username, userId }) {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [editedRating, setEditedRating] = useState(rating);
  const [errors, setErrors] = useState([]);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditedContent(content);
    setEditedRating(rating);
    setErrors([]);
  }

  function handleSave() {
    fetch(`/reviews/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: editedContent,
        rating: editedRating,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(saveUpdatedReview);
      } else {
        r.json().then((r) => setErrors(r.errors));
      }
    });
  }

  function saveUpdatedReview(updatedReview) {
    const updatedBooks = useSelector((state) => state.books.inventory).map(
      (book) => {
        if (book.id === updatedReview.book_id) {
          book.reviews = book.reviews.map((review) => {
            if (review.id === updatedReview.id) {
              return updatedReview;
            }
            return review;
          });
        }
        return book;
      }
    );
    dispatch(setBooks(updatedBooks));
  }

  function handleDelete() {
    fetch(`/reviews/${id}`, {
      method: 'DELETE',
    }).then((r) => {
      if (r.ok) {
        r.json().then(deleteReview);
      } else {
        r.json().then((r) => setErrors(r.errors));
      }
    });
  }

  function deleteReview(deletedReview) {
    const updatedBooks = useSelector((state) => state.books.inventory).map(
      (book) => {
        if (book.id === deletedReview.book_id) {
          book.reviews = book.reviews.filter(
            (review) => review.id !== deletedReview.id
          );
        }
        return book;
      }
    );
    dispatch(setBooks(updatedBooks));
  }

  return (
    <div className="item">
      <div className="content">
        <h3 className="header">{username}</h3>
        {isEditing ? (
          <>
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <div>
              Rating:{' '}
              <input
                type="number"
                value={editedRating}
                onChange={(e) => setEditedRating(e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <h4 className="description">{content}</h4>
            <div className="rating" style={{ marginTop: '10px' }}>
              Rating: {rating}
            </div>
          </>
        )}
      </div>
      {user && user.id == userId ? (
        <div className="ui buttons">
          {isEditing ? (
            <>
              <div className="ui button" onClick={handleCancelEdit}>
                Cancel
              </div>
              <div className="ui button" onClick={handleSave}>
                Save
              </div>
            </>
          ) : (
            <>
              <div className="ui button" onClick={handleEdit}>
                Edit
              </div>
              <div className="ui button" onClick={handleDelete}>
                Delete
              </div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
      {errors.map((error) => (
        <p>{error}</p>
      ))}
    </div>
  );
}

export default Review;
