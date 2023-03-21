import React from 'react';
import Auth from '../utils/auth';

function Logout() {
  const handleLogout = () => {
    Auth.logout();
    window.location.reload();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;