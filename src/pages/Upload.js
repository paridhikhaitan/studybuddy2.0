import React from "react";
import { Container, Col, Row } from "react-grid-system";
import Navbar from "../components/Navbar";
import { text } from "body-parser";
import "../scss/App.scss";

const BASE_API_URL = "http://localhost:4000/api/books";

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link: "",
      class: "",
      quarter: "",
      type: "",
      professor: "",
      name: "",
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
      step7: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.continueClick = this.continueClick.bind(this);
  }

  handleChange(event) {
    const targetEvent = event.target.name;
    this.setState({ [targetEvent]: event.target.value });
    console.log(event.target.value + " type: " + event.target.name);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  continueClick(from, to) {
    let f = from;
    let t = to;
    console.log(this.state.f, this.state.t);
    this.setState({
      step1: false
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <br style={{ clear: "both" }} />

          <Row className="uploadHeader">
            <Col xs={16}>
              <h1>Upload</h1>
              <h6>Share your knowledge with 6 easy steps</h6>
            </Col>
          </Row>
          {this.state.step1 && (
            <Row className="step" justify="center">
              <Col sm={2}>
                <div className="number">
                  <p>1</p>
                </div>
              </Col>
              <Col sm={6}>
                <label>
                  <h3>Class Name</h3>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                    name="class"
                    placeholder="Eg. CSE 120"
                  />
                </label>
                <h6
                  onClick={() => {
                    this.setState({ step1: false });
                    this.setState({ step2: true });
                  }}
                  name="step1"
                >
                  Continue ->
                </h6>
              </Col>
              <Col sm={6}>
                <img src={require("../images/step1.svg")} />
              </Col>
            </Row>
          )}

          {this.state.step2 && (
            <Row className="step" justify="center">
              <Col sm={2}>
                <div className="number">
                  <p>2</p>
                </div>
              </Col>
              <Col sm={6}>
                <label>
                  <h3>Link</h3>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                    name="link"
                    placeholder="http://"
                  />
                </label>
                <h6
                  onClick={() => {
                    this.setState({ step2: false });
                    this.setState({ step3: true });
                  }}
                >
                  Continue ->
                </h6>
              </Col>
              <Col sm={6}>
                <img src={require("../images/step2.svg")} />
              </Col>
            </Row>
          )}

          {this.state.step3 && (
            <Row className="step" justify="center">
              <Col sm={2}>
                <div className="number">
                  <p>3</p>
                </div>
              </Col>
              <Col sm={6}>
                <label>
                  <h3>Quarter</h3>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                    name="quarter"
                    placeholder="Eg. WI20"
                  />
                </label>
                <h6
                  onClick={() => {
                    this.setState({ step3: false });
                    this.setState({ step4: true });
                  }}
                >
                  Continue ->
                </h6>
              </Col>
              <Col sm={6}>
                <img src={require("../images/step3.svg")} />
              </Col>
            </Row>
          )}

          {this.state.step4 && (
            <Row className="step" justify="center">
              <Col sm={2}>
                <div className="number">
                  <p>4</p>
                </div>
              </Col>
              <Col sm={6}>
                <label>
                  <h3>Type of Resource</h3>
                  <select id="type" name="type" onChange={this.handleChange}>
                    <option value="document">Document</option>
                    <option value="syllabus">Syllabus</option>
                    <option value="review">Review Notes</option>
                  </select>
                </label>
                <h6
                  onClick={() => {
                    this.setState({ step4: false });
                    this.setState({ step5: true });
                  }}
                >
                  Continue ->
                </h6>
              </Col>
              <Col sm={6}>
                <img src={require("../images/step4.svg")} />
              </Col>
            </Row>
          )}

          {this.state.step5 && (
            <Row className="step" justify="center">
              <Col sm={2}>
                <div className="number">
                  <p>5</p>
                </div>
              </Col>
              <Col sm={6}>
                <label>
                  <h3>Professor</h3>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                    name="professor"
                    placeholder="John Doe"
                  />
                </label>
                <h6
                  onClick={() => {
                    this.setState({ step5: false });
                    this.setState({ step6: true });
                  }}
                >
                  Continue ->
                </h6>
              </Col>
              <Col sm={6}>
                <img src={require("../images/step5.svg")} />
              </Col>
            </Row>
          )}

          {this.state.step6 && (
            <Row className="step" justify="center">
              <Col sm={2}>
                <div className="number">
                  <p>6</p>
                </div>
              </Col>
              <Col sm={6}>
                <label>
                  <h3>Contributor's Name</h3>
                  <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.value}
                    name="name"
                    placeholder="John Doe"
                  />
                </label>
                <h6
                  onClick={() => {
                    this.setState({ step6: false, step7: true });
                  }}
                >
                  Continue ->
                </h6>
              </Col>
              <Col sm={6}>
                <img src={require("../images/step6.svg")} />
              </Col>
            </Row>
          )}

          {this.state.step7 && (
            <div className="uploadedScreen">
              <Row justify="center">
                
              </Row>
              <Row justify="center" onLoad={this.handleSubmit}>
                <Col xs={8}>
                  <img src={require("../images/step7.svg")} />
                </Col>
              </Row>
              <Row justify="center">
                <Col xs={4}>
                  <button className="uploadMore">
                    <a href="/upload">Upload More</a>
                  </button>
                </Col>
                <Col xs={2}>
                  <button className="home">
                    <a href="/">Home</a>
                  </button>
                </Col>
              </Row>
            </div>
          )}

          {/*<Row justify="center" style={{ textAlign: "center" }}>
            <Col sm={8}>
              <h2>Upload Books</h2>
              <p style={{ marginTop: "2rem" }}>
                Thank you for helping the community grow
              </p>
            </Col>
          </Row>
          <Row className="formArea">
            <Col sm={8}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Book Title:
                  <input
                    type="text"
                    value={this.state.value}
                    name="title"
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label>
                  Link:
                  <input
                    type="url"
                    value={this.state.value}
                    name="link"
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <br />
                <label>
                  Course:
                  <input
                    type="text"
                    value={this.state.value}
                    name="class"
                    onChange={this.handleChange}
                    placeholder="COGS 120"
                  />
                </label>
                <br />
                <label>
                  Quarter:
                  <input
                    type="text"
                    value={this.state.value}
                    name="quarter"
                    onChange={this.handleChange}
                    placeholder="WI20"
                  />
                </label>
                <br />
                <label>
                  Professor:
                  <input
                    type="text"
                    value={this.state.value}
                    name="professor"
                    onChange={this.handleChange}
                  />
                </label>
                <br />
                <label for="type">
                  Type:
                  <select id="type" name="type" onChange={this.handleChange}>
                    <option value="document">Document</option>
                    <option value="syllabus">Syllabus</option>
                    <option value="review">Review Notes</option>
                  </select>
                </label>
                <br />
                <button type="submit" className="saveUpload">
                  <h4>upload</h4>
                </button>
              </form>
            </Col>
            <Col sm={5} className="images">
              <div className="imagesForm">
                <img src={require("../images/uploadpage.svg")} />
              </div>
            </Col>
    </Row>*/}
        </Container>
      </div>
    );
  }
}

export default Upload;
