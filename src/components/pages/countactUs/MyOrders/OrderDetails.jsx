import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalProduct from "../../cart/HorizontalProduct";
import AgentOf from "../../home/AgentOf";

class OrderDetails extends Component {
    state = { step: 1, qty: 1, selectedLocation: 0, selectedPayment: 0, orderData: this.props.location?.state?.orderData ?? [] };
    render() {
        const { step, qty, selectedLocation, selectedPayment, orderData } = this.state;
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
                                {orderData?.order_details?.map((data) => {
                                    return <HorizontalProduct fromOrders data={data} />;
                                })}
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
                                        {orderData?.order_details?.map(({ quantity, total_price, unit_price, book }) => {
                                            return (
                                                <li>
                                                    <span>{book?.title}</span>
                                                    <span>{(book?.campaign ? this.newPrice(book?.campaign, book?.price) : book?.price) * quantity}$</span>
                                                </li>
                                            );
                                        })}

                                        <li className="tax">
                                            <span>TAX</span>
                                            <span>{orderData?.tax_amount}</span>
                                        </li>
                                        <li>
                                            <span>DELEVERY FEE</span>
                                            <span>{orderData?.delivery_amount}$</span>
                                        </li>
                                        <li className="total">
                                            <span>TOTAL</span>
                                            <span> {orderData?.total_amount * orderData?.tax_amount + (orderData?.delivery_amount + orderData?.total_amount)}$</span>
                                        </li>
                                        {/* invoice location start  */}

                                        <div className="invoice-location-insert">
                                            <h5>Delivered to</h5>

                                            <div className="location__header flex">
                                                <h6>{orderData?.user_location?.name}</h6>
                                            </div>
                                            <p>{orderData?.user_location?.address}</p>
                                            <div className="location-footer flex">
                                                <span>{orderData?.user_location?.phone}</span>
                                            </div>
                                        </div>
                                        {/* invoice location end  */}

                                        {/* invoice Payment start  */}

                                        <div className="invoice-location-insert">
                                            <h5>Payment by</h5>

                                            <div className="location__header flex">
                                                <h6>{orderData?.payment_method} </h6>
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
    newPrice = (campaign, price) => {
        let discountAmount = (price * campaign.percentage) / 100;

        let priceAfterDiscount = 0;
        if (discountAmount > campaign.fixed_amount) {
            priceAfterDiscount = price - campaign.fixed_amount;

            return priceAfterDiscount;
        } else {
            priceAfterDiscount = price - discountAmount;
            return priceAfterDiscount;
        }
    };
}

export default OrderDetails;
