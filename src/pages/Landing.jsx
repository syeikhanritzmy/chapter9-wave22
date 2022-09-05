import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "../components/card";
import Carousels from "../components/carousel";
import "../styles/landing.css";

import { HashLink as Link } from "react-router-hash-link";

export default function Landing(props) {
  return (
    <div>
      {/* Intro section */}
      <div className="myBG">
        <div className=" intro">
          <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <h1 className="title">Welcome to the Game, {props.name}</h1>
                <h3 className="d-flex justify-content-center title">
                  Let's play some games !
                </h3>
                <Link to="#Cards" smooth>
                  <Button className="primary my-2 w-50">PLAY GAME</Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div>
        <Carousels />
        <Cards />
      </div>
    </div>
  );
}
