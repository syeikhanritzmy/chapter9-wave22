import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './utils/firebase';


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// <<<<<<< HEAD
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Login from './pages/login/login';
import Game from './pages/Game';
import Homepage from './pages/HomePage';
import Register from './pages/login/Register';
import Navibar from "./components/navibar";
import Footer from "./components/footer";
// =======
// import Landing from "./pages/Landing";
// import Profile from "./pages/Profile";
// import ProfileEdit from "./pages/ProfileEdit";
// import Login from "./pages/login";
// import Game from "./pages/Game";
// import Navibar from "./components/navibar";
// import Footer from "./components/footer";
// >>>>>>> 6b45d6fec1e22de6c576f3e534390f7f6f3f81fa

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
      </Routes>
       <Footer />
      </div>
    </div>
  );

//       <div className="page-container">
//         <div className="content-wrap">
//           <Navibar />
//           <Routes>
//             <Route path="/players/:id" element={<Profile />} />
//             <Route path="/players/edit/:id" element={<ProfileEdit />} />
//             <Route path="/game/rps" element={<Game />} />
//             <Route path="/" element={<Landing name="Guest" />} />
//             <Route path="login" element={<Login />} />
//           </Routes>
//           <Footer />
//         </div>
//       </div>
// >>>>>>> 6b45d6fec1e22de6c576f3e534390f7f6f3f81fa
//     </div>
//   );
}

export default App;
