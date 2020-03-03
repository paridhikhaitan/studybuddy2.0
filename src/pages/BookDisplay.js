import React from "react";
import books from "../data/books.json";
import "../scss/App.scss";
import { Row, Container, Col } from "react-grid-system";
import Navbar from "../components/Navbar.js";
import { Icon } from "antd";
import axios from "axios";
import imageMap from "../data/imageMap.js";

const API_URL = "https://warm-mesa-02077.herokuapp.com/api/books";

class BookDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allBooks: new Array()
    };
    this.displayImage = this.displayImage.bind(this)
    this.displaySelectedBooks = this.displaySelectedBooks.bind(this)
  }

  componentWillMount() {
    var self = this;
    axios
      .get(API_URL)
      .then(function(res) {
        self.setState({ allBooks: res.data });
      })
      .then(() => {
        console.log("completed getting all books for inside page");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displaySelectedBooks() {
    console.log("from display selected books");

    if (this.state.allBooks.length > 0) {
      return this.state.allBooks.map(book => {
        const c = localStorage.getItem("course-name");
        console.log(book.course_name)
        if (book.course_name!= undefined && book.course_name.includes(c)) {
          console.log("book course" , book.course_name);

          return (
            <div>
              <Row>
                <Col sm={6} style={{ display: "flex" }}>
                  <h3>
                    <a href={book.link} target="_blank">
                      {book.book_title}
                    </a>
                  </h3>
                  <Icon type="link" />
                </Col>
                <Col sm={3}>
                  <h3>{book.course_name}</h3>
                </Col>
                <Col sm={3} className={book.type.toLowerCase()}>
                  <p>{book.type.toLowerCase()}</p>
                </Col>
              </Row>
            </div>
          );
        }
      });
    } else {
      console.log("Waiting for axios to return all books");
    }
  }

  displayImage(){
    const c = localStorage.getItem("course-name");
    let imgLink = "";

    if(imageMap[c] === undefined){
      return <img src={require(`../images/banners/DEF.svg`)} alt={c} />
    } else {
      return <img src={require(`../images/banners/${c}.svg`)} alt={c} />
    }

    
  }

  render() {

    return (
      <div>
        <Container className="bookdisplay">
          <Navbar />
          <br style={{ clear: "both" }} />
          <Row className="inside-banner" justify="center">
            {this.displayImage()}
          </Row>
          <Row className="title">
            <Col sm={6}>
              <h3>Document Title</h3>
            </Col>
            <Col sm={3}>
              <h3>Class</h3>
            </Col>
            <Col sm={3}>
              <h3>Type</h3>
            </Col>
            <Col sm={3}>
              <h3>Quarter/Professor</h3>
            </Col>
          </Row>
          {this.displaySelectedBooks()}
        </Container>
      </div>
    );
  }
}

export default BookDisplay;
