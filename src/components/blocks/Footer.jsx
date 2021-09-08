import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footer__lift-side">
                <h3>agents and distributors</h3>
                <ul>
                  <li>
                    <img src="/images/JORDAN.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/BAHRAIN.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/EGYPT.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/IRAQ.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/KUWAIT.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/LEBANON.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/LIBYA.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/MOROCCO.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/Oman.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/QATAR.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/SAUDI ARABIA.png" alt="k" />
                  </li>
                  <li>
                    <img src="/images/UAE.png" alt="k" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer__mid">
                <h3>contact us</h3>
                <ul>
                  <li>
                    <p>Email</p>
                    <span>info@edwanpublisher.com</span>
                  </li>
                  <li>
                    <span>Amman - Jordan, Hussian King Street - Alabdali</span>
                  </li>
                  <li>
                    <p>Phone</p>
                    <span>+962 6 465 36 71</span>
                    <span>+962 6 461 64 36</span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer__mid">
                <h3>quick links</h3>
                <ul>
                  <li>
                    <a href="/">home</a>
                  </li>
                  <li>
                    <a href="/aboutpage">about</a>
                  </li>
                  <li>
                    <a href="teachersarea">teacher's area</a>
                  </li>
                </ul>
              </div>
            </Col>{" "}
          </Row>
        </Container>
      </div>
      <div className="copy-write">
        <Container>
          <div className=" flex">
            <p>© redwan publisher 2021 . All Rights Reserved</p>
            <ul>
              <li>
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-instagram"></i>{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-twitter"></i>{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <i class="fab fa-linkedin-in"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
}
export default Footer;
