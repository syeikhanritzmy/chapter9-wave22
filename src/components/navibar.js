import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Link } from "react-router-dom";

export default function Navibar() {
  return (
    <div>
      {" "}
      <>
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
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/game/rps"}>
                Games
              </Nav.Link>
              <Nav.Link as={Link} to="#about-us">
                About
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                Sign Up
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>{" "}
    </div>
  );
}
