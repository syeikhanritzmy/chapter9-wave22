import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Cards() {
  return (
    <div id="Cards">
      <div
        className="Container d-flex justify-content-center p-5
      "
      >
        <div className="row ">
          <div className="col ">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              />
              <Card.Body>
                <Card.Title>Game List</Card.Title>
                <Card.Text className="text-black d-flex">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link to={"/games"}>See more</Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Multiplayer Game</Card.Title>
                <Card.Text className="text-black d-flex">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              />
              <Card.Body>
                <Card.Title>Coming Soon</Card.Title>
                <Card.Text className="text-black d-flex">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">See more</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
