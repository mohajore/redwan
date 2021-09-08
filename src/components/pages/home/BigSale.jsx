import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function BigSale() {
  return (
    <div className="big-sale">
      <Container>
        <div className="section-title">
          <h3>Big Sale</h3>
        </div>
        <Row>
          {/* single card start  */}
          <Col md={6}>
            <div className="big-sale__card">
              <div className="big-sale__card__header">
                <img src="/images/Group 5.png" alt="/" />
                <span>280$</span>
              </div>
              <div className="big-sale__card__contents">
                <h3>Compass Social Studies Curriculum</h3>
                <p>
                  In 2011, AERO (American Education Reaches Out) developed the
                  Standardds & Benchmarks of the Social Studies.
                </p>
                <div className="big-sale__card--buttons flex">
                  <button className="add-to-cart flex">
                    <img src="/images/fi-rr-shopping-cart2.svg" alt="/" />
                    <span>Add to cart</span>
                  </button>

                  <button className="add-to-fav flex">
                    <img src="/images/fi-rr-heart2.svg" alt="/" />
                    <span>wish list</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
          {/* single card end  */}
          {/* single card start  */}
          <Col md={6}>
            <div className="big-sale__card">
              <div className="big-sale__card__header">
                <img src="/images/Group 5.png" alt="/" />
                <span>280$</span>
              </div>
              <div className="big-sale__card__contents">
                <h3>Compass Social Studies Curriculum</h3>
                <p>
                  In 2011, AERO (American Education Reaches Out) developed the
                  Standardds & Benchmarks of the Social Studies.
                </p>
                <div className="big-sale__card--buttons flex">
                  <button className="add-to-cart flex">
                    <img src="/images/fi-rr-shopping-cart2.svg" alt="/" />
                    <span>add to cart</span>
                  </button>

                  <button className="add-to-fav flex">
                    <img src="/images/fi-rr-heart2.svg" alt="/" />
                    <span>wish list</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
          {/* single card end  */}
        </Row>
      </Container>
    </div>
  );
}

export default BigSale;
