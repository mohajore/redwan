import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function BigTitle() {
    return (
        <Container>
            <div className="big-title">
                <div className="big-title__contents">
                    <Row>
                        <Col md={3}>
                            <img src="/images/book@2x.png" alt="k" className="big-title__book-img" />
                        </Col>
                        <Col md={9}>
                            <div className="big-title__contents__description">
                                <h3>Big Title</h3>
                                <p>We are taking the lead among the education companies in the Middle East in the fields of developing print & digital and online solutions that support teachers.</p>
                                <button>Buy Now</button>
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
