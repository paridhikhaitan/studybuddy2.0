import React from "react";
import "./scss/App.scss";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import Navbar from "./components/Navbar";
import books from "./data/books.json";
import classArr from "./data/courseName";
import BookDisplay from "./pages/BookDisplay";
import imageMap from "./data/imageMap";
import axios from "axios";
import Slider from "infinite-react-carousel";

const classFolder = classArr.map(book => {});
const API_URL = "https://warm-mesa-02077.herokuapp.com/api/books";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCourseNames: new Array(),
      allCourses: new Array()
    };

    this.displayAllBooks = this.displayAllBooks.bind(this);
  }

  componentDidMount() {
    var self = this;
    axios
      .get(API_URL)
      .then(function(res) {
        console.log("all data", res.data);
        self.setState({ allCourses: res.data });
      })
      .then(() => {
        let courseArr = self.state.allCourses;
        let courseSet = new Set();

        for (let i = 0; i < courseArr.length; i++) {
          let pushWord = undefined;
          if (courseArr[i].course_name != undefined) {
            let allWords = courseArr[i].course_name.split(" ");
            pushWord = allWords[0];
          }

          courseSet.add(pushWord);
        }

        const arr = [...courseSet];
        self.setState({
          allCourseNames: arr
        });

        console.log(self.state.allCourseNames);
      })
      .then(() => {
        console.log("axios fetched all data --");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displayAllBooks() {
    console.log("from display", typeof this.state.allCourseNames);

    return this.state.allCourseNames.map(book => {
      let imgLink;
      if (imageMap[book] === undefined) {
        imgLink = imageMap["DEF"];
      } else {
        imgLink = imageMap[book];
      }

      return (
        <Col sm={4} xs={8}>
          <a href="/book" style={{ textDecoration: "none" }}>
            <div
              className="folder"
              onClick={() => {
                localStorage.setItem("course-name", book);
                console.log(localStorage.getItem("course-name"));
              }}
            >
              <img src={require("./images/folder.svg")} />
              <div className="textThingy">
                <img src={require(`${imgLink}`)} alt={imgLink} />
                <p>{book}</p>
              </div>
            </div>
          </a>
        </Col>
      );
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <br style={{ clear: "both" }} />
          <Row>
            <Col xs={16} className="carousel">
              <Slider dots autoplay="true" autoplaySpeed="5000">
                <div>
                  <img src={require("./images/carousel/carousel1.svg")} />
                </div>
                <div>
                  <img src={require("./images/carousel/carousel2.svg")} />
                </div>
                <div>
                  <img src={require("./images/carousel/carousel3.svg")} />
                </div>
                <div>
                  <img src={require("./images/carousel/carousel4.svg")} />
                </div>
              </Slider>
            </Col>
          </Row>
          <Row className="book-folder">{this.displayAllBooks()}</Row>
        </Container>
      </div>
    );
  }
}

export default App;
