import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../blocks/Product";
import TextInput from "../../blocks/TextInput";
import AgentOf from "../home/AgentOf";
import NewTitles from "../home/NewTitles";

class Favorites extends Component {
    state = { products: [1, 2, 3, 4, 5, 6] };
    render() {
        const { products } = this.state;
        return (
            <div className="contact-us">
                <div className="page-label" />
                <div className="favorites-products">
                    <Container>
                        <h3 className="page-title">Favorites</h3>
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
                <NewTitles title="Books you may like" />

                <AgentOf />
            </div>
        );
    }
}

export default Favorites;
