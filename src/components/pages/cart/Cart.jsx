import React, { Component } from "react";
import { Col, Container, Row, Modal, Form } from "react-bootstrap";
import { cartService } from "../../../services/CartService";
import { generalServices } from "../../../services/GeneralServices";
import { locationService } from "../../../services/LocationService";
import { displayAlert } from "../../../utils/misc";
import MainLoader from "../../blocks/MainLoader";

import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
import NewTitles from "../home/NewTitles";
import Location from "../Location/Location";
import HorizontalProduct from "./HorizontalProduct";
import { setUser } from "../../../redux/actions-reducers/user";
import { connect } from "react-redux";

class Cart extends Component {
  state = {
    step: 1,
    qty: 1,
    selectedLocation: {},
    selectedPayment: -1,
    books: [],
    locations: [],
    AddAddress: false,
    pageLoader: true,
    countries: [],

    fields: {
      address: "",
      name: "",
      phone: "",
      country: "",
    },
  };

  closeModal = () => {
    this.setState({
      AddAddress: false,
    });
  };

  componentDidMount() {
    Promise.all([
      this.getCartData(),
      this.getAllCountries(),
      this.getUserAddresses(),
    ]);
  }

  getCartData = async () => {
    const { data } = await cartService.getCartData();
    this.setState({
      books: data,
    });
  };

  getAllCountries = async () => {
    const { countries } = await generalServices.getAllCountries();
    this.setState({
      countries,
      fields: {
        ...this.state.fields,
        country: countries[0].name,
      },
    });
  };

