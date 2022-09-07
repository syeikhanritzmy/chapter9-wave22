import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './utils/firebase';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Login from './pages/login/login';
import Game from './pages/Game';
import Homepage from './pages/HomePage';
import Register from './pages/login/Register';
import Rank from "./pages/Rank"
import Navibar from "./components/navibar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap"></div>
      <Navibar />
      <Routes>
        <Route path="/players/:id" element={<Profile />} />
        <Route path="/players/edit/:id" element={<ProfileEdit />} />
        <Route path="/game/rps" element={<Game />} />
        <Route path="/" element={<Landing name="Guest" />} />
        <Route path="login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rank/:id" element={< Rank />}/>
      </Routes>
       <Footer />
      </div>
    </div>
  );
}

export default App;
