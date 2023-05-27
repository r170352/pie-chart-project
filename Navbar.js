import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  let navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    console.log('button clicked');
    navigate('/');
  };
  return (
    <div>
      <div class="topnav">
        <a class="active">USERNAME</a>
        <button class="active" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
export default Navbar;
