import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import BookCard from './BookCard';

function BookList() {
  const user = useSelector(state => state.user.data);
  const books = useSelector(state => state.books.inventory);
  const history = useHistory();
  let bookCards;

  if (books && books.length > 0) {
    bookCards = books.map(book => (
      <BookCard id={book.id} title={book.title} author={book.author} img={book.img} />
    ));
  } else {
    bookCards = <p style={{ marginLeft: '48%', marginTop: '10rem' }}>No books available</p>;
  }

  return (
    <div className='BookList'>
      {user ? (
        <div className='ui buttons' style={{ marginBottom: '3rem' }}>
          <button className='ui button' onClick={() => history.push('/myBooks')}>
            My Books
          </button>
          <button className='ui button' onClick={() => history.push('/myReviews')}>
            My Reviews
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className='ui cards'>{bookCards}</div>
    </div>
  );
}

export default BookList;