  getUserAddresses = async () => {
    const { success, data } = await locationService.getUserAddresses();

    if (!success) return;

    this.setState({
      locations: data,
      pageLoader: false,
    });
  };
  render() {
    const {
      step,
      selectedLocation,
      selectedPayment,
      fields,
      AddAddress,
      books,
      pageLoader,
      locations,
      countries,
    } = this.state;

    const onFieldChange = (name, value) =>
      this.setState({ fields: { ...fields, [name]: value } });
    return pageLoader ? (
      <MainLoader />
    ) : (
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
                            if (books?.length > 0) {
                              this.setState({
                                step: 2,
                              });
                            }
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
                            if (selectedLocation.id) {
                              this.setState({
                                step: 3,
                              });
                            } else {
                              displayAlert(
                                "Warning",
                                "Please Select Location",
                                "warning"
                              );
                            }
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
            {books?.length > 0 ? (
              <Row>
                <Col md={6}>
                  {step === 1 ? (
                    <>
                      <h4>Check Your Books</h4>
                      {books.map((item, id) => {
                        return (
                          <HorizontalProduct
                            key={id}
                            withDelete
                            data={item}
                            reFetchData={() => this.getCartData()}
                          />
                        );
                      })}
                    </>
                  ) : step === 2 ? (
                    <>
                      <h4>Location</h4>
                      {locations.map((item, id) => {
                        return (
                          <Location
                            key={id}
                            widthCheck
                            locationData={item}
                            getUserAddresses={() => this.getUserAddresses()}
                            selectedLocation={selectedLocation}
                            changeLocation={(locationData) =>
                              this.selectedLocation(locationData)
                            }
                          />
                        );
                      })}

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
                      {books?.map(({ quantity, book }, id) => {
                        return (
                          <li key={id}>
                            <span>{book?.title}</span>
                            <span>
                              {(book?.campaign
                                ? this.newPrice(book?.campaign, book?.price)
                                : book?.price) * quantity}
                              $
                            </span>
                          </li>
                        );
                      })}
                      <li className="tax">
                        <span>TAX</span>
                        <span>0</span>
                      </li>
                      <li>
                        <span>DELEVERY FEE</span>
                        <span>0</span>
                      </li>
                      <li className="total">
                        <span>total</span>
                        <span>{this.totalAmount(books)}$</span>
                      </li>
                    </ul>
                    {/* invoice list end  */}

                    {/* invoice location start  */}
                    {step === 3 && selectedLocation && (
                      <div className="invoice-location">
                        <div className="location__header flex">
                          <h6>{selectedLocation?.name}</h6>
                        </div>
                        <p>{selectedLocation?.address}</p>
                        <div className="location-footer flex">
                          <span>{selectedLocation?.phone}</span>
                        </div>
                      </div>
                    )}
                    {/* invoice location end  */}

                    <button
                      className="submit-button"
                      onClick={() => {
                        if (step === 3) {
                          if (selectedPayment !== -1) {
                            this.checkout();
                          } else {
                            displayAlert(
                              "Warning",
                              "Please Select Payment Method",
                              "warning"
                            );
                          }
                        } else if (step === 2) {
                          if (selectedLocation.id) {
                            this.setState({
                              step: step + 1,
                            });
                          } else {
                            displayAlert(
                              "Warning",
                              "Please Select Location",
                              "warning"
                            );
                          }
                        } else {
                          if (books?.length > 0) {
                            this.setState({
                              step: step + 1,
                            });
                          }
                        }
                      }}
                    >
                      {step === 3 ? "CheckOut" : "Continue"}
                    </button>
                  </div>
                </Col>
              </Row>
            ) : (
              <div className="empty-img">
                <img src="/images/empty.png" alt="l" />
                <h6>Empty Cart</h6>
              </div>
            )}
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
            <h5>Add Your Location</h5>
            <i onClick={this.closeModal} className="fa fa-times"></i>
          </div>
          <div className="address-inputs">
            <Row>
              <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                <TextInput
                  name="name"
                  label="Name"
                  placeholder="Name"
                  value={fields.name}
                  onFieldChange={onFieldChange}
                />
              </Col>
              <Col lg={6} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                <TextInput
                  name="phone"
                  label="Phone"
                  placeholder="Phone"
                  value={fields.phone}
                  onFieldChange={onFieldChange}
                />
              </Col>
              <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
                <TextInput
                  name="address"
                  label="Address"
                  placeholder="Address"
                  value={fields.address}
                  onFieldChange={onFieldChange}
                  isTextArea
                />
              </Col>
              <Col lg={12} md={12} sm={12} style={{ marginBottom: "1rem" }}>
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
                  {countries.map(({ name }, id) => {
                    return (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Col>

              <Col lg={12} md={12} sm={12} className="locationButton">
                <button
                  className="submit-button"
                  onClick={() => {
                    this.addLocation();
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
  selectedLocation = (locationData) => {
    this.setState({
      selectedLocation: locationData,
    });
  };
  payment = (type, text, id) => {
    const { selectedPayment } = this.state;
    return (
      <div
        className="payment"
        onClick={() => {
          if (id === 2) {
            displayAlert("Sorry", "This Method Not In Service", "warning");
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

  /// calculate new price

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
  /// calculate total amount

  totalAmount = (books) => {
    const totalAmount = books?.reduce((acc, currentValue) => {
      let price;

      if (currentValue?.book?.campaign) {
        price = this.newPrice(
          currentValue?.book?.campaign,
          currentValue?.book?.price
        );
      } else {
        price = currentValue?.book?.price;
      }

      let TotalPrice = price * currentValue?.quantity;

      return TotalPrice + acc;
    }, 0);

    return totalAmount;
  };

  /// add location
  addLocation = async () => {
    const { fields } = this.state;
    const { success } = await locationService.addLocation(fields);

    if (!success) return;
    displayAlert("Done", "Location Added", "success").then(() => {
      this.getUserAddresses();
      this.setState({
        AddAddress: false,
        fields: {
          address: "",
          name: "",
          phone: "",
          country: "",
        },
      });
    });
  };

  // check out function

  checkout = async () => {
    const { selectedPayment, selectedLocation, books } = this.state;

    const { success } = await generalServices.checkout({
      payment_method: selectedPayment === 1 ? "cash" : "visa",
      books_amount: this.totalAmount(books),
      discount_amount: 0,
      tax_amount: 0,
      total_amount: this.totalAmount(books),
      delivery_amount: 0,
      user_location_id: selectedLocation.id,
    });

    if (!success) return;
    displayAlert("Done", "Order CheckOut Done Successfully", "success").then(
      () => {
        // this.getCartData();
        this.props.setUser({ cart_count: 0 });

        window.location.href = "/MyOrders";

        // this.setState({
        //     AddAddress: false,
        //     step: 1,
        //     fields: {
        //         address: "",
        //         name: "",
        //         phone: "",
        //         country: "",
        //     },
        // });
      }
    );
  };
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

export default connect(mapStateToProps, { setUser })(Cart);
