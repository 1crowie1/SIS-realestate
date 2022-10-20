import React from 'react';
import './heatmap.css';

// Import Bootstrap
import { Button, Container, Row, Col } from "react-bootstrap";

const Legend = () => {
    return (

        <div className = "legend">
            
            {/* TOP4SUBURBS */}
            <Container>
        <div className="divi">
            <div className="div-3">
                <div className="div-4">
                    <div className="suburb-1">
                            <p className = "text-1">MosMan</p>
                            <div className= "sub-flex">
                                <h1>1000</h1>
                                <div className="graph">
                                GRAPH
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
            <div className="div-4">
                <div className="suburb-2">
                    <p className = "text-1">MosMan</p>
                    <div className= "sub-flex">
                    <h1>1000</h1>
                    <div className="graph"> GRAPH</div>
                    </div>
                </div>
            </div>
            <div className="div-4">
                <div className="suburb-3">
                    <p className = "text-1">MosMan</p>
                    <div className= "sub-flex">
                    <h1>1000</h1>
                    <div className="graph"> GRAPH</div>
                    </div>
                </div>
            </div>
            <div className="div-4">
                <div className="suburb-4">
                    <p className = "text-1">MosMan</p>
                    <div className= "sub-flex">
                    <h1>1000</h1>
                    <div className="graph"> GRAPH</div>
                    </div>
                </div>
            </div>
        </div>
        
        </Container>
            {/* TOP4SUBURBS */}
            <div className ='bottomleft'>
                
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
        </div>
    );
}
export default Legend;