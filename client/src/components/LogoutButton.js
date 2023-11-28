import React from 'react';
import { useDispatch } from 'react-redux';

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
