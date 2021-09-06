import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  FormControl,
  InputGroup,
  SplitButton,
  Dropdown,
} from "react-bootstrap";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
class SignUp extends Component {
  render() {
    return (
      <div className="contact-us auth">
        <div className="page-label" />
        <Container>
          <h3 className="page-title">SIGNUP</h3>
          <div className="contact-us__contents">
            <div className="form-box">
              <Row>
                <Col>
                  <TextInput
                    name="name"
                    label=""
                    placeholder="FULL NAME"
                    value=""
                  />
                  <TextInput
                    name="email"
                    label=""
                    placeholder="Email"
                    value=""
                  />
                  <Row>
                    <Col lg={4} md={12}>
                      <Form.Select
                        className="me-sm-2"
                        id="inlineFormCustomSelect"
                      >
                        <option value="0">Country</option>
                        <option value="1">Jordan</option>
                        <option value="2">Kuwait</option>
                        <option value="3">Iraq</option>
                      </Form.Select>
                    </Col>
                    <Col lg={8} md={12}>
                      <InputGroup className="mb-3 flex input-group1">
                        {" "}
                        <Form.Select aria-label="Default select example">
                          <option>+01</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        {/* <TextInput
                          name="name"
                          label=""
                          placeholder="PHONE NUMBER"
                          value=""
                        /> */}
                        <input type="text" placeholder="PHONE NUMBER" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <TextInput
                    name="password"
                    label=""
                    placeholder="PASSWORD"
                    value=""
                  />
                  <TextInput
                    name="password"
                    label=""
                    placeholder="CONFIRM PASSWORD"
                    value=""
                  />
                  {/* <span className="forget-password">Forget my password</span> */}
                  <button className="submit-button">SIGNUP</button>
                  <p>
                    I have an account <a href="/">login</a>
                  </p>
                </Col>

                <Col md={6}>
                  {/* <img scc="/images/" alt="l" /> */}
                  <img src="/images/Group 50411.png" alt="l" />
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <AgentOf />
      </div>
    );
  }
}

export default SignUp;
