import React from "react";
import "./scss/App.scss";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import Navbar from "./components/Navbar";
import books from "./data/books.json";
import classArr from "./data/courseName";
import BookDisplay from "./pages/BookDisplay";
import imageMap from './data/imageMap';

const classFolder = classArr.map(book => {
  let imgLink;

  console.log(imageMap[book]);

  return (
    <Col sm={4} xs={8}>
      <a href="/book" style={{textDecoration: "none"}}>
        <div
          className="folder"
          onClick={() => {
            localStorage.setItem("course-name", book);
            console.log(localStorage.getItem("course-name"));
          }}
        >
          <img src={require("./images/folder.svg")} />
          <p>{book}</p>
        </div>
      </a>
    </Col>
  );
});

function App() {
  return (
    <div>
      <Container>
        <Navbar />
        <br style={{ clear: "both" }} />
        <Row>
          <Col sm={6}>
            <h1 className="stroke">UCSD</h1>
            <h1>study buddy</h1>
          </Col>
          <Col sm={10}>
            <div className="carousel"></div>
          </Col>
        </Row>
        <Row className="searchBar" justify="center">
          <Col sm={9} className="searchCol">
            <p>Search Bar</p>
          </Col>
          <Col sm={1}>
            <button className="uploadBtn">
              <a href="#">Search</a>
            </button>
          </Col>
        </Row>
        <Row>{classFolder}</Row>
      </Container>
    </div>
  );
}

export default App;
