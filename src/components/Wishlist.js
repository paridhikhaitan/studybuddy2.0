import React from "react";
import allWishes from "../data/wishlist.json";
import { Col, Row } from "react-grid-system";
import { Container } from "react-grid-system";
import WOW from 'wowjs';

const displayWishes = allWishes.map(wish => {
  return (
    <Row className="prevWish">
      <Col xs={3}>
        <p>{wish.course}</p>
      </Col>
      <Col xs={6}>
        <p>{wish.title}</p>
      </Col>
      <Col xs={3}>
        <p>{wish.professor}</p>
      </Col>
      <Col xs={2}>
        <button type="button" className="uploadBtn">
          <a href="/upload">upload</a>
        </button>
      </Col>
    </Row>
  );
});

class Wishlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "",
      type: "",
      professor: "",
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    new WOW.WOW().init();
  }

  handleChange(event) {
    const e = event.target.name;
    this.setState({
      [e]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="wishlist wow slideInLeft">
        <Container>
          <Row justify="center">
            <Col xs={14}>
              <h1>Wishlist</h1>
            </Col>
          </Row>
          <Row justify="center">
            <Col sm={6}>
              <img src={require("../images/edperson.png")} />
            </Col>
          </Row>
          <Row justify="center">
            <Col xs={14}>
              <h2>Requested</h2>
            </Col>
          </Row>
          <Row justify="center" id="allWish">
            <Col sm={14}>
              <Row>
                <Col xs={3}>
                  <h3>Class</h3>
                </Col>
                <Col xs={6}>
                  <h3>Title</h3>
                </Col>
                <Col xs={3}>
                  <h3>Professor</h3>
                </Col>
                <Col xs={2}>
                  <h3>Upload</h3>
                </Col>
              </Row>
            </Col>
            <Col sm={14}>{displayWishes}</Col>
          </Row>
          <Row justify="center">
            <Col xs={14}>
              <h2>Request!</h2>
            </Col>
          </Row>
          <Row justify="center">
            <Col sm={12}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Class Name:
                  <input
                    type="text"
                    value={this.state.value}
                    name="class"
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Type:
                  <input
                    type="text"
                    value={this.state.value}
                    name="type"
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Title:
                  <input
                    type="text"
                    value={this.state.value}
                    name="title"
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Class Name:
                  <input
                    type="text"
                    value={this.state.value}
                    name="professor"
                    onChange={this.handleChange}
                  />
                  <br />
                  <button className="uploadBtn" type="submit"><h4>submit</h4></button>
                </label>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Wishlist;
