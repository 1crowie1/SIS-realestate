import React from 'react';
import './heatmap.css';

// Import Bootstrap
import { Button, Container, Row, Col } from "react-bootstrap";

const Legend = () => {
    return (
        <div className="legend">
            <Container>
                <Row>
                    <Col xs={6} md={6}>
                        <p1>Get Personalised Recommendations</p1>
                    </Col>

                    {/* <div className='heatmap-vertical-line'></div> */}

                    <Col xs={6} md={6}>
                        <Button className="blue-Button">Get Recommendations</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Legend;