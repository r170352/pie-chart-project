import React from 'react';
import './style.css';
import Main from './Main';
import Navbar from './Navbar.js';
import Login from './Login.js';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="chart" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
