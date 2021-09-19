import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { profileService } from "../../../services/Profile";
import MainLoader from "../../blocks/MainLoader";
import Product from "../../blocks/Product";
import AgentOf from "../home/AgentOf";
import NewTitles from "../home/NewTitles";

class Favorites extends Component {
  state = {
    books: [],
    relatedBooks: [],
    pageLoader: true,
  };

  componentDidMount() {
    this.getUserFavorite();
  }
  getUserFavorite = async () => {
    const { success, data } = await profileService.getUserFavorite();

    if (!success) return;

    this.setState({
      books: data.books,
      relatedBooks: data.relatedBooks,
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
            <h3 className="page-title">my favorites</h3>
            {books?.length > 0 ? (
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

export default Favorites;
