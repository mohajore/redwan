import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { generalServices } from "../../../services/GeneralServices";
function LandingPage({ data }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [pageLoader, setPageLoader] = useState(false);
    const [subjects, setSubjects] = useState([]);
    const [classes, setClasses] = useState([]);
    const closeMenu = () => {
        setMenuOpen(false);
    };
    const [key, setKey] = useState("");

    useEffect(() => {
        Promise.all([getClasses(), getSubjects()]);
    }, []);

    const getClasses = async () => {
        const { success, data } = await generalServices.getClasses();

        if (!success) return;
        setClasses(data);
    };

    const getSubjects = async () => {
        const { success, data } = await generalServices.getSubjects();

        if (!success) return;
        setSubjects(data);
        setPageLoader(false);
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
                                {data.title}
                                {/* COMPASS <br /> SOCIAL STUDENT */}
                            </h2>
                            <h3>CURRCICULUM</h3>

                            <hr />
                            <p>{data.description}</p>

                            <button onClick={() => (window.location.href = "/productDetails/" + data.id)}>Buy Now</button>
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
                                    <h3>Classes</h3>
                                    {classes.map(({ name, id }) => {
                                        return (
                                            <li>
                                                <Link to={`/CategoryPage/1/${id}`} onClick={closeMenu}>
                                                    {name}
                                                </Link>
                                            </li>
                                        );
                                    })}

                                    <h3>Subjects</h3>

                                    {subjects.map(({ name, id }) => {
                                        return (
                                            <li>
                                                <Link to={`/CategoryPage/2/${id}`} onClick={closeMenu}>
                                                    {name}
                                                </Link>
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
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            onChange={(key) => {
                                setKey(key.target.value);
                            }}
                        />
                        <InputGroup.Text
                            id="inputGroup-sizing-sm"
                            onClick={() => {
                                if (key === "") {
                                } else {
                                    Search(key);
                                }
                            }}
                        >
                            Search
                        </InputGroup.Text>
                    </InputGroup>
                </div>
                {/* search block end  */}
            </Container>
            <img src="/images/Vase.png" alt="l" className="img-Vase" />
        </div>
    );
}

const Search = (key) => {
    if (key.includes("%")) {
        window.location.href = "/Search/" + key.replace("%", "%25");
    } else {
        window.location.href = "/Search/" + key;
    }
};

export default LandingPage;
