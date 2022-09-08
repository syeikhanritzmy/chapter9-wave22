import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import Container from "react-bootstrap/Container";
import { signOut } from 'firebase/auth';
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navibar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    })
  }, []);

  const handleSignOut = async () => {
    try {
      console.log("signing out");
      await signOut(auth);
      setUser(null);
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" className="Navbar">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              alt=""
              src="../../assets/icons/binarnew.svg"
              width="30"
              height="30"
              className="d-inline-block align-top Image-rounded "
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link as={Link} to={"/homepage"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/games">
              Games
            </Nav.Link>
            <Nav.Link as={Link} to="/detail/rps">
              Top Scores
            </Nav.Link>
            <Nav.Link as={Link} to={"/game/rps"}>
              Play RPS
            </Nav.Link>
          </Nav>
            { user ? 
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to={`/players/${user.uid}`}>
              My Profile
            </Nav.Link>
            <Nav.Link onClick={handleSignOut}>
              Log Out
            </Nav.Link>
          </Nav>
              : 
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to={"/login"}>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Sign Up
            </Nav.Link>
          </Nav>
            }
        </Container>
      </Navbar>
    </div>
  );
}
