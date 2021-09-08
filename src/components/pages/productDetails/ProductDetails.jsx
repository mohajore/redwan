import React, { Component } from "react";
import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import AgentOf from "../../pages/home/AgentOf";
import NewTitle from "../../pages/home/NewTitles";
import "../../../assets/style/components/pages/productDetails/_productdetails.scss";
import { slide as Menu } from "react-burger-menu";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

//

class ProductDetails extends Component {
  state = {
    menuOpen: false,
    qty: 1,
    images: [
      {
        original: "/images/book1.png",
        thumbnail: "/images/book1.png",
      },
      {
        original: "/images/flower.png",
        thumbnail: "/images/flower.png",
      },
      {
        original: "/images/book@2x.png",
        thumbnail: "/images/book@2x.png",
      },
      {
        original: "/images/Group 5.png",
        thumbnail: "/images/Group 5.png",
      },
    ],
  };

  //

  // render main img gallery carousel
  _renderCustomControls(item) {
    return <img src={item.original} alt="l" />;
  }
  // end render main img gallery carousel

  // render Thumb img gallery carousel

  _renderCustomThumbs(item) {
    return <img src={item.thumbnail} alt="l" style={{ width: "100%" }} />;
  }
  // end render Thumb img gallery carousel
  //
  render() {
    const closeMenu = () => {
      this.setState({
        menuOpen: false,
        descriptionText: false,
      });
    };
    const { menuOpen, images, qty, descriptionText } = this.state;

    const readMoreText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,";
    return (
      <div className="product-details-main">
        <div className="search-block-container">
          <Container>
            <div className="search-block flex">
              {/* push categories menu start  */}
              <div className="category-push-menu">
                <Menu
                  isOpen={menuOpen}
                  customBurgerIcon={<i className="fa fa-bars" />}
                  customCrossIcon={<i className="fa fa-times croosIconMenu" />}
                >
                  <div className="sideMenu_logo">
                    <h2>Categories</h2>
                  </div>

                  <div className="sideMenu_List">
                    <ul className="mb-0 mt-3">
                      <li>
                        <a href="/" onClick={closeMenu}>
                          Story
                        </a>
                      </li>

                      <li>
                        <a href="/" onClick={closeMenu}>
                          Facts
                        </a>
                      </li>
                      <li>
                        <a href="/" onClick={closeMenu}>
                          English
                        </a>
                      </li>
                      <li>
                        <a href="/" onClick={closeMenu}>
                          Cartoon
                        </a>
                      </li>
                    </ul>
                  </div>
                </Menu>
              </div>
              {/* push categories menu start  */}
              <span>Categories</span>
              <InputGroup size="sm" className="">
                <InputGroup.Text id="inputGroup-sizing-sm">
                  <img src="/images/fi-rr-search.svg" alt="l" />
                </InputGroup.Text>
                <FormControl
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
                <InputGroup.Text id="inputGroup-sizing-sm">
                  Search
                </InputGroup.Text>
              </InputGroup>
              {/*  categories search bar menu End  */}
            </div>
          </Container>
        </div>

        <Container>
          {/* product-browser-detail Start */}
          <div className="product-browser-detail">
            <Row>
              <Col sm={12} lg={6}>
                {" "}
                <ImageGallery
                  items={images}
                  thumbnailPosition="bottom"
                  showNav={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showThumbnails={true}
                  renderItem={(images) => this._renderCustomControls(images)}
                  renderThumbInner={(images) =>
                    this._renderCustomThumbs(images)
                  }
                />
              </Col>
              <Col sm={7} lg={4}>
                <div className="product-browser-detail__info">
                  <h3>Compass Social Studies Curriculum workshop 01</h3>
                  <h5>ISBN : 9789957763701</h5>
                  <p>
                    {readMoreText.substr(
                      0,
                      descriptionText ? readMoreText.length : 300
                    )}
                    {readMoreText.length > 300 &&
                      (descriptionText ? (
                        <span
                          onClick={() =>
                            this.setState({ descriptionText: false })
                          }
                          className="read-more"
                        >
                          Show less
                        </span>
                      ) : (
                        <span
                          onClick={() =>
                            this.setState({ descriptionText: true })
                          }
                          className="read-more"
                        >
                          read more
                        </span>
                      ))}
                  </p>

                  <div className="product-browser-detail__info__buttons">
                    <div className="price-quantity big-sale__card--buttons flex">
                      <div>
                        <span>PRICE</span>
                        <span>350$</span>
                      </div>

                      {/* qty of product start   */}
                      <div className="qty flex">
                        {/* mins  button start  */}
                        <span
                          onClick={() => {
                            if (qty > 1) {
                              this.setState({
                                qty: qty - 1,
                              });
                            }
                          }}
                        >
                          <i className="fas fa-minus"></i>
                        </span>
                        {/* mins  button end  */}

                        {/* input (value) qty start  */}
                        <input type="tel" value={qty} />
                        {/* input (value) qty end  */}

                        {/* plus button start  */}
                        <span
                          onClick={() => {
                            this.setState({
                              qty: qty + 1,
                            });
                          }}
                        >
                          <i className="fas fa-plus"></i>
                        </span>
                        {/* plus button end  */}
                      </div>
                      {/* qty of product end  */}
                    </div>
                    <div className="add-to-cart-wish-list big-sale__card--buttons flex">
                      <button className="add-to-fav flex">
                        <img src="/images/fi-rr-heart2.svg" alt="/" />
                        <span>WISH LIST</span>
                      </button>
                      <button className="add-to-cart flex">
                        <img src="/images/fi-rr-shopping-cart2.svg" alt="/" />
                        <span>ADD TO CART</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={5} lg={2}>
                <div className="product-browser-detail__categories">
                  <div className="product-browser-detail__categories__titles">
                    <a href="/">Browse Book</a>
                    <a href="/">E-Book</a>
                    <a href="/">E- Learning </a>
                    <a href="/">Tetcher Rec</a>
                  </div>
                  <div className="product-browser-detail__categories_image">
                    <img src="images/Group 504.png" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* product-browser-detail End */}
        </Container>
        <div className="product-details">
          <NewTitle title="Related Book" />
          <AgentOf />
        </div>
      </div>
    );
  }
}
export default ProductDetails;
