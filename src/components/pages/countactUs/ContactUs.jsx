import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { generalServices } from "../../../services/GeneralServices";
import { homeService } from "../../../services/HomeService";
import { displayAlert, getResponseErrors } from "../../../utils/misc";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";

class ContactUs extends Component {
    state = { footerData: {}, fields: { name: "", email: "", message: "" }, errors: { name: "", email: "", message: "" } };

    componentDidMount() {
        this.getFooterData();
    }
    async getFooterData() {
        const { success, data } = await generalServices.getFooterData();

        if (!success) return;
        this.setState({
            footerData: data,
            pageLoader: false,
        });
    }

    render() {
        const { fields, errors, footerData } = this.state;
        const onFieldChange = (name, value) => this.setState({ fields: { ...fields, [name]: value }, errors: { name: "", email: "", message: "" } });

        return (
            <div className="contact-us">
                <div className="page-label" />
                <Container>
                    <h3 className="page-title">Contact Us</h3>

                    <div className="form-box">
                        <Row>
                            <Col md={6}>
                                <TextInput name="name" label="" placeholder="Name" value={fields.name} onFieldChange={onFieldChange} validate={errors.name} />

                                <TextInput name="email" label="" placeholder="Email" value={fields.email} onFieldChange={onFieldChange} validate={errors.email} />

                                <TextInput name="message" label="" placeholder="Message" value={fields.message} onFieldChange={onFieldChange} validate={errors.message} isTextArea />

                                <button
                                    className="submit-button"
                                    onClick={() => {
                                        this.submit();
                                    }}
                                >
                                    Send
                                </button>
                            </Col>

                            <Col md={6}>
                                {/* <img scc="/images/" alt="l" /> */}
                                <img src="/images/Group 504@2x.png" alt="l" className="main-form-img" />
                                <div className="contact-details">
                                    <h4>Or BY</h4>
                                    <div>
                                        <ul className="addresses-list">
                                            <li>
                                                <p>email</p>
                                                <span>{footerData.defaultBranch?.email}</span>
                                            </li>

                                            <li>
                                                <p>phone</p>
                                                <span>{footerData.defaultBranch?.phone}</span>
                                            </li>
                                            <li>
                                                <p>address</p>
                                                <span>{footerData.defaultBranch?.address}</span>
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

    submit = async () => {
        const { fields } = this.state;
        const { success, data, message, errors } = await generalServices.sendContactMessage(fields);

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

        console.log(data, "data.user");

        displayAlert("Done", "Message Sent", "success").then(() => this.setState({ fields: { name: "", email: "", message: "" } }));
    };
}

export default ContactUs;
