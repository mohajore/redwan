import React, { Component } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
import Location from "./Location";

class MyLocations extends Component {
    state = {
        AddAddress: false,
        fields: {
            Address: "",
            Name: "",
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
                    <h3 className="page-title">My Locations</h3>
                    <div className="form-box">
                        <Row>
                            <Col md={8}>
                                <Location widthCheck={false} />
                                <Location widthCheck={false} />
                                <button className="submit-button" onClick={() => this.setState({ AddAddress: true })}>
                                    Add Location
                                </button>
                            </Col>

                            <Col md={4}>
                                {/* <img scc="/images/" alt="l" /> */}
                                <img src="/images/Group-50411.png" alt="l" className="main-form-img" />
                            </Col>
                        </Row>
                    </div>
                </Container>
                <AgentOf />

                {/* add/edit address modal */}
                <Modal show={AddAddress} width="600" effect="fadeInUp" onHide={this.closeModal} className="location-modal">
                    <div className="modal-title flex">
                        <h5>Edit Your Location</h5>
                        <i onClick={this.closeModal} className="fa fa-times"></i>
                    </div>
                    <div className="address-inputs">
                        <Row>
                            <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                                <TextInput name="Name" label="Name" placeholder="Name" value={fields.Name} onFieldChange={onFieldChange} />
                            </Col>
                            <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                                <TextInput name="Phone" label="Phone" placeholder="Phone" value={fields.Phone} onFieldChange={onFieldChange} />
                            </Col>
                            <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                                <TextInput name="Address" label="Address" placeholder="Address" value={fields.Address} onFieldChange={onFieldChange} isTextArea />
                            </Col>

                            <Col lg={12} md={12} sm={12} className="locationButton">
                                <button
                                    className="submit-button"
                                    onClick={() => {
                                        //   this.addUpdateUserLocation();
                                    }}
                                >
                                    Add Location
                                </button>
                            </Col>
                        </Row>
                    </div>
                </Modal>
                {/* end add/edit address modal */}
            </div>
        );
    }
}

export default MyLocations;
