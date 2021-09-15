import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { generalServices } from "../../../services/GeneralServices";
import { locationService } from "../../../services/LocationService";
import { displayAlert } from "../../../utils/misc";
import TextInput from "../../blocks/TextInput";

function Location({ selectedLocation, changeLocation, widthCheck, locationData, getUserAddresses }) {
    const [addAddress, setAddAddress] = useState(false);
    const [Countries, setCountries] = useState([]);
    const [fields, setFields] = useState({
        address: locationData?.address ?? "",
        name: locationData?.name ?? "",
        phone: locationData?.phone ?? "",
        country: locationData?.country ?? "",
    });

    useEffect(() => {
        getAllCountries();
    }, []);

    const closeModal = () => {
        setAddAddress(false);
    };
    const onFieldChange = (name, value) => setFields({ ...fields, [name]: value });

    const getAllCountries = async () => {
        const { countries } = await generalServices.getAllCountries();
        setCountries(countries);
    };

    const updateLocation = async () => {
        const { success, data } = await locationService.updateLocation(locationData.id, fields);

        if (!success) return;
        displayAlert("Done", "Location Edited", "success").then(() => {
            setAddAddress(false);
            getUserAddresses();
        });
    };

    const deleteLocation = async () => {
        const { success, data } = await locationService.deleteLocation(locationData.id);

        if (!success) return;
        displayAlert("Done", "Location Deleted", "success").then(() => {
            getUserAddresses();
        });
    };

    return (
        <div
            className="location"
            onClick={() => {
                // setSelectedLocation(id);
                if (changeLocation) {
                    changeLocation(locationData);
                }
            }}
        >
            <div className="location__header flex">
                <h6>{locationData?.name}</h6>
                <button
                    onClick={() => {
                        setAddAddress(true);
                    }}
                >
                    <i class="fa fa-pen"></i>
                </button>
            </div>
            <p>{locationData?.address}</p>
            <div className="location-footer flex">
                <span>{locationData?.phone}</span>
                {widthCheck ? (
                    <div className="flex">
                        <span style={selectedLocation?.id === locationData?.id ? { backgroundColor: "#50a433 " } : null}>
                            <i className="fa fa-check"></i>
                        </span>
                    </div>
                ) : (
                    <button
                        onClick={() => {
                            deleteLocation();
                        }}
                        className="location__delete"
                    >
                        <i className="fa fa-trash-alt"></i>
                    </button>
                )}
            </div>

            {/* add/edit address modal */}
            <Modal show={addAddress} width="600" effect="fadeInUp" onHide={closeModal} className="location-modal">
                <div className="modal-title flex">
                    <h5>Edit Your Location</h5>
                    <i onClick={closeModal} className="fa fa-times"></i>
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
                                    setFields({ ...fields, country: target.value });
                                }}
                            >
                                <option defaultValue={fields.country}>{fields.country}</option>
                                {Countries.map(({ name }) => {
                                    return <option value={name}>{name}</option>;
                                })}
                            </Form.Select>
                        </Col>

                        <Col lg={12} md={12} sm={12} className="locationButton">
                            <button
                                className="submit-button"
                                onClick={() => {
                                    updateLocation();
                                }}
                            >
                                Update Location
                            </button>
                        </Col>
                    </Row>
                </div>
            </Modal>
            {/* end add/edit address modal */}
        </div>
    );
}

export default Location;
