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
import Games from './pages/Games';
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
        <Route path="/games" element={<Games />} />
        <Route path="login" element={<Login />} />
        <Route path="/homepage" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/rps" element={< Rank />}/>
        <Route path="/" element={<Landing name="Guest" />} />
      </Routes>
       <Footer />
      </div>
    </div>
  );
}

export default App;
