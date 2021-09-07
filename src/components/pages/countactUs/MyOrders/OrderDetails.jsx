import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalProduct from "../../cart/HorizontalProduct";
import AgentOf from "../../home/AgentOf";

class OrderDetails extends Component {
    state = { step: 1, qty: 1, selectedLocation: 0, selectedPayment: 0 };
    render() {
        const { step, qty, selectedLocation, selectedPayment } = this.state;
        return (
            <div className="contact-us cart">
                <div className="page-label" />
                <Container>
                    <div className=" cart-header">
                        <Row>
                            <Col md={5}>
                                <h3 className="page-title">Order Details</h3>
                            </Col>
                        </Row>
                    </div>

                    <div className="form-box">
                        <Row>
                            <Col md={6}>
                                <h4>items</h4>
                                <HorizontalProduct fromOrders />
                            </Col>
                            <Col md={6}>
                                <div className="invoice">
                                    <h4>Invoice</h4>
                                    {/* invoice list start  */}
                                    <ul>
                                        <li className="title-list">
                                            <span>BOOKS</span>
                                            <span>Price</span>
                                        </li>
                                        <li>
                                            <span>BOOK 1 NAME</span>
                                            <span>410$</span>
                                        </li>
                                        <li>
                                            <span>BOOK 2 NAME</span>
                                            <span>320$</span>
                                        </li>
                                        <li>
                                            <span>BOOK 3 NAME</span>
                                            <span>100$</span>
                                        </li>
                                        <li className="tax">
                                            <span>TAX</span>
                                            <span>180$</span>
                                        </li>
                                        <li>
                                            <span>DELEVERY FEE</span>
                                            <span>50$</span>
                                        </li>
                                        <li className="total">
                                            <span>TOTAL</span>
                                            <span>650$</span>
                                        </li>
                                        {/* invoice location start  */}

                                        <div className="invoice-location-insert">
                                            <h5>Delivered to</h5>

                                            <div className="location__header flex">
                                                <h6>Home</h6>
                                            </div>
                                            <p>AMMAN - JORDAN - QUEEN RANIA STREET BUL 15</p>
                                            <div className="location-footer flex">
                                                <span>+9620000000</span>
                                            </div>
                                        </div>
                                        {/* invoice location end  */}

                                        {/* invoice Payment start  */}

                                        <div className="invoice-location-insert">
                                            <h5>Payment by</h5>

                                            <div className="location__header flex">
                                                <h6>CreditCard</h6>
                                            </div>
                                        </div>
                                        {/* invoice Payment end  */}
                                    </ul>
                                    {/* invoice list end  */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <AgentOf />
            </div>
        );
    }
}

export default OrderDetails;
