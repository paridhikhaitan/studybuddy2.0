import React from "react";
import "./scss/App.scss";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import Navbar from "./components/Navbar";

setConfiguration({ gutterWidth: 20 });

function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <br style={{clear: "both"}} />
        <Row>
          <Col sm={4}>
            <h1 className="stroke">UCSD</h1>
            <h1>study buddy</h1>
          </Col>
          <Col sm={8}>
            <div className="carousel"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
