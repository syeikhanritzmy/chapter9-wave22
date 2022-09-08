import React, { useState, useNavigate, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cards from "../components/card";
import Carousels from "../components/carousel";
import "../styles/landing.css";
import ButtonLogout from "../components/buttons/buttonLogOut";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { HashLink as Link } from "react-router-hash-link";

export default function Landing(props) {
  const [player, setPlayer] = useState("");
  const auth = getAuth();
  useEffect(() => {
    const db = getDatabase();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const scoreRef = ref(db, "/users/" + uid);
        onValue(scoreRef, (snapshot) => {
          const data = snapshot.val();
          setPlayer(data.username);
        });
      }
    });
  });

  return (
    <div className="bg-dark">
      {/* Intro section */}
      <div className="myBG">
        <div className=" intro">
          <Container className="text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <h1 className="title">Welcome to the Game, {player}</h1>
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
