// src/App.js
import React from "react";
import "./App.css";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const firstName = "Mounir";

  return (
    <div className="App">
      <Card style={{ width: "18rem", margin: "auto", marginTop: "50px" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <Price />
          </Card.Subtitle>
          <Card.Text>
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>

      <p className="message">Hello, {firstName ? firstName : "there"}!</p>
      <div>
        {firstName && (
          <img
            src="https://www.destination-innovation.com/wp-content/uploads/2018/11/akio-morita-Sony.jpg"
            alt="profile"
          />
        )}
      </div>
    </div>
  );
}

export default App;
