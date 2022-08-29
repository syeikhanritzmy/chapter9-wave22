import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
