import React, { Component } from "react";
import { Col, Container, Row, Form, FormControl, InputGroup, SplitButton, Dropdown } from "react-bootstrap";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
class SignUp extends Component {
    state = {
        fields: {
            email: "",
            name: "",
            ConfirmPassword: "",
            password: "",
        },
    };
    render() {
        const onFieldChange = (name, value) => this.setState({ fields: { ...fields, [name]: value } });
        const { fields } = this.state;

        return (
            <div className="contact-us auth">
                <div className="page-label" />
                <Container>
                    {/* sign up title start  */}
                    <h3 className="page-title">SIGNUP</h3>
                    {/* sign up title start  */}

                    <div className="contact-us__contents">
                        <div className="form-box">
                            <Row>
                                {/* sign up form start  */}
                                <Col>
                                    <TextInput name="name" label="" placeholder="FULL NAME" value={fields.name} onFieldChange={onFieldChange} />
                                    <TextInput name="email" label="" placeholder="Email" value={fields.email} onFieldChange={onFieldChange} />
                                    <Row>
                                        <Col lg={4} md={12}>
                                            <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                                <option value="0">Country</option>
                                                <option value="1">Jordan</option>
                                                <option value="2">Kuwait</option>
                                                <option value="3">Iraq</option>
                                            </Form.Select>
                                        </Col>
                                        <Col lg={8} md={12}>
                                            <InputGroup className="mb-3 flex input-group1">
                                                <Form.Select aria-label="Default select example">
                                                    <option>+01</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </Form.Select>
                                                <input type="text" placeholder="PHONE NUMBER" />
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    <TextInput name="password" label="" placeholder="PASSWORD" value={fields.password} onFieldChange={onFieldChange} />
                                    <TextInput name="ConfirmPassword" label="" placeholder="CONFIRM PASSWORD" value={fields.ConfirmPassword} onFieldChange={onFieldChange} />

                                    <button className="submit-button">SIGNUP</button>
                                    <p>
                                        I have an account <a href="/login">login</a>
                                    </p>
                                </Col>
                                {/* sign up form end  */}

                                {/* Sign up main img start */}
                                <Col md={6}>
                                    <img src="/images/Group 50411.png" alt="l" />
                                </Col>
                                {/* Sign up main img end */}
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
