import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function AgentOf() {
    const [items] = useState(["4-6-1", "4-6-2", "SadlierLogo"]);
    return (
        <div className="agent-of">
            <Container>
                <h3>AGENT OF</h3>
                <Row>
                    {items.map((item) => {
                        return (
                            <Col sm={4}>
                                <div className="agent-of__item">
                                    <img src={`/images/${item}.png`} alt="l" />
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
