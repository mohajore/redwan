import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../assets/style/components/pages/home/_theBlog.scss";
import { apiService } from "../../../services/ApiService";

function TheBlog({ data }) {
    return (
        <div className="The-blog">
            <img className="the-blog__background-image" src="images/box.png" />
            <Container>
                <div className="section-title">
                    <h3>The Blog</h3>
                </div>
                <Row>
                    {data.map(({ title, text, image_full, id }) => {
                        return (
                            <Col className="" lg={6} md={4} sm={12}>
                                <div className="the-blog__section">
                                    <div className="the-blog__image-container">
                                        <img className="the-blog__left-section__image" src={image_full ? apiService.imageLink + image_full : "placeholder"} />
                                        <p className="the-blog__section__date"></p>

                                        <h4 className="The-blog__section__title The-blog__section__title-big-one">{title}</h4>
                                        <p className="The-blog__section__description">{text}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}

                    {/* <Col className="" lg={3} md={4} sm={6}>
                        <div className="the-blog__section">
                            <div className="the-blog__image-container">
                                <img className="the-blog__left-section__image" src="images/books2.png" />
                                <p className="the-blog__section__date">28.07.2021</p>

                                <h4 className="The-blog__section__title">Blog Heading Line</h4>
                                <p className="The-blog__section__description">In 2011, AERO (American Education Reaches Out) developed the Standardds & Benchmarks of the Social Studies.</p>
                            </div>
                        </div>
                    </Col>

                    <Col className="" lg={3} md={4} sm={6}>
                        <div className="the-blog__section">
                            <div className="the-blog__image-container">
                                <img className="the-blog__left-section__image" src="images/books2.png" />
                                <p className="the-blog__section__date">28.07.2021</p>

                                <h4 className="The-blog__section__title">Blog Heading Line</h4>
                                <p className="The-blog__section__description">In 2011, AERO (American Education Reaches Out) developed the Standardds & Benchmarks of the Social Studies.</p>
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default TheBlog;
