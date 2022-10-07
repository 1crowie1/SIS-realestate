// import React from 'react';
import React, { useState } from "react";
import Results from '../results/results';
import getRecommendations from '../../util/RealestateUtil';

import { Button, Container, Row, Col, Form } from "react-bootstrap";

function Recommendations(props) {
    const results = [];

    const [recommendations, setRecommendations] = useState('r');

    return (
        <div>
             <Container>
                <h2>Get Personalised Recommendations</h2>

                <Row>
                    {/* <p1>Personalised Preferences</p1> */}
                    <Col xs={6} md={6}>
                        <Row> 
                            {/* Home Location Preferences: Dropdown Multi-Select */} 
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Home Location Preferences" />
                                    </Form.Group>
                                </Form>
                            </Col>
                            
                            {/* Land Size */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Land Size" />
                                    </Form.Group>
                                </Form>
                            </Col>

                        </Row>
                        <Row>
                            {/* Preference Area */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Preference Area" />
                                    </Form.Group>
                                </Form>
                            </Col>

                            {/* Preferences */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Bedrooms" />
                                    </Form.Group>
                                </Form>
                            </Col>

                        </Row>
                        <Row>
                            {/* Home Price Preferences */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Home Price Preferences" />
                                    </Form.Group>
                                </Form>
                            </Col>

                            {/* Bedrooms */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Bathrooms" />
                                    </Form.Group>
                                </Form>
                            </Col>

                        
                        </Row>
                        <Row>
                            {/* Work Location Preferences */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Work Location Preferences" />
                                    </Form.Group>
                                </Form>
                            </Col>

                            {/* Increase Scope */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Increase Scope" />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Col>

                    {/* <p1>Additional Preferences</p1> */}
                    <Col xs={6} md={6}>
                        <Row>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check 
                                                type={type}
                                                id={`default-${type}`}
                                                label={`default ${type}`}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} md={4}>
                        <Row>
                            <Button className="blue-Button" onClick={ () => getRecommendations(setRecommendations)}>Get Recommendation</Button>
                        </Row>
                    </Col>

                    <Col xs={6} md={4}>
                        <p1>OR</p1>
                    </Col>

                    <Col xs={6} md={4}>
                        <Row>
                            <Button className="blue-Button" onClick={ () => getRecommendations(setRecommendations)}>I'm Feeling Lucky</Button>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <div>
                {/* Get Results */}
                <Container>
                    <Results result={results}/>
                </Container>
            </div>
        </div>
        
    );
}
export default Recommendations;