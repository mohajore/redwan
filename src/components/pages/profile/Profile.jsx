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

import { apiService } from "../../../services/ApiService";
import { authService } from "../../../services/AuthService";
import { displayAlert, getResponseErrors } from "../../../utils/misc";
import { generalServices } from "../../../services/GeneralServices";
import { profileService } from "../../../services/Profile";
class Profile extends Component {
  state = {
    AddAddress: false,
    countries: [],
    fields: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      name: "",
      email: "",
      country: "",
      phone: "",
    },
    errors: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      name: "",
      email: "",
      country: "",
      phone: "",
    },
  };
  closeModal = () => {
    this.setState({
      AddAddress: false,
    });
  };

  async componentDidMount() {
    const { countries } = await generalServices.getAllCountries();

    const { data } = await profileService.getUserData();

    let selectedCountry = countries.find((item) => item.name === data.country);
    this.setState({
      countries: countries,

      fields: {
        ...this.state.fields,
        country: `+ ${selectedCountry.callingCodes} ${selectedCountry.name}`,
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    });
  }

  render() {
    // const onFieldChange = (name, value) =>
    // this.setState({ fields: { ...fields, [name]: value } });
    //
    const onFieldChange = (name, value) =>
      this.setState({
        fields: { ...fields, [name]: value },
        errors: {
          oldPassword: "",
          newPassword: "",
          confirmNewPassword: "",
          name: "",
          email: "",
          country: "",
          phone: "",
        },
      });
    //
    const { AddAddress, fields, errors, countries } = this.state;
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
                  placeholder="User Name"
                  value={fields.name}
                  onFieldChange={onFieldChange}
                  validate={errors.name}
                />

                {/*  */}
                <TextInput
                  name="email"
                  label=""
                  placeholder="Email"
                  value={fields.email}
                  onFieldChange={onFieldChange}
                  validate={errors.email}
                />
                <Row>
                  <Col lg={4} md={12}>
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
                      <option selected value={fields.country}>
                        {fields.country}
                      </option>
                      {countries.map(({ callingCodes, name }) => {
                        return (
                          <option value={name}>
                            +{callingCodes} {name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Col>
                  <Col lg={8} md={12}>
                    <TextInput
                      name="phone"
                      label=""
                      placeholder="Phone Number"
                      value={fields.phone}
                      onFieldChange={onFieldChange}
                      validate={errors.phone}
                    />
                  </Col>
                </Row>

                <InputGroup className="mb-3 flex input-group1">
                  <FormControl
                    name="yourpass"
                    className="yourpass-input"
                    placeholder="YourPass"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={fields.yourpass}
                    onFieldChange={onFieldChange}
                    validate={errors.yourpass}
                    disabled
                  />
                  <button
                    className="reset-button"
                    onClick={() => this.setState({ AddAddress: true })}
                  >
                    Reset
                  </button>
                </InputGroup>

                <button
                  className="submit-button"
                  onClick={() => {
                    this.submit();
                  }}
                >
                  Save
                </button>
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
                  validate={errors.password}
                />
                <TextInput
                  name="newPassword"
                  label="NewPassword"
                  placeholder="New Password"
                  value={fields.newPassword}
                  onFieldChange={onFieldChange}
                  validate={errors.newPassword}
                />
                <TextInput
                  name="confirmNewPassword"
                  label="Confirm New Password"
                  placeholder="confirm New Password"
                  value={fields.confirmNewPassword}
                  onFieldChange={onFieldChange}
                  validate={errors.confirmNewPassword}
                />
              </Col>

              <Col lg={12} md={12} sm={12} className="locationButton">
                <button
                  className="submit-button"
                  onClick={() => {
                    this.resetPassword();
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
  submit = async () => {
    const { fields } = this.state;
    const { success, data, message, errors } =
      await profileService.ChangeProfile({
        name: fields.name,
        email: fields.email,
        country: fields.country,
        phone: fields.phone,
      });

    if (!success) {
      if (errors) {
        const handelErrors = getResponseErrors(errors);
        this.setState({
          errors: handelErrors,
        });
        return;
      } else {
        return displayAlert("Error", message, "error");
      }
    }
    displayAlert("Done", "Profile Changed", "success");
  };
  resetPassword = async () => {
    const { fields } = this.state;
    const { success, data, message, errors } =
      await profileService.resetPassword({
        oldPassword: fields.oldPassword,
        newPassword: fields.newPassword,
        confirmNewPassword: fields.confirmNewPassword,
      });

    if (!success) {
      if (errors) {
        const handelErrors = getResponseErrors(errors);
        this.setState({
          errors: handelErrors,
        });
        return;
      } else {
        return displayAlert("Error", message, "error");
      }
    }
    displayAlert("Done", "Your Password Changed", "success");
  };
}

export default Profile;
