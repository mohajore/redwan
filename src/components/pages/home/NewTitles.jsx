import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../blocks/Product";
function NewTitle({ title }) {
    const [products] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    return (
        <div className="new-title">
            <Container>
                <div className="section-title">
                    <h3>{title}</h3>
                </div>
                <Row>
                    {products.map(() => {
                        return (
                            <Col sm={6} md={4} xl={3}>
                                <Product />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default NewTitle;
