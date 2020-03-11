import React from "react";
import allWishes from "../data/wishlist.json";
import { Col, Row } from "react-grid-system";
import { Container } from "react-grid-system";
import WOW from "wowjs";
import axios from "axios";

const API_URL = "https://warm-mesa-02077.herokuapp.com/api/wishes";

class Wishlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allWish: new Array(),
      book_title: "",
      course_name: "",
      type: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayAllWishes = this.displayAllWishes.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    new WOW.WOW().init();

    this.loadData();
  }

  displayAllWishes() {
    return this.state.allWish.map(wish => (
      <Row className="prevWish">
        <Col xs={3}>
          <p>{wish.course_name}</p>
        </Col>
        <Col xs={6}>
          <p>{wish.book_title}</p>
        </Col>
        <Col xs={3} className={wish.type}>
          <p>{wish.type}</p>
        </Col>
        <Col xs={2}>
          <button type="button" className="uploadBtn">
            <a href="/upload">upload</a>
          </button>
        </Col>
      </Row>
    ));
  }

  loadData() {
    var self = this;
    axios
      .get(API_URL)
      .then(function(res) {
        self.setState({ allWish: res.data });
      })
      .then(() => {
        console.log(self.state.allWish);
        this.displayAllWishes();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(event) {
    const e = event.target.name;
    this.setState({
      [e]: event.target.value
    });
    console.log(this.state.type);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    axios
      .post(API_URL, this.state)
      .then(function(res) {
        console.log("Content loaded");
      })
      .then(() => {
        this.loadData();
      })
      .catch(function(error) {
        console.log("Error");
      });
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
              <h6>Help the community by adding these books</h6>
            </Col>
          </Row>
          <Row justify="center" id="allWish">
            <Col sm={14}>
              <Row>
                <Col xs={3}>
                  <h3>Course</h3>
                </Col>
                <Col xs={6}>
                  <h3>Title</h3>
                </Col>
                <Col xs={3}>
                  <h3>Type</h3>
                </Col>
                <Col xs={2}>
                  <h3>Upload</h3>
                </Col>
              </Row>
            </Col>
            <Col sm={14}>{this.displayAllWishes()}</Col>
          </Row>
          <Row justify="center">
            <Col xs={14}>
              <h6>Request a file for yourself!</h6>
            </Col>
          </Row>
          <Row justify="center">
            <Col sm={14}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  File Title:
                  <br />
                  <input
                    type="text"
                    value={this.state.value}
                    name="book_title"
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label for="type">
                  File Type:
                  <br />
                  <select
                    id="type"
                    name="type"
                    onChange={this.handleChange}
                    required
                  >
                    <option value="textbook">Textbook</option>
                    <option value="exams">Exams</option>      
                    <option value="notes">Notes</option>
                    <option value="syllabus">Syllabus</option>
                  </select>
                      
                </label>
                <br />{" "}
                <label>
                  Course Name:
                  <br />
                  <input
                    type="text"
                    value={this.state.value}
                    name="course_name"
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <button className="uploadBtn" type="submit">
                  <h4>submit</h4>
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Wishlist;
