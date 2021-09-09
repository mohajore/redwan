import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../blocks/Product";
function NewTitle({ title, data }) {
    const [products] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    return (
        <div className="new-title">
            {console.log(data, "kkkk")}
            <Container>
                <div className="section-title">
                    <h3>{title}</h3>
                </div>
                <Row>
                    {data.map((item, index) => {
                        return (
                            <Col key={index} sm={6} md={4} xl={3}>
                                <Product item={item} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default NewTitle;
