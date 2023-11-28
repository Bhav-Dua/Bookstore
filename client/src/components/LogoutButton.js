import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user/userSlice';

function LogoutButton() {
  const dispatch = useDispatch();

  function handleLogout() {
    fetch('/logout', { method: 'DELETE' }).then((r) => {
      if (r.ok) {
        dispatch(logout());
      }
    });
  }

  return (
    <button className="ui button" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
