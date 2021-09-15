import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../blocks/Product";
function NewTitle({ title, data, reFetchData }) {
    return (
        <div className="new-title">
            {data?.length > 0 && (
                <Container>
                    <div className="section-title">
                        <h3>{title}</h3>
                    </div>
                    <Row>
                        {data?.map((item, index) => {
                            return (
                                <Col key={index} sm={6} md={4} xl={3}>
                                    <Product item={item} reFetchData={reFetchData} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            )}
        </div>
    );
}

export default NewTitle;
