import React from "react";
import { Routes, Route } from 'react-router-dom'
import './utils/firebase'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Landing from "./pages/Landing"
import Profile from "./pages/Profile"
import ProfileEdit from "./pages/ProfileEdit"
import Login from './pages/login';
import Game from "./pages/Game"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/players/:id" element={< Profile />}/>
          <Route path="/players/edit/:id" element={< ProfileEdit />}/>
          <Route path="/game/rps" element={< Game />}/>
          <Route path="/" element={< Landing />}/>
          <Route path="login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
