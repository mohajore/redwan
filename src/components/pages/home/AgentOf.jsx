import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { apiService } from "../../../services/ApiService";
import { generalServices } from "../../../services/GeneralServices";

function AgentOf() {
    const [partners, setPartners] = useState([]);

    const getPartners = async () => {
        const { data } = await generalServices.getPartners();

        setPartners(data);
    };

    useEffect(() => {
        getPartners();
    }, []);

    return (
        <div className="agent-of">
            <Container>
                <h3>agent of</h3>
                <Row>
                    {partners?.map(({ logo }) => {
                        return (
                            <Col sm={4}>
                                <div className="agent-of__item">
                                    <img src={apiService.imageLink + logo} alt="l" />
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default AgentOf;
