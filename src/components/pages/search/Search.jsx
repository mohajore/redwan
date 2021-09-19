import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { generalServices } from "../../../services/GeneralServices";
import MainLoader from "../../blocks/MainLoader";
import Product from "../../blocks/Product";
import AgentOf from "../home/AgentOf";
import NewTitles from "../home/NewTitles";

class Search extends Component {
  state = {
    books: [],
    pageLoader: true,
  };

  componentDidMount() {
    this.searchBook();
  }
  searchBook = async () => {
    const { success, data } = await generalServices.searchBook(
      this.props.match.params.key
    );

    if (!success) return;

    this.setState({
      books: data,
      pageLoader: false,
    });
  };

  render() {
    const { pageLoader, books, relatedBooks } = this.state;
    return pageLoader ? (
      <MainLoader />
    ) : (
      <div className="contact-us">
        <div className="page-label" />
        <div className="favorites-products">
          <Container>
            <h3 className="page-title">{this.props.match.params.key}</h3>
            <Row>
              {books?.map((item) => {
                return (
                  <Col sm={6} md={4} xl={3}>
                    <Product
                      item={item}
                      reFetchData={() => this.getUserFavorite()}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

        <NewTitles
          title="Books you may like"
          data={relatedBooks}
          reFetchData={() => this.getUserFavorite()}
        />

        <AgentOf />
      </div>
    );
  }
}

export default Search;
