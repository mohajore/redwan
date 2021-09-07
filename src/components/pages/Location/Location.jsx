import React, { useState } from "react";
import { Button, Col, Form, Row, Modal } from "react-bootstrap";
import LocationPicker from "react-location-picker";
import { Link } from "react-router-dom";
import TextInput from "../../blocks/TextInput";

function Location({ id, selectedLocation, changeLocation }) {
  const [addAddress, setAddAddress] = useState(false);
  const [fields, setFields] = useState({
    Address: "",
    Name: "",
  });

  const [Position, setPosition] = useState({
    lat: 31.963158,
    lng: 35.930359,
  });

  const [defaultPosition, setDefaultPosition] = useState({
    lat: 31.963158,
    lng: 35.930359,
  });

  const handleLocationChange = ({ position, places }) => {
    // Set new location
    // setPosition(position);
  };
  const closeModal = () => {
    setAddAddress(false);
  };
  const onFieldChange = (name, value) =>
    setFields({ ...fields, [name]: value });

  return (
    <div
      className="location"
      onClick={() => {
        // setSelectedLocation(id);
        changeLocation(id);
      }}
    >
      <div className="location__header flex">
        <h6>Compass Social Studies Curriculum</h6>
        <button
          onClick={() => {
            setAddAddress(true);
            // this.setState(
            //   {
            //     addAddress: true,
            // defaultPosition: {
            //   lat: parseFloat(item.latitude),
            //   lng: parseFloat(item.longitude),
            // },
            // locationId: item.id,
            // name: item.name,
            // country_id: item.country_id,
            // address: item.address,
            // // selecteOption:false,
            // areaId:item.area_id,
            // city_id: item.city_id,
            // addedUpdatedLocation: this.props.i18n.locationUpdated,
            // addUpdateLocationButton : this.props.i18n.updateAddress,
            // modalTitle : this.props.i18n.updateYourLocation

            //   },
            //   () => this.getAreas()
            // );
          }}
        >
          <i class="fa fa-pen"></i>
        </button>
      </div>
      <p>AMMAN - JORDAN - QUEEN RANIA STREET BUL 15</p>
      <div className="location-footer flex">
        <span>+9620000000</span>
        <div className="flex">
          <span
            style={
              selectedLocation === id ? { backgroundColor: "#50a433 " } : null
            }
          >
            <i className="fa fa-check"></i>
          </span>
        </div>
      </div>

      {/* add/edit address modal */}
      <Modal
        show={addAddress}
        width="600"
        effect="fadeInUp"
        onHide={closeModal}
        className="location-modal"
      >
        <div className="modal-title flex">
          <h5>Edit Your Location</h5>
          <i onClick={closeModal} className="fa fa-times"></i>
        </div>
        <div className="address-inputs">
          <Row>
            <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
              <TextInput
                name="Name"
                label="Name"
                placeholder="Name"
                value={fields.Name}
                onFieldChange={onFieldChange}
              />
            </Col>
            <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
              <TextInput
                name="Address"
                label="Address"
                placeholder="Address"
                value={fields.Address}
                onFieldChange={onFieldChange}
              />
            </Col>

            <Col lg={6} md={12} sm={12}></Col>
            <Col lg={6} md={12} sm={12}></Col>
            <Col lg={12} md={12} sm={12}>
              <LocationPicker
                circl
                containerElement={<div style={{ height: "100%" }} />}
                className="MapPicker"
                mapElement={<div style={{ height: "350px" }} />}
                onChange={handleLocationChange}
                defaultPosition={defaultPosition}
                circleOptions={{ visible: false }}
              />
            </Col>
            <Col lg={12} md={12} sm={12} className="locationButton">
              <button
                className="submit-button"
                onClick={() => {
                  //   this.addUpdateUserLocation();
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
