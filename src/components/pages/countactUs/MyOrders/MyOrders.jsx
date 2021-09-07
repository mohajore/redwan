import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AgentOf from "../../home/AgentOf";
import Order from "./Order";

class MyOrders extends Component {
    render() {
        return (
            <div className="contact-us auth">
                <div className="page-label" />
                <Container>
                    <h3 className="page-title">My Orders</h3>
                    <div className="form-box">
                        <Row>
                            <Col xl={6}>
                                <Order />
                            </Col>
                            <Col xl={6}>
                                <Order withMore={true} />
                            </Col>
                            <Col xl={6}>
                                <Order withMore={true} />
                            </Col>
                            <Col xl={6}>
                                <Order />
                            </Col>
                        </Row>
                    </div>
                </Container>
                <AgentOf />
            </div>
        );
    }
}

export default MyOrders;
