import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './utils/firebase'

import './App.css';

import Landing from "./pages/Landing"
import Profile from "./pages/Profile"
import ProfileEdit from "./pages/ProfileEdit"
import Game from "./pages/Game"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/players/:id" element={< Profile />}/>
          <Route path="/players/edit/:id" element={< ProfileEdit />}/>
          <Route path="/game/rps" element={< Game />}/>
          <Route path="/" element={< Landing />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
