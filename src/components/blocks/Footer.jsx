import React, { useEffect, useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";

import { apiService } from "../../services/ApiService";
import { generalServices } from "../../services/GeneralServices";
import MainLoader from "./MainLoader";

function Footer() {
  const [footerData, setFooterData] = useState({});
  const [pageLoader, setPageLoader] = useState(true);
  const [modal, setModal] = useState(false);
  const [branchData, setBranchData] = useState({});

  useEffect(() => {
    getFooterData();
  }, []);

  const getFooterData = async () => {
    const { success, data } = await generalServices.getFooterData();

    if (!success) return;

    setFooterData(data);
    setPageLoader(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  return pageLoader ? (
    <MainLoader />
  ) : (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footer__lift-side">
                <h3>agents and distributors</h3>
                <ul>
                  {footerData?.branches?.map((item, id) => {
                    return (
                      <li
                        key={id}
                        onClick={() => {
                          setBranchData(item);

                          setModal(true);
                        }}
                      >
                        <img src={apiService.imageLink + item.flag} alt="k" />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer__mid">
                <h3>contact us</h3>
                <ul>
                  <li>
                    <p>Email</p>
                    <span>{footerData.defaultBranch.email}</span>
                  </li>
                  <li>
                    <span>{footerData.defaultBranch.address}</span>
                  </li>
                  <li>
                    <p>Phone</p>
                    <span>{footerData.defaultBranch.phone}</span>
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
                  {footerData?.pages?.map(({ title, machine_name, id }) => {
                    return (
                      <li key={id}>
                        <a href={`/PublicPage/${machine_name}`}>{title}</a>
                      </li>
                    );
                  })}
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
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-instagram"></i>{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-twitter"></i>{" "}
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      {/* add/edit address modal */}
      <Modal
        show={modal}
        width="600"
        effect="fadeInUp"
        onHide={closeModal}
        className="location-modal footer__branch-data-modal"
      >
        <div className="modal-title flex">
          <h5>Branch Information</h5>
          <i onClick={closeModal} className="fa fa-times"></i>
        </div>
        <ul>
          <li>
            <span>Country : </span>
            <span>{branchData.name}</span>
          </li>

          <li>
            <span>Email : </span>
            <span>{branchData.email}</span>
          </li>

          <li>
            <span>Phone : </span>
            <span>{branchData.phone}</span>
          </li>

          <li>
            <span>Address : </span>
            <span>{branchData.address}</span>
          </li>
        </ul>
      </Modal>
      {/* end add/edit address modal */}
    </>
  );
}

export default Footer;
