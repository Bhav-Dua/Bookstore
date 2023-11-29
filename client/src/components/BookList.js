import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function BookList() {
  const user = useSelector((state) => state.user.data);
  const books = useSelector((state) => state.books.data);
  const history = useHistory();

  return (
    <div className="BookList">
      {user ? (
        <div className="ui buttons" style={{ marginBottom: '3rem' }}>
          <button
            className="ui button"
            onClick={() => history.push('/myBooks')}
          >
            My Books
          </button>
          <button
            className="ui button"
            onClick={() => history.push('/myReviews')}
          >
            My Reviews
          </button>
        </div>
      ) : (
        <></>
      )}
      <div className="ui cards"></div>
    </div>
  );
}

export default BookList;
