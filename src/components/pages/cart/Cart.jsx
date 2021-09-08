import React, { Component } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import { displayAlert } from "../../../utils/misc";
import Product from "../../blocks/Product";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
import NewTitles from "../home/NewTitles";
import Location from "../Location/Location";
import HorizontalProduct from "./HorizontalProduct";

class Cart extends Component {
  state = {
    step: 1,
    qty: 1,
    selectedLocation: 0,
    selectedPayment: 0,

    AddAddress: false,
    fields: {
      Address: "",
      Name: "",
    },
  };

  closeModal = () => {
    this.setState({
      AddAddress: false,
    });
  };

  render() {
    const { step, qty, selectedLocation, selectedPayment, fields, AddAddress } =
      this.state;

    const onFieldChange = (name, value) =>
      this.setState({ fields: { ...fields, [name]: value } });
    return (
      <div className="contact-us cart">
        <div className="page-label" />
        <Container>
          <div className=" cart-header">
            <Row>
              <Col md={6}>
                <h3 className="page-title">your cart</h3>
              </Col>
              <Col md={6}>
                <div className="steps">
                  <ul>
                    {/* step 1 label  start  */}
                    <li>
                      <div className={step >= 1 ? "step stepActive" : "step"}>
                        <span
                          className={step >= 1 ? " bg-stepActive" : ""}
                          onClick={() =>
                            this.setState({
                              step: 1,
                            })
                          }
                        >
                          {" "}
                          {step > 1 ? <i className="fa fa-check"></i> : 1}
                        </span>
                        <p> Check Your Books</p>
                      </div>
                    </li>
                    {/* step 1 label  end  */}
                    <li
                      className={
                        step >= 2 ? "step-hr bg-stepActive" : "step-hr"
                      }
                    ></li>
                    {/* step 2 label  start  */}

                    <li>
                      <div className={step >= 2 ? "step stepActive" : "step"}>
                        <span
                          className={step >= 2 ? " bg-stepActive" : ""}
                          onClick={() => {
                            this.setState({
                              step: 2,
                            });
                          }}
                        >
                          {step > 2 ? <i className="fa fa-check"></i> : 2}
                        </span>
                        <p>Your Address</p>
                      </div>
                    </li>
                    <li
                      className={
                        step >= 3 ? "step-hr bg-stepActive" : "step-hr"
                      }
                    ></li>
                    {/* step 2 label  end  */}
                    {/* step 3 label  start  */}

                    <li>
                      <div className={step >= 3 ? "step stepActive" : "step"}>
                        <span
                          className={step >= 3 ? " bg-stepActive" : ""}
                          onClick={() => {
                            this.setState({
                              step: 3,
                            });
                          }}
                        >
                          {step > 3 ? <i className="fa fa-check"></i> : 3}
                        </span>
                        <p> Payment Method</p>
                      </div>
                    </li>
                    {/* step 3 label  end  */}
                  </ul>
                </div>
              </Col>
            </Row>
          </div>

          <div className="form-box">
            <Row>
              <Col md={6}>
                {step === 1 ? (
                  <>
                    <h4>Check Your Books</h4>

                    <HorizontalProduct withDelete />
                    <HorizontalProduct withDelete />
                    <HorizontalProduct withDelete />
                  </>
                ) : step === 2 ? (
                  <>
                    <h4>Location</h4>

                    <Location
                      selectedLocation={selectedLocation}
                      id={1}
                      changeLocation={(id) => this.selectedLocation(id)}
                      widthCheck
                    />
                    <Location
                      selectedLocation={selectedLocation}
                      id={2}
                      changeLocation={(id) => this.selectedLocation(id)}
                      widthCheck
                    />

                    <button
                      className="submit-button"
                      onClick={() => this.setState({ AddAddress: true })}
                    >
                      Add Location
                    </button>
                  </>
                ) : (
                  <>
                    <h4>Payment</h4>

                    {this.payment(
                      "Cash on the door",
                      "+YOU CAN PAYMET BY CASH + 3$",
                      1
                    )}
                    {this.payment(
                      "CRIDET CARD",
                      'YOU CAN PAYMET BY CARD " VISA OR MASTER CARD "',
                      2
                    )}
                  </>
                )}
              </Col>
              <Col md={6}>
                <div className="invoice">
                  <h4>Invoice</h4>
                  {/* invoice list start  */}
                  <ul>
                    <li className="title-list">
                      <span className="title-list_books-span">books</span>
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
                      <span>total</span>
                      <span>650$</span>
                    </li>
                  </ul>
                  {/* invoice list end  */}

                  {/* invoice location start  */}
                  {step === 3 && selectedLocation > 0 && (
                    <div className="invoice-location">
                      <div className="location__header flex">
                        <h6>Compass Social Studies Curriculum</h6>
                      </div>
                      <p>AMMAN - JORDAN - QUEEN RANIA STREET BUL 15</p>
                      <div className="location-footer flex">
                        <span>+9620000000</span>
                      </div>
                    </div>
                  )}
                  {/* invoice location end  */}

                  <button
                    className="submit-button"
                    onClick={() => {
                      this.setState({
                        step: step + 1,
                      });
                    }}
                  >
                    Continue
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <NewTitles title="Books you may like" />

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
            <h5>Edit Your Location</h5>
            <i onClick={this.closeModal} className="fa fa-times"></i>
          </div>
          <div className="address-inputs">
            <Row>
              <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                <TextInput
                  name="Name"
                  label="Name"
                  placeholder="Name"
                  value={fields.Name}
                  onFieldChange={onFieldChange}
                />
              </Col>
              <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                <TextInput
                  name="Phone"
                  label="Phone"
                  placeholder="Phone"
                  value={fields.Phone}
                  onFieldChange={onFieldChange}
                />
              </Col>
              <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                <TextInput
                  name="Address"
                  label="Address"
                  placeholder="Address"
                  value={fields.Address}
                  onFieldChange={onFieldChange}
                  isTextArea
                />
              </Col>

              <Col lg={12} md={12} sm={12} className="locationButton">
                <button
                  className="submit-button"
                  onClick={() => {
                    //   this.addUpdateUserLocation();
                  }}
                >
                  Add Location
                </button>
              </Col>
            </Row>
          </div>
        </Modal>
        {/* end add/edit address modal */}
      </div>
    );
  }
  selectedLocation = (id) => {
    this.setState({
      selectedLocation: id,
    });
  };
  payment = (type, text, id) => {
    const { selectedPayment } = this.state;
    return (
      <div
        className="payment"
        onClick={() => {
          if (id === 2) {
            displayAlert("Error", "This Method Not In Service", "error");
          } else {
            this.setState({ selectedPayment: id });
          }
        }}
      >
        <div className="payment__Contents flex">
          <div>
            <h6>{type}</h6>
            <span>{text}</span>
          </div>
          <div className="flex">
            <span
              style={
                selectedPayment === id ? { backgroundColor: "#50a433 " } : null
              }
            >
              <i className="fa fa-check"></i>
            </span>
          </div>
        </div>
      </div>
    );
  };
}

export default Cart;
