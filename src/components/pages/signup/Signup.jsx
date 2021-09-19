import React, { Component } from "react";
import { Col, Container, Row, Form, InputGroup } from "react-bootstrap";
import { apiService } from "../../../services/ApiService";
import { authService } from "../../../services/AuthService";
import { generalServices } from "../../../services/GeneralServices";
import { displayAlert, getResponseErrors } from "../../../utils/misc";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
import { setUser } from "../../../redux/actions-reducers/user";
import { connect } from "react-redux";
class SignUp extends Component {
  state = {
    countries: [],
    fields: {
      email: "",
      name: "",
      phone: "",
      password_confirmation: "",
      password: "",
      country: "",
    },
    errors: {
      email: "",
      name: "",
      phone: "",
      password_confirmation: "",
      password: "",
      country: "",
    },
    openEyes: false,
  };
  async componentDidMount() {
    const { countries } = await generalServices.getAllCountries();
    this.setState({
      countries,
      fields: {
        ...this.state.fields,
        country: countries[0].name,
      },
    });
  }
  render() {
    const onFieldChange = (name, value) =>
      this.setState({
        fields: { ...fields, [name]: value },
        errors: {
          email: "",
          name: "",
          phone: "",
          password_confirmation: "",
          password: "",
          country: "",
        },
      });
    const { fields, countries, errors, openEyes } = this.state;

    return (
      <div className="contact-us auth">
        <div className="page-label" />
        <Container>
          {/* sign up title start  */}
          <h3 className="page-title">sign up</h3>
          {/* sign up title start  */}

          <div className="contact-us__contents">
            <div className="form-box">
              <Row>
                {/* sign up form start  */}
                <Col>
                  <TextInput
                    name="name"
                    label=""
                    placeholder="Full Name"
                    value={fields.name}
                    onFieldChange={onFieldChange}
                    validate={errors.name}
                  />
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
                  <InputGroup className="mb-3 flex input-group1">
                    <input
                      className="password-input"
                      type={openEyes ? "password" : "text"}
                      label=""
                      name="password_confirmation"
                      placeholder="Confirm Password"
                      value={fields.password_confirmation}
                      onChange={(e) => {
                        this.setState({
                          fields: {
                            ...this.state.fields,
                            password_confirmation: e.target.value,
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
                  {/* <TextInput
                    name="password"
                    label=""
                    placeholder="Password"
                    value={fields.password}
                    onFieldChange={onFieldChange}
                    validate={errors.password}
                  />
                  
                  <TextInput
                    name="password_confirmation"
                    label=""
                    placeholder="Confirm Password"
                    value={fields.password_confirmation}
                    onFieldChange={onFieldChange}
                  /> */}

                  <button
                    className="submit-button"
                    onClick={() => {
                      this.submit();
                    }}
                  >
                    Sign up
                  </button>
                  <p>
                    I have an account <a href="/login">login</a>
                  </p>
                </Col>
                {/* sign up form end  */}

                {/* Sign up main img start */}
                <Col md={6}>
                  <img
                    src="/images/Group 50411.png"
                    alt="l"
                    className="main-form-img"
                  />
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

  submit = async () => {
    const { fields } = this.state;
    const { success, data, message, errors } = await authService.SignUp(fields);

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
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

export default connect(mapStateToProps, { setUser })(SignUp);
