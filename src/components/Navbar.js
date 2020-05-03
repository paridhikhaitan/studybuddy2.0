import React from "react";
import "../scss/App.scss";
import { Row, Col, Visible, Hidden } from "react-grid-system";

class Navbar extends React.Component {
  render() {
    return (
      <Row>
        <Hidden sm xs>
          <Col xs={8}>
            <h1 id="nav">
              <span id="st">UCSD </span> study buddy
            </h1>
          </Col>
        </Hidden>
        <Col xs={8}>
          <div className="Navbar">
            <h4>
              <a href="/">home</a>
            </h4>
            <h4>
              <a href="/about">about</a>
            </h4>
            <button className="uploadBtn">
              <a href="/upload">upload</a>
            </button>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Navbar;
