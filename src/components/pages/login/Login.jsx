import React, { Component } from "react";
import { Col, Container, Row, Modal, InputGroup } from "react-bootstrap";
import { apiService } from "../../../services/ApiService";
import { authService } from "../../../services/AuthService";
import { displayAlert, getResponseErrors } from "../../../utils/misc";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
import { setUser } from "../../../redux/actions-reducers/user";
import { connect } from "react-redux";

import { profileService } from "../../../services/Profile";
class Login extends Component {
  state = {
    AddAddress: false,
    fields: {
      email: "",
      password: "",
      checkEmail: "",
    },
    errors: {
      email: "",
      password: "",
      checkEmail: "",
    },
    openEyes: true,
  };
  closeModal = () => {
    this.setState({
      AddAddress: false,
    });
  };
  //   hide = () => {
  //     this.setState({ hide: !this.state.hide });
  //   };
  //   showEye = () => {
  //     this.setState({ showEye: !this.state.showEye });
  //   };
  render() {
    const onFieldChange = (name, value) =>
      this.setState({
        fields: { ...fields, [name]: value },
        errors: {
          email: "",
          password: "",
          checkEmail: "",
        },
      });

    const { fields, AddAddress, errors, openEyes } = this.state;

    return (
      <div className="contact-us auth">
        <div className="page-label" />
        <Container>
          <h3 className="page-title">login</h3>
          <div className="form-box">
            <Row>
              <Col md={6}>
                <TextInput
                  name="email"
                  label=""
                  placeholder="Email"
                  value={fields.email}
                  onFieldChange={onFieldChange}
                  validate={errors.email}
                />
                <InputGroup className="mb-3 flex input-group1">
                  <input
                    className="password-input"
                    type={openEyes ? "password" : "text"}
                    label=""
                    name="password"
                    placeholder="Password"
                    value={fields.password}
                    onChange={(e) => {
                      this.setState({
                        fields: {
                          ...this.state.fields,
                          password: e.target.value,
                        },
                      });
                    }}
                  />
                  <i
                    onClick={() => this.setState({ openEyes: !openEyes })}
                    className={
                      openEyes ? "fa fa-eye-slash fa-1x" : "fa fa-eye fa-1x"
                    }
                  ></i>
                </InputGroup>

                <span
                  className="forget-password"
                  onClick={() => this.setState({ AddAddress: true })}
                >
                  Forget my password
                </span>
                <button
                  className="submit-button"
                  onClick={() => {
                    //   this.addUpdateUserLocation();
                    this.submit();
                  }}
                >
                  Login
                </button>
                <p>
                  I don't have an account <a href="/signup">signup</a>
                </p>
              </Col>

              <Col md={6}>
                {/* <img scc="/images/" alt="l" /> */}
                <img
                  src="/images/Group 50411.png"
                  alt="l"
                  className="main-form-img"
                />
              </Col>
            </Row>
          </div>

          {/* add/edit address modal */}
          <Modal
            show={AddAddress}
            width="600"
            effect="fadeInUp"
            onHide={this.closeModal}
            className="location-modal"
          >
            <div className="modal-title flex">
              <h5>Reset Your Password</h5>
              <i onClick={this.closeModal} className="fa fa-times"></i>
            </div>
            <div className="address-inputs">
              <Row>
                <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                  <TextInput
                    name="checkEmail"
                    label="Email"
                    placeholder="Email"
                    value={fields.checkEmail}
                    onFieldChange={onFieldChange}
                    validate={errors.checkEmail}
                  />
                </Col>

                <Col lg={12} md={12} sm={12} className="locationButton">
                  <button
                    className="submit-button"
                    onClick={() => {
                      //   this.addUpdateUserLocation();
                      this.checkEmail();
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

  submit = async () => {
    const { fields } = this.state;
    const { success, data, message, errors } = await authService.login({
      email: fields.email,
      password: fields.password,
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

    apiService.storeToken(data.access_token);

    this.props.setUser({ ...data.user });

    window.location.href = "/";
  };

  checkEmail = async () => {
    const { fields } = this.state;
    const { success, message, errors } = await profileService.checkEmail({
      email: fields.checkEmail,
    });

    if (!success) {
      if (errors) {
        const handelErrors = getResponseErrors(errors);
        console.log(handelErrors);
        this.setState({
          errors: {
            ...this.state.errors,
            checkEmail: handelErrors.email,
          },
        });
        return;
      } else {
        return displayAlert("Error", message, "error");
      }
    }
    displayAlert("Done", "Check your Email", "success").then(() =>
      this.closeModal()
    );
  };
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

export default connect(mapStateToProps, { setUser })(Login);
