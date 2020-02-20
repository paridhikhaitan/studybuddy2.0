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
      title: "",
      class: "",
      quarter: "",
      type: "",
      professor: "",
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const targetEvent = event.target.name;
    this.setState({ [targetEvent]: event.target.value });
    console.log(event.target.value + " type: " + event.target.name);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("content submitted");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <br style={{ clear: "both" }} />
          <Row justify="center" style={{ textAlign: "center" }}>
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
          </Row>
        </Container>
      </div>
    );
  }
}

export default Upload;
