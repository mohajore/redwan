import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { apiService } from "../../../services/ApiService";

function BigTitle({ data: { title, price, description, main_image, id } }) {
    return (
        <Container>
            <div className="big-title">
                <div className="big-title__contents">
                    <Row>
                        <Col md={3}>
                            <img src={main_image ? apiService.imageLink + main_image : "placeholder"} alt="k" className="big-title__book-img" />
                        </Col>
                        <Col md={9}>
                            <div className="big-title__contents__description">
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <button onClick={() => (window.location.href = "/productDetails/" + id)}>Buy Now</button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <img src="/images/Plant.png" alt="k" className="big-title__flower-img" />
            </div>
        </Container>
    );
}

export default BigTitle;
