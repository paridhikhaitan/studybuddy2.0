import React from "react";
import { Row, Col, Container } from "react-grid-system";
import "../scss/App.scss";

class Login extends React.Component {
  handleChange(event) {}

  handleSubmit(event) {}

  render() {
    return (
      <div>
        <Container>
            <Row className="login" align="center">
              <Col sm={8}>
                <img src={require("../images/login.svg")} />
              </Col>
              <Col sm={8}>
                <h1>Login</h1>
                <form>
                  <label>
                    <p>Username:</p>

                    <br />
                    <input type="text" name="username" required />
                  </label>
                  <label>
                    <p>Password:</p>
                    <br />
                    <input type="password" name="password" required />
                    <button type="submit" className="uploadBtn">
                      <a href="/">login</a>
                    </button>
                  </label>
                </form>
              </Col>
            </Row>

        </Container>
      </div>
    );
  }
}

export default Login;
