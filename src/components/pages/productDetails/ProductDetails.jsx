import React, { Component } from "react";
import { Col, Container, Row, InputGroup, FormControl } from "react-bootstrap";
import AgentOf from "../../pages/home/AgentOf";
import NewTitle from "../../pages/home/NewTitles";
import "../../../assets/style/components/pages/productDetails/_productdetails.scss";
import { slide as Menu } from "react-burger-menu";
import { setUser } from "../../../redux/actions-reducers/user";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { bookService } from "../../../services/bookService";
import MainLoader from "../../blocks/MainLoader";
import { apiService } from "../../../services/ApiService";
import { generalServices } from "../../../services/GeneralServices";
import { connect } from "react-redux";

//

class ProductDetails extends Component {
  state = {
    menuOpen: false,
    qty: 1,
    key: "",
    relatedBooks: [],
    book: {},
    images: [],
    subjects: [],
    classes: [],
    pageLoader: true,
  };

  componentDidMount() {
    Promise.all([this.getBookData(), this.getClasses(), this.getSubjects()]);
    this.getBookData();
  }

  getBookData = async () => {
    const { success, data } = await bookService.getBookData(
      this.props.match.params.id
    );

    if (!success) return;

    let images = data?.book?.book_images.map(({ image_full, image_thumb }) => ({
      original: apiService.imageLink + image_full,
      thumbnail: apiService.imageLink + image_thumb,
    }));

    // images.push({
    //     original: apiService.imageLink + data.book?.main_image,
    //     thumbnail: apiService.imageLink + data.book?.main_image_thumb,
    // });

    this.setState({
      book: data?.book,
      relatedBooks: data?.relatedBooks,
      pageLoader: false,
      images: images,
    });
  };

  getClasses = async () => {
    const { success, data } = await generalServices.getClasses();

    if (!success) return;
    this.setState({
      classes: data,
    });
  };

  getSubjects = async () => {
    const { success, data } = await generalServices.getSubjects();

    if (!success) return;

    this.setState({
      subjects: data,
      pageLoader: false,
    });
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

    const {
      menuOpen,
      images,
      qty,
      descriptionText,
      book,
      relatedBooks,
      pageLoader,
      key,
      classes,
      subjects,
    } = this.state;

    // const readMoreText =
    //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book?. It has survived not only five centuries, but also the leap into electronic typesetting,";
    return pageLoader ? (
      <MainLoader />
    ) : (
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
                      <h3>Classes</h3>
                      {classes.map(({ name, id }) => {
                        return (
                          <li>
                            <a
                              href={`/CategoryPage/1/${id}`}
                              onClick={closeMenu}
                            >
                              {name}
                            </a>
                          </li>
                        );
                      })}

                      <h3>Subjects</h3>

                      {subjects.map(({ name, id }) => {
                        return (
                          <li>
                            <a
                              href={`/CategoryPage/2/${id}`}
                              onClick={closeMenu}
                            >
                              {name}
                            </a>
                          </li>
                        );
                      })}
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
                  onChange={(e) => {
                    this.setState({
                      key: e.target.value,
                    });
                  }}
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
                <InputGroup.Text
                  id="inputGroup-sizing-sm"
                  onClick={() => {
                    if (key === "") {
                    } else {
                      this.Search(key);
                    }
                  }}
                >
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
                  <h3>{book?.title}</h3>
                  <h5>ISBN : {book?.book_code}</h5>
                  <p>
                    {book?.description?.substr(
                      0,
                      descriptionText ? book?.description.length : 300
                    )}

                    {book?.description?.length > 300 &&
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
                        <span className="price-quantity__price-span">
                          price
                        </span>
                        <span className="new-price">
                          {book?.campaign
                            ? this.newPrice(book?.campaign, book?.price)
                            : book?.price}
                          $
                        </span>
                        <span className="old-price">{book?.price}$</span>
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
                            if (qty < book?.quantity) {
                              this.setState({
                                qty: qty + 1,
                              });
                            }
                          }}
                        >
                          <i className="fas fa-plus"></i>
                        </span>
                        {/* plus button end  */}
                      </div>
                      {/* qty of product end  */}
                    </div>
                    <div className="add-to-cart-wish-list big-sale__card--buttons flex">
                      <button
                        className={
                          book?.is_fav
                            ? "add-to-fav--active add-to-fav flex"
                            : "add-to-fav flex"
                        }
                        onClick={() =>
                          this.addRemoveFavorites(book?.id, book?.is_fav)
                        }
                      >
                        <img src="/images/fi-rr-heart2.svg" alt="/" />
                        <span>wish list</span>
                      </button>
                      <button
                        className={
                          book?.in_cart
                            ? "add-to-cart added-to-cart flex"
                            : "add-to-cart flex"
                        }
                        onClick={() => {
                          if (book?.in_cart) {
                            this.deleteBooksFromCart(book?.id);
                          } else {
                            this.addBooksToCart(book?.id, qty);
                          }
                        }}
                      >
                        <img src="/images/Group 511.svg" alt="/" />
                        <span>add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={5} lg={2}>
                <div className="product-browser-detail__categories">
                  {book?.book_menu?.length > 0 && (
                    <div className="product-browser-detail__categories__titles">
                      {book?.book_menu.map(({ menu_name, link }) => {
                        return (
                          <a target="_blank" rel="noreferrer" href={link}>
                            {menu_name}
                          </a>
                        );
                      })}
                    </div>
                  )}
                  <div className="product-browser-detail__categories_image">
                    <img src="/images/Group 504.png" alt="1" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* product-browser-detail End */}
        </Container>
        <div className="product-details">
          <NewTitle
            title="Related Book"
            data={relatedBooks}
            reFetchData={() => this.getBookData()}
          />
          <AgentOf />
        </div>
      </div>
    );
  }

  // calc new price
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
  // calc new price end

  /// add remove favorites
  addRemoveFavorites = async (id, is_fav) => {
    const { success } = await generalServices.addOrRemoveFavourite(id);
    if (!success) return;
    this.props.setUser({
      fav_count: is_fav
        ? this.props.currentUser.fav_count - 1
        : this.props.currentUser.fav_count + 1,
    });

    this.getBookData();
  };

  /// add remove favorites end

  // add Books To Cart
  addBooksToCart = async (id, qty) => {
    const { success } = await generalServices.addToCart(id, qty);
    if (!success) return;
    this.props.setUser({ cart_count: this.props.currentUser.cart_count + 1 });

    this.getBookData();
  };
  // add Books To Cart end

  //  delete Books From Cart
  deleteBooksFromCart = async (id) => {
    const { success } = await generalServices.deleteBooksFromCart(id);
    if (!success) return;
    this.props.setUser({ cart_count: this.props.currentUser.cart_count - 1 });

    this.getBookData();
  };
  //  delete Books From Cart end

  //  Search end

  Search = (key) => {
    if (key.includes("%")) {
      window.location.href = "/Search/" + key.replace("%", "%25");
    } else {
      window.location.href = "/Search/" + key;
    }
  };

  //  Search end
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

export default connect(mapStateToProps, { setUser })(ProductDetails);
