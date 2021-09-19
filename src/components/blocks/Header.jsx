import React, { Component } from "react";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import { authService } from "../../services/AuthService";
import { setUser } from "../../redux/actions-reducers/user";
import { connect } from "react-redux";
import { apiService } from "../../services/ApiService";

class Header extends Component {
  state = { menuOpen: false, otherHeader: false, activeHeader: 0 };
  componentDidMount() {
    if (window.location.pathname === "/") {
      this.setState({
        otherHeader: true,
      });
    }
    // active header
    if (window.location.pathname.toLowerCase() === "/") {
      this.setState({
        activeHeader: 1,
      });
    }
    if (window.location.pathname.toLowerCase() === "/publicpage/about") {
      this.setState({
        activeHeader: 2,
      });
    }
    if (window.location.pathname.toLowerCase() === "/teachersarea") {
      this.setState({
        activeHeader: 3,
      });
    }
    if (window.location.pathname.toLowerCase() === "/contactus") {
      this.setState({
        activeHeader: 4,
      });
    }
  }
  get accessToken() {
    return window.localStorage.getItem("accessToken");
  }
  // active header
  // state = { };
  // componentDidMount() {

  // }
  // active header end

  searchBook;

  render() {
    const { menuOpen } = this.state;
    const { activeHeader } = this.state;
    return (
      <div
        className="header"
        // style={otherHeader ? { position: "absolute" } : null}
      >
        <Container>
          <div className="header-contents flex">
            <a href="/">
              <img src="/images/red.eng.log.svg" alt="k" />
            </a>
            <ul className="flex header-list">
              <li className={activeHeader === 1 ? "activeHeader" : ""}>
                <a href="/">Home</a>
              </li>
              <li className={activeHeader === 2 ? "activeHeader" : ""}>
                <a href="/PublicPage/about">About</a>
              </li>
              <li className={activeHeader === 3 ? "activeHeader" : ""}>
                <a href="/teachersarea">Teacher's Area</a>
              </li>
              <li className={activeHeader === 4 ? "activeHeader" : ""}>
                <a href="/ContactUs">Contact Us</a>
              </li>
            </ul>
            <div className="cart-fav flex">
              <a
                href={this.accessToken ? "/Cart" : "/login"}
                className="single-cart"
              >
                <img src="/images/fi-rr-shopping-cart.svg" alt="k" />
                {this.props.currentUser.cart_count > 0 && (
                  <span>{this.props.currentUser.cart_count}</span>
                )}
              </a>
              <a
                href={this.accessToken ? "/Favorites" : "/login"}
                className="single-cart"
              >
                <img src="/images/fi-rr-heart.svg" alt="k" />
                {this.props.currentUser.fav_count > 0 && (
                  <span>{this.props.currentUser.fav_count}</span>
                )}
              </a>
            </div>
            <div className="user-auth-Buttons">
              {this.accessToken ? (
                <div className="user-dropdown flex">
                  <img
                    src={
                      this.props.currentUser.image
                        ? apiService.imageLink + this.props.currentUser.image
                        : "/images/Group 510@3x.png"
                    }
                    alt="l"
                  />

                  <DropdownButton
                    id="dropdown-basic-button"
                    title={
                      <div>
                        <span>Welcome</span>
                        <p>{this.props.currentUser.name}</p>
                      </div>
                    }
                  >
                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/MyOrders">My Orders</Dropdown.Item>
                    <Dropdown.Item href="/MyLocations">
                      My Locations
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => authService.logout()}>
                      Logout
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              ) : (
                <div className="auth-Buttons">
                  <a href="/login">login</a> / <a href="/signUp">sign up</a>
                </div>
              )}
            </div>
            {/* push menu start  */}
            <div className="mobile-push-menu">
              <Menu
                isOpen={menuOpen}
                customBurgerIcon={<i className="fa fa-bars" />}
                customCrossIcon={<i className="fa fa-times croosIconMenu" />}
              >
                <div className="sideMenu_logo">
                  <a href="/" onClick={() => this.closeMenu()}>
                    <img src="/images/red.eng.log.svg" alt="logo" />
                  </a>
                </div>

                <div className="sideMenu_List">
                  <ul className="mb-0 mt-3">
                    <li>
                      <div className=" flex">
                        <img src="/images/Ellipse 7.png" alt="l" />
                        <span>Omar Ali</span>
                      </div>
                    </li>
                    <li>
                      <a href="/" onClick={() => this.closeMenu()}>
                        Home
                      </a>
                    </li>

                    <li>
                      <a href="/AboutPage" onClick={() => this.closeMenu()}>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/teachersarea" onClick={() => this.closeMenu()}>
                        Teacher's Area
                      </a>
                    </li>
                    <li>
                      <a href="/ContactUs" onClick={() => this.closeMenu()}>
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </Menu>
            </div>
            {/* push menu start  */}
          </div>
        </Container>
      </div>
    );
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(mapStateToProps, { setUser })(Header);
