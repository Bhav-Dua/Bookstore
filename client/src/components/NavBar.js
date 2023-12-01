import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';

function NavBar() {
  const user = useSelector(state => state.user.data);
  const history = useHistory();

  return (
    <div className='Navbar'>
      <h1 className='Nav-logo'>
        <Link to='/'>Books</Link>
      </h1>
      {user ? (
        <div className='User-action'>
          <p>Hello {user.username}</p>
          <LogoutButton />
        </div>
      ) : (
        <div className='User-action'>
          <button className='ui button' onClick={() => history.push('/login')}>
            Login
          </button>
          <button
            className='ui button'
            onClick={() => history.push('/signup')}
            style={{ marginLeft: '10px' }}
          >
            Create Account
          </button>
        </div>
      )}
      <div className='nav-links'>
        {user ? (
          <div className='ui buttons' style={{ marginBottom: '3rem' }}>
            <button className='ui button' onClick={() => history.push('/books')}>
              Books
            </button>
            <button className='ui button' onClick={() => history.push('/newBook')}>
              Add Book
            </button>
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
      </div>
    </div>
  );
}

export default NavBar;
