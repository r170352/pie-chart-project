import React, { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === 'joe' && password === '1234') {
      navigate('/chart');
    } else {
      alert('enter correct id and password');
    }
  };
  return (
    <div class="container">
      <h1 class="form-heading">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default Login;
