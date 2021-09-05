import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";

class Login extends Component {
    render() {
        return (
            <div className="contact-us auth">
                <div className="page-label" />
                <Container>
                    <h3 className="page-title">LOGIN</h3>
                    <div className="contact-us__contents">
                        <div className="form-box">
                            <Row>
                                <Col md={6}>
                                    <TextInput name="email" label="" placeholder="Email" value="" />
                                    <TextInput name="password" label="" placeholder="Password" value="" />
                                    <span className="forget-password">Forget my password</span>
                                    <button className="submit-button">Login</button>
                                    <p>
                                        I don't have an account <a href="/">signup</a>
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

export default Login;
