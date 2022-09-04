import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './utils/firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Login from './pages/login/login';
import Game from './pages/Game';
import Homepage from './pages/HomePage';
import Register from './pages/login/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/players/:id" element={<Profile />} />
        <Route path="/players/edit/:id" element={<ProfileEdit />} />
        <Route path="/game/rps" element={<Game />} />
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
