import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { profileService } from "../../../../services/Profile";
import MainLoader from "../../../blocks/MainLoader";
import AgentOf from "../../home/AgentOf";
import Order from "./Order";

class MyOrders extends Component {
  state = {
    Orders: [],
    pageLoader: true,
  };

  componentDidMount() {
    this.getOrders();
  }

  getOrders = async () => {
    const { success, data } = await profileService.getOrders();

    if (!success) return;
    this.setState({
      orders: data,
      pageLoader: false,
    });
  };

  render() {
    const { orders, pageLoader } = this.state;
    return pageLoader ? (
      <MainLoader />
    ) : (
      <div className="contact-us auth">
        <div className="page-label" />
        <Container>
          <h3 className="page-title">My Orders</h3>
          <div className="form-box">
            {orders?.length > 0 ? (
              <Row>
                {orders.map((item, index) => {
                  return (
                    <Col key={index} xl={6}>
                      <Order orderData={item} />
                    </Col>
                  );
                })}
              </Row>
            ) : (
              <div className="empty-img">
                <img src="/images/empty.png" alt="l" />
                <h6>Orders Empty</h6>
              </div>
            )}
          </div>
        </Container>
        <AgentOf />
      </div>
    );
  }
}

export default MyOrders;
