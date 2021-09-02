import React, { useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => {
        setMenuOpen(false);
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="landing-page">
            <img src="/images/Group 506.png" alt="l" className="img-rectangle" />

            <Container>
                <Row>
                    {/* book img start  */}
                    <Col md={6}>
                        <div className="landing-page__main-img">
                            <img src="/images/Group 5033.png" alt="l" />
                        </div>
                    </Col>
                    {/* book img end  */}

                    {/* landing contents start  */}
                    <Col md={6} className="m-auto">
                        <div className="landing-contents">
                            <h2>
                                COMPASS SOCIAL <br /> STUDENT
                            </h2>
                            <h3>CURRCICULUM</h3>

                            <hr />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                            <button>Buy Now</button>
                        </div>
                    </Col>
                    {/* landing contents end  */}
                </Row>

                {/* search block start  */}
                <div className="search-block flex">
                    {/* push categories menu start  */}
                    <div className="category-push-menu">
                        <Menu isOpen={menuOpen} customBurgerIcon={<i className="fa fa-bars" />} customCrossIcon={<i className="fa fa-times croosIconMenu" />}>
                            <div className="sideMenu_logo">
                                <h2>Categories</h2>
                            </div>

                            <div className="sideMenu_List">
                                <ul className="mb-0 mt-3">
                                    <li>
                                        <Link to="/" onClick={closeMenu}>
                                            Story
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/" onClick={closeMenu}>
                                            Facts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={closeMenu}>
                                            English
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={closeMenu}>
                                            Cartoon
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Menu>
                    </div>
                    {/* push categories menu start  */}
                    <span>Categories</span>
                    <InputGroup size="sm" className="">
                        <InputGroup.Text id="inputGroup-sizing-sm">
                            <img src="/images/fi-rr-search.svg" />
                        </InputGroup.Text>
                        <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                        <InputGroup.Text id="inputGroup-sizing-sm">Search</InputGroup.Text>
                    </InputGroup>
                </div>
                {/* search block end  */}
            </Container>
            <img src="/images/Vase.png" alt="l" className="img-Vase" />
        </div>
    );
}

export default LandingPage;
