import React from "react";
import books from "../data/books.json";
import "../scss/App.scss";
import { Row, Container, Col } from "react-grid-system";
import Navbar from "../components/Navbar.js";
import {Icon} from 'antd'

const displayAllClasses = books.map(book => {
    const c = localStorage.getItem("course-name")
  if (book.course.includes(c)) {
    console.log(book.course);

    return (
      <div>
        <Row>
          <Col sm={6} style={{display: "flex"}}>
            <h3>
              <a href={book.link} target="_blank">
                {book.title}
              </a>
            </h3>
            <Icon type="link" />
          </Col>
          <Col sm={3}>
            <h3>{book.course}</h3>
          </Col>
          <Col sm={3}>
            <h3>{book.quarter}</h3>
          </Col>
          <Col sm={3}>
            <h3>{book.type}</h3>
          </Col>
        </Row>
      </div>
    );
  }
});

class BookDisplay extends React.Component {
  render() {
    return (
      <div>
        <Container className="bookdisplay">
          <Navbar />
          <br style={{ clear: "both" }} />
          <Row className="graphDisplay" justify="center">
            <p>Graph display</p>
          </Row>
          <Row className="title">
            <Col sm={6}>
              <h3>Document Title</h3>
            </Col>
            <Col sm={3}>
              <h3>Class</h3>
            </Col>
            <Col sm={3}>
              <h3>Quarter</h3>
            </Col>
            <Col sm={3}>
              <h3>Type</h3>
            </Col>
          </Row>
          {displayAllClasses}
        </Container>
      </div>
    );
  }
}

export default BookDisplay;
