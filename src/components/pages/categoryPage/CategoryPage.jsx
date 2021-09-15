import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { generalServices } from "../../../services/GeneralServices";
import MainLoader from "../../blocks/MainLoader";
import Product from "../../blocks/Product";
import AgentOf from "../home/AgentOf";
import NewTitles from "../home/NewTitles";

class CategoryPage extends Component {
    state = {
        title: "",
        books: [],
        pageLoader: true,
    };

    componentDidMount() {
        this.getCategoryBooks();
        console.log(this.props.match.params.catType, "this.props.match.params.catType");
    }
    getCategoryBooks = async () => {
        if (+this.props.match.params.catType === 1) {
            const { success, data } = await generalServices.getClass(this.props.match.params.id);

            if (!success) return;

            this.setState({
                title: data.name,

                books: data?.books,
                pageLoader: false,
            });
        } else {
            const { success, data } = await generalServices.getSubject(this.props.match.params.id);
            if (!success) return;

            this.setState({
                title: data.name,
                books: data?.books,
                pageLoader: false,
            });
        }
    };

    render() {
        const { products, pageLoader, books, relatedBooks, title } = this.state;
        return pageLoader ? (
            <MainLoader />
        ) : (
            <div className="contact-us">
                <div className="page-label" />
                <div className="favorites-products">
                    <Container>
                        <h3 className="page-title">{this.props.match.params.key ?? title}</h3>

                        {books?.length > 0 ? (
                            <Row>
                                {books?.map((item) => {
                                    return (
                                        <Col sm={6} md={4} xl={3}>
                                            <Product item={item} reFetchData={() => this.getUserFavorite()} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        ) : (
                            <div className="form-box">
                                <div className="empty-img">
                                    <img src="/images/empty.png" alt="l" />
                                    <h6>Favorites Empty</h6>
                                </div>
                            </div>
                        )}
                    </Container>
                </div>

                <NewTitles title="Books you may like" data={relatedBooks} reFetchData={() => this.getUserFavorite()} />

                <AgentOf />
            </div>
        );
    }
}

export default CategoryPage;
