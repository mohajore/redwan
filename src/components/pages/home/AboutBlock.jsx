import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function AboutBlock() {
    return (
        <div className="about-block">
            <Container>
                <div className="about-block__contents">
                    <Row>
                        <Col lg={8}>
                            <h3>ABOUT REDWAN</h3>
                            <p>We are taking the lead among the education companies in the Middle East in the fields of developing print & digital and online solutions that support teachers. We are specialized in four subdivisions of the educational market – Kindergartens, English Learning &Teaching, School Curriculum and Arabic Higher Education Books.</p>
                        </Col>
                        <Col md={4}>
                            <img src="/images/Flower.png" alt="k" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default AboutBlock;
