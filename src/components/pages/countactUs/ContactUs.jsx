import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";

class ContactUs extends Component {
    state = { fields: { name: "", email: "", message: "" } };
    render() {
        const { fields } = this.state;
        const onFieldChange = (name, value) => this.setState({ fields: { ...fields, [name]: value } });

        return (
            <div className="contact-us">
                <div className="page-label" />
                <Container>
                    <h3 className="page-title">Contact Us</h3>

                    <div className="form-box">
                        <Row>
                            <Col md={6}>
                                <TextInput name="name" label="" placeholder="Name" value={fields.name} onFieldChange={onFieldChange} />
                                <TextInput name="email" label="" placeholder="Email" value={fields.email} onFieldChange={onFieldChange} />
                                <TextInput name="message" label="" placeholder="Message" value={fields.message} isTextArea={true} onFieldChange={onFieldChange} />
                                <button className="submit-button">Send</button>
                            </Col>

                            <Col md={6}>
                                {/* <img scc="/images/" alt="l" /> */}
                                <img src="/images/Group 504@2x.png" alt="l" className="main-form-img" />
                                <div className="contact-details">
                                    <h4>OR BY</h4>
                                    <div>
                                        <ul className="addresses-list">
                                            <li>
                                                <p>Email</p>
                                                <span>info@edwanpublisher.com</span>
                                            </li>

                                            <li>
                                                <p>Phone</p>
                                                <span>+962 6 465 36 71</span>
                                                <span>+962 6 461 64 36</span>
                                            </li>
                                            <li>
                                                <span>Amman - Jordan, Hussian King Street - Alabdali</span>
                                            </li>
                                        </ul>
                                        <ul className="social-media">
                                            <li>
                                                <a href="/">
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i class="fab fa-instagram"></i>{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i class="fab fa-twitter"></i>{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i class="fab fa-linkedin-in"></i>{" "}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <AgentOf />
            </div>
        );
    }
}

export default ContactUs;
