import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  InputGroup,
  FormControl,
  Modal,
} from "react-bootstrap";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
import "../../../assets/style/components/pages/profile/_profile.scss";
class Profile extends Component {
  state = {
    AddAddress: false,
    fields: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  };
  closeModal = () => {
    this.setState({
      AddAddress: false,
    });
  };
  render() {
    const onFieldChange = (name, value) =>
      this.setState({ fields: { ...fields, [name]: value } });
    const { AddAddress, fields } = this.state;
    return (
      <div className="contact-us profile auth">
        <div className="page-label" />
        <Container>
          <h3 className="page-title">Profile</h3>
          <div className="form-box">
            <input
              type="file"
              className="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"
            />
            <Row>
              <Col md={6} sm={12}>
                <TextInput
                  name="name"
                  label=""
                  placeholder="User name"
                  value=""
                />
                <TextInput name="email" label="" placeholder="Email" value="" />

                <InputGroup className="mb-3 flex input-group1">
                  <Form.Select
                    className="profile-select"
                    aria-label="Default select example"
                  >
                    <option>+01</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <span className="vertical-line"></span>
                  <input
                    className="phone-number-input"
                    type="text"
                    placeholder="PHONE NUMBER"
                  />
                </InputGroup>
                <InputGroup className="mb-3 flex input-group1">
                  <FormControl
                    className="yourpass-input"
                    placeholder="YourPass"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <button
                    className="reset-button"
                    onClick={() => this.setState({ AddAddress: true })}
                  >
                    Reset
                  </button>
                </InputGroup>

                <button className="submit-button">Save</button>
              </Col>

              <Col md={6} sm={12}>
                <div className="profile__img">
                  <img src="/images/radio-host.png" alt="l" />
                  <label htmlFor="avatar">Change</label>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <AgentOf />

        {/* add/edit address modal */}
        <Modal
          show={AddAddress}
          width="600"
          effect="fadeInUp"
          onHide={this.closeModal}
          className="location-modal"
        >
          <div className="modal-title flex">
            <h5>Change Password</h5>
            <i onClick={this.closeModal} className="fa fa-times"></i>
          </div>
          <div className="address-inputs">
            <Row>
              <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                <TextInput
                  name="password"
                  label="Password"
                  placeholder="password"
                  value={fields.password}
                  onFieldChange={onFieldChange}
                />
                <TextInput
                  name="newPassword"
                  label="NewPassword"
                  placeholder="newPassword"
                  value={fields.newPassword}
                  onFieldChange={onFieldChange}
                />
                <TextInput
                  name="confirmNewPassword"
                  label="Confirm New Password"
                  placeholder="confirmNewPassword"
                  value={fields.confirmNewPassword}
                  onFieldChange={onFieldChange}
                />
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
      </div>
    );
  }
}

export default Profile;
