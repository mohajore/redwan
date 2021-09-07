import React, { Component } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";

class Login extends Component {
    state = {
        AddAddress: false,
        fields: {
            Email: "",
        },
    };
    closeModal = () => {
        this.setState({
            AddAddress: false,
        });
    };
    render() {
        const onFieldChange = (name, value) => this.setState({ fields: { ...fields, [name]: value } });

        const { fields, AddAddress } = this.state;
        return (
            <div className="contact-us auth">
                <div className="page-label" />
                <Container>
                    <h3 className="page-title">LOGIN</h3>
                    <div className="form-box">
                        <Row>
                            <Col md={6}>
                                <TextInput name="email" label="" placeholder="Email" value={fields.email} onFieldChange={onFieldChange} />
                                <TextInput name="password" label="" placeholder="Password" value={fields.password} onFieldChange={onFieldChange} />
                                <span className="forget-password" onClick={() => this.setState({ AddAddress: true })}>
                                    Forget my password
                                </span>
                                <button className="submit-button">Login</button>
                                <p>
                                    I don't have an account <a href="/signup">signup</a>
                                </p>
                            </Col>

                            <Col md={6}>
                                {/* <img scc="/images/" alt="l" /> */}
                                <img src="/images/Group 50411.png" alt="l" className="main-form-img" />
                            </Col>
                        </Row>
                    </div>

                    {/* add/edit address modal */}
                    <Modal show={AddAddress} width="600" effect="fadeInUp" onHide={this.closeModal} className="location-modal">
                        <div className="modal-title flex">
                            <h5>Reset Your Password</h5>
                            <i onClick={this.closeModal} className="fa fa-times"></i>
                        </div>
                        <div className="address-inputs">
                            <Row>
                                <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                                    <TextInput name="Email" label="Email" placeholder="Email" value={fields.Email} onFieldChange={onFieldChange} />
                                </Col>

                                <Col lg={12} md={12} sm={12} className="locationButton">
                                    <button
                                        className="submit-button"
                                        onClick={() => {
                                            //   this.addUpdateUserLocation();
                                        }}
                                    >
                                        Reset Password
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </Modal>
                    {/* end add/edit address modal */}
                </Container>
                <AgentOf />
            </div>
        );
    }
}

export default Login;
