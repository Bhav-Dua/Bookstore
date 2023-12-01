import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user/userSlice';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function LogoutButton() {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleLogout() {
    fetch('/logout', { method: 'DELETE' }).then(r => {
      if (r.ok) {
        dispatch(logout());
        history.push('/');
      }
    });
  }

  return (
    <button className='ui button' onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
