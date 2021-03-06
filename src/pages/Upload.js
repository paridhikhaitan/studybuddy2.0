import React from "react";
import { Container, Col, Row } from "react-grid-system";
import Navbar from "../components/Navbar";
import axios from "axios";
import { text } from "body-parser";
import "../scss/App.scss";
import ReactGA from "react-ga";

const API_URL = "https://warm-mesa-02077.herokuapp.com/api/books";

function initializeReactGA() {
  ReactGA.initialize("UA-159629320-1");
  ReactGA.pageview("/upload");
  console.log("Tracking GA on Upload Page");
}

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book_title: "",
      course_name: "",
      quarter: "",
      type: "",
      professor: "",
      link: "",
      uploadedPage: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getInputFile = this.getInputFile.bind(this);
  }

  componentDidMount() {
    initializeReactGA();
  }

  getInputFile(event) {
    console.log(event.target.files);
  }

  handleChange(event) {
    const targetEvent = event.target.name;

    if (targetEvent === "file_link") {
      console.log("here");
      this.setState({
        link: event.target.files[0]
      });
    }
    this.setState({ [targetEvent]: event.target.value });
    console.log(this.state, targetEvent);
  }

  handleSubmit(event) {
    event.preventDefault();
    const book = this.state;

    axios
      .post(API_URL, book)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      uploadedPage: true
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <br style={{ clear: "both" }} />
          {!this.state.uploadedPage && (
            <div>
              <Row justify="end" style={{ textAlign: "right" }}>
                <Col xs={16}>
                  <h1>Upload</h1>
                  <h6>Thank you for sharing your resources!</h6>
                </Col>
              </Row>
                  
              <Row className="formArea" justify="center" align="center">
                <Col xs={10} md={8} lg={6} className="images">
                  <div className="imagesForm">
                    <img src={require("../images/uploadScreen.svg")} />
                  </div>
                </Col>
                <Col sm={8}>
                  <form onSubmit={this.handleSubmit}>
                    <label>
                      <h3>File Name: </h3>
                      <input
                        type="text"
                        value={this.state.value}
                        name="book_title"
                        onChange={this.handleChange}
                        placeholder="E.g. The Design of Everyday Things"
                        required
                      />
                    </label>
                    <label>
                      <h3>Book Link:</h3>
                      <input
                        type="url"
                        value={this.state.value}
                        name="link"
                        onChange={this.handleChange}
                        placeholder="E.g. https://book.com"
                      />
                      {/*<input type="file" onChange={this.getInputFile} name="file_link" /> */}
                          
                    </label>
                    <label for="type">
                      <h3>File Type: </h3>
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
                     
                    <label>
                      <h3>Course Name: </h3>
                      <input
                        type="text"
                        value={this.state.value}
                        name="course_name"
                        onChange={this.handleChange}
                        placeholder="E.g. COGS 120"
                        required
                      />
                    </label>
                    <label>
                      <h3>Quarter: </h3>
                      <input
                        type="text"
                        value={this.state.value}
                        name="quarter"
                        onChange={this.handleChange}
                        placeholder="E.g. WI20"
                      />
                            
                    </label>
                       
                    <label>
                      <h3>Professor:</h3>
                      <input
                        type="text"
                        value={this.state.value}
                        name="professor"
                        onChange={this.handleChange}
                        placeholder="E.g. Michael Meyers"
                      />
                        
                    </label>
                        
                    <button type="submit" className="saveUpload">
                      <h4>upload</h4>
                    </button>
                  </form>
                              
                </Col>
                            
              </Row>
            </div>
          )}
          {this.state.uploadedPage && (
            <div>
              <Row justify="end" style={{ textAlign: "right" }}>
                <Col xs={16}>
                  <h1>Uploaded</h1>
                </Col>
              </Row>
              <Row justify="center" className="uploadedScreen upHeading">
                <Col sm={8} style={{ marginTop: "8rem" }}>
                  <h1>Thank You!</h1>
                  <h6>You've sucessfully uploaded your file</h6>

                  <div className="btns">
                    <button id="up-more">
                      <a href="/upload">upload more</a>
                    </button>
                    <button id="home">
                      <a href="/">home</a>
                    </button>
                  </div>
                </Col>
                <Col sm={6}>
                  <img
                    src={require("../images/uploadedScreen.svg")}
                    alt="Uploaded"
                  />
                </Col>
              </Row>
            </div>
          )}
                  
        </Container>
      </div>
    );
  }
}

export default Upload;
