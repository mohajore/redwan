import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";

class AboutPage extends Component {
    render() {
        return (
            <div className="contact-us">
                <div className="page-label" />
                <Container>
                    <h3 className="page-title">About Al-Redwan</h3>
                </Container>
                <AgentOf />
            </div>
        );
    }
}

export default AboutPage;
