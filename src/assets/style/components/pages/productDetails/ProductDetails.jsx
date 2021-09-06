import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AgentOf from "../../../../../components/pages/home/AgentOf";
import NewTitle from "../../../../../components/pages/home/NewTitles";

class ProductDetails extends Component {
    render() {
        return (
            <div className="product-details">
                <NewTitle title="Related Book" />
                <AgentOf />
            </div>
        );
    }
}

export default ProductDetails;
