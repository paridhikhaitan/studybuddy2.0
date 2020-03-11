import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../scss/App.scss";
import Navbar from "../components/Navbar";

class About extends React.Component {
  render() {
    return (
      <Container className="about">
        <Navbar />
        <br style={{ clear: "both" }} />
        <Row align="center" justify="center" id="aboutHeader">
          <Col md={8} sm={10} xs={16}>
            <h6>
              We believe that sharing information should be simple and
              efficient.
            </h6>
          </Col>
          <Col md={8} sm={6} xs={16}>
            <img src={require("../images/about.svg")} />
          </Col>
        </Row>

        <Row align="center" justify="center" className="centralText">
          <Col md={8} sm={6} xs={16}>
            <img src={require("../images/ipad2.svg")} />
          </Col>
          <Col md={8} sm={10} xs={16}>
            <h4>You can efficiently find the books that you need</h4>
            <h3>
              Tired of googling for textbooks, tired of posting on Facebook
              groups to request for books? We have more than 100+ files,
              including textbooks, notes, syllabus and more!
            </h3>
          </Col>
        </Row>
        <Row align="center" justify="center" className="centralText">
          <Col md={8} sm={10} xs={16}>
            <h4>You can share your files easily</h4>
            <h3>
              In just under 5 lines, you can make sure that your amazing notes
              reach all those UCSD students who crave for it! They will live on
              for years to come.
            </h3>
          </Col>
          <Col md={8} sm={6} xs={16}>
            <img src={require("../images/easyUpload.svg")} />
          </Col>
        </Row>
        <Row align="center" justify="center" className="centralText">
          <Col md={8} sm={6} xs={16}>
            <img src={require("../images/request.svg")} />
          </Col>
          <Col md={8} sm={10} xs={16}>
            <h4>You can request any file you need</h4>
            <h3>
              Could not attend class because of diseases or cannot find a book
              that you were looking for? Through our wishlist you can request
              books, syllabus, class notes and more!
            </h3>
          </Col>
        </Row>

        <div className="createdBy">
          <h1>Created By</h1>
          <Row align="center" justify="center">
            <Col sm={5} xs={10}>
              <img src={require("../images/paridhi.png")} alt="paridhi" />
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default About;
