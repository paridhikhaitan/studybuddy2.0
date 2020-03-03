import React from "react";
import "./scss/App.scss";
import { Container, Row, Col, setConfiguration } from "react-grid-system";
import Navbar from "./components/Navbar";
import books from "./data/books.json";
import classArr from "./data/courseName";
import BookDisplay from "./pages/BookDisplay";
import imageMap from "./data/imageMap";
import axios from "axios";

const API_URL = "https://warm-mesa-02077.herokuapp.com/api/books";

const classFolder = classArr.map(book => {
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

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCourseNames: new Array(),
      allCourses: new Set()
    };

    this.displayAllBooks = this.displayAllBooks.bind(this);
  }

  componentDidMount() {
    var self = this;
    axios
      .get(API_URL)
      .then(function(res) {
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
        self.setState({
          allCourseNames: courseSet
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
    console.log(this.state.allCourseNames.size);
    if (this.state.allCourseNames.size > 0) {
      return this.state.allCourseNames.forEach((item)=>{console.log("item: ", item)})
    } else {
      console.log("WAITING FOR VALUES");
    }
  }

  render() {
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
            {/*
            <Col sm={9} className="searchCol">
              <p>Search Bar</p>
            </Col>
            <Col sm={1}>
              <button className="uploadBtn">
                <a href="#">Search</a>
              </button>
            </Col>*/}
          </Row>
          <Row>{this.displayAllBooks()}</Row>
        </Container>
      </div>
    );
  }
}

export default App;
