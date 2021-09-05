import React, { Component } from "react";
import { Container, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

class Header extends Component {
    state = { menuOpen: false, otherHeader: false };
    componentDidMount() {
        if (window.location.pathname === "/") {
            this.setState({
                otherHeader: true,
            });
        }
    }
    render() {
        const { menuOpen, otherHeader } = this.state;
        return (
            <div className="header" style={otherHeader ? { position: "absolute" } : null}>
                <Container>
                    <div className="header-contents flex">
                        <a href="/">
                            <img src="/images/red.eng.log.svg" alt="k" />
                        </a>
                        <ul className="flex header-list">
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/">Teacher's Area</Link>
                            </li>
                            <li>
                                <Link to="/">Contact Us</Link>
                            </li>
                        </ul>
                        <div className="cart-fav flex">
                            <a href="/" className="single-cart">
                                <img src="/images/fi-rr-shopping-cart.svg" alt="k" />
                                <span>81</span>
                            </a>
                            <a href="/" className="single-cart">
                                <img src="/images/fi-rr-heart.svg" alt="k" />
                                <span>8</span>
                            </a>
                        </div>
                        <div className="user-auth-Buttons">
                            {/* <div className="auth-Buttons">
                                <Link to="/">LOGIN</Link> / <Link to="/">SIGNUP</Link>
                            </div> */}

                            <div className="user-dropdown flex">
                                <img src="/images/Ellipse 7.png" alt="l" />

                                <DropdownButton
                                    id="dropdown-basic-button"
                                    title={
                                        <div>
                                            <span>Welcome</span>
                                            <p>Omer Ali</p>
                                        </div>
                                    }
                                >
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>Another action</Dropdown.Item>
                                    <Dropdown.Item>Something else</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </div>
                        {/* push menu start  */}
                        <div className="mobile-push-menu">
                            <Menu isOpen={menuOpen} customBurgerIcon={<i className="fa fa-bars" />} customCrossIcon={<i className="fa fa-times croosIconMenu" />}>
                                <div className="sideMenu_logo">
                                    <Link to="/" onClick={() => this.closeMenu()}>
                                        <img src="/images/red.eng.log.svg" alt="logo" />
                                    </Link>
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
                                            <Link to="/" onClick={() => this.closeMenu()}>
                                                HOME
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/" onClick={() => this.closeMenu()}>
                                                ABOUT
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={() => this.closeMenu()}>
                                                Teacher's Area
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={() => this.closeMenu()}>
                                                Contact Us
                                            </Link>
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

export default Header;
