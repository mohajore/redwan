import React, { Component } from "react";
import { Col, Container, Row, Modal, Form } from "react-bootstrap";
import { generalServices } from "../../../services/GeneralServices";
import { locationService } from "../../../services/LocationService";
import { profileService } from "../../../services/Profile";
import { displayAlert } from "../../../utils/misc";
import MainLoader from "../../blocks/MainLoader";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
import Location from "./Location";

class MyLocations extends Component {
    state = {
        AddAddress: false,
        pageLoader: true,
        locations: [],
        countries: [],
        fields: {
            address: "",
            name: "",
            phone: "",
            country: "",
        },
    };

    componentDidMount() {
        Promise.all([this.getAllCountries(), this.getUserAddresses()]);
    }

    getAllCountries = async () => {
        const { countries } = await generalServices.getAllCountries();
        this.setState({
            countries,
            fields: {
                ...this.state.fields,
                country: countries[0].name,
            },
        });
    };

    getUserAddresses = async () => {
        const { success, data } = await locationService.getUserAddresses();

        if (!success) return;

        this.setState({
            locations: data,
            pageLoader: false,
        });
    };

    closeModal = () => {
        this.setState({
            AddAddress: false,
        });
    };
    render() {
        const onFieldChange = (name, value) => this.setState({ fields: { ...fields, [name]: value } });
        const { fields, AddAddress, locations, pageLoader, countries } = this.state;
        return pageLoader ? (
            <MainLoader />
        ) : (
            <div className="contact-us auth">
                <div className="page-label" />
                <Container>
                    <h3 className="page-title">My Locations</h3>
                    <div className="form-box">
                        <Row>
                            <Col md={8}>
                                {locations.map((item) => {
                                    return <Location widthCheck={false} locationData={item} getUserAddresses={() => this.getUserAddresses()} />;
                                })}
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
                        <h5>Add Your Location</h5>
                        <i onClick={this.closeModal} className="fa fa-times"></i>
                    </div>
                    <div className="address-inputs">
                        <Row>
                            <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                                <TextInput name="name" label="Name" placeholder="Name" value={fields.name} onFieldChange={onFieldChange} />
                            </Col>
                            <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                                <TextInput name="phone" label="Phone" placeholder="Phone" value={fields.phone} onFieldChange={onFieldChange} />
                            </Col>
                            <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                                <TextInput name="address" label="Address" placeholder="Address" value={fields.address} onFieldChange={onFieldChange} isTextArea />
                            </Col>
                            <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={({ target }) => {
                                        this.setState({
                                            fields: {
                                                ...fields,
                                                country: target.value,
                                            },
                                        });
                                    }}
                                >
                                    {countries.map(({ name }) => {
                                        return <option value={name}>{name}</option>;
                                    })}
                                </Form.Select>
                            </Col>

                            <Col lg={12} md={12} sm={12} className="locationButton">
                                <button
                                    className="submit-button"
                                    onClick={() => {
                                        this.addLocation();
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

    addLocation = async () => {
        const { fields } = this.state;
        const { success, data } = await locationService.addLocation(fields);

        if (!success) return;
        displayAlert("Done", "Location Added", "success").then(() => {
            this.getUserAddresses();
            this.setState({
                AddAddress: false,
                fields: {
                    address: "",
                    name: "",
                    phone: "",
                    country: "",
                },
            });
        });
    };

    updateLocation = async () => {
        const { fields } = this.state;
        const { success, data } = await locationService.updateLocation(fields);

        if (!success) return;
        displayAlert("Done", "Location Added", "success").then(() => {
            this.getUserAddresses();
            this.setState({
                AddAddress: false,
                fields: {
                    address: "",
                    name: "",
                    phone: "",
                    country: "",
                },
            });
        });
    };
}

export default MyLocations;
