
import './recommendations.css';
import React, { useState, useEffect } from 'react';
import Results from '../results/results';
// Bootstrap & Semantic Ui
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Dropdown } from 'semantic-ui-react';
// Material UI
import { Box, Slider } from '@mui/material';

// Import Util
import RealestateUtil from "../../util/RealestateUtil";
const realestateUtil = new RealestateUtil();

function Recommendations(props) {  
    const [results, setResults] = useState(null);
    const [luckyResults, setLuckyResults] = useState(null);
    const [clusterResults, setClusterResults] = useState(null);
    // const [recommendations, setRecommendations] = useState('r');

    const [price, setPrice] = useState(null); //[0, 1000000]
    const [bedrooms, setBedrooms] = useState(null); //[0, 10]

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };
    const handleBedroomsChange = (event, newValue) => {
        setBedrooms(newValue);
    };

    function CalcCluster() {
        // Get All Listings - Variable: results
        realestateUtil.getAllListings(setResults);

        // Get Preferences - Variables: price, bedrooms
        console.log(results);
        console.log('Real Estate Preferences: ' + price + " | " + bedrooms);
    
        // Algorithm
        // WRITE YOUR SHIT TO GET OUTPUT: clusterNum
        var clusterNum = 0;

        // Get Cluster - Variable: clusterResults
        realestateUtil.getCluster(clusterNum, setClusterResults)

        return clusterResults;  
    }

    function feelingLucky() {
        realestateUtil.getAllListings(setLuckyResults);

        console.log(luckyResults);

        return 'Feeling Lucky Results';
    }

    // Suburbs List
    const suburb_options = [
        { key: 'design', text: 'Bankstown', value: 'bankstown' },
        { key: 'design', text: 'Blacktown', value: 'blacktown' },
        { key: 'design', text: 'Bondi Junction', value: 'bondi_junction' },
        { key: 'design', text: 'Campbelltown', value: 'campbelltown' },
        { key: 'design', text: 'Chatswood', value: 'chatswood' },
        { key: 'design', text: 'Cronulla', value: 'cronulla' },
        { key: 'design', text: 'Hornsby', value: 'hornsby' },
        { key: 'design', text: 'Penrith', value: 'penrith' },
        { key: 'design', text: 'Parramatta', value: 'parramatta' },
        { key: 'design', text: 'Prestons', value: 'prestons' },
        { key: 'design', text: 'Liverpool', value: 'liverpool' },
        { key: 'design', text: 'Newcastle', value: 'newcastle' },
        { key: 'design', text: 'North Sydney', value: 'north_sydney' },
        { key: 'design', text: 'Sutherland', value: 'sutherland' },
        { key: 'design', text: 'Sydney', value: 'sydney' },
        { key: 'design', text: 'Ultimo', value: 'ultimo' },
        { key: 'design', text: 'Wentworthville', value: 'wentworthville' },
        { key: 'design', text: 'Wollongong', value: 'wollongong' },
        { key: 'design', text: 'Wollstonecraft', value: 'wollstonecraft' },
        { key: 'design', text: 'Wynyard', value: 'wynyard' },
        { key: 'design', text: 'Zetland', value: 'zetland' },
    ];

    return (
        <div className='recommendations'>   
            <Container>
            {/* Recommendation Titles */}
            <Row>   
                <div className='recommendations-title'>
                    <img src={require('../.././images/2.png')} alt="Home Finder" width="70" height="70"></img>
                    <h2>Get Personalised Recommendations</h2>
                </div>
            </Row>

            <Row class='preferences'>
                {/* <p1>Personalised Preferences</p1> */}
                <Col xs={6} md={6} className="personalised-prefences">
                    <Container>
                        <Row> 
                            {/* Home Location Preferences: Dropdown Multi-Select */} 
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Home Location Preference</Form.Label>
                                        <Dropdown placeholder='Suburbs List' fluid multiple selection options={suburb_options} />
                                    </Form.Group>
                                </Form>
                            </Col>
                            
                            {/* Land Size */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Land Size (m^2) </Form.Label>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                aria-label="Temperature"
                                                defaultValue={30}
                                                valueLabelDisplay="auto"
                                                step={50}
                                                marks
                                                min={10}
                                                max={600}
                                            />
                                        </Box>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            {/* Preference Area */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Preference Area</Form.Label>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                aria-label="Preference Area"
                                                defaultValue={30}
                                                valueLabelDisplay="auto"
                                                step={5}
                                                marks
                                                min={10}
                                                max={1000}
                                            />
                                        </Box>
                                    </Form.Group>
                                </Form>
                            </Col>

                            {/* Bedrooms */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Bedrooms</Form.Label>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                aria-label="Bedrooms"
                                                defaultValue={0}
                                                valueLabelDisplay="auto"
                                                step={1}
                                                marks
                                                min={0}
                                                max={10}
                                                onChange={handleBedroomsChange}
                                            />
                                        </Box>
                                    </Form.Group>
                                </Form>
                            </Col>

                        </Row>
                        <Row>
                            {/* Price */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Price (,000s) AUD</Form.Label>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                aria-label="Bedrooms"
                                                defaultValue={0}
                                                valueLabelDisplay="auto"
                                                step={50000}
                                                marks
                                                min={0}
                                                max={10000000}
                                                onChange={handlePriceChange}
                                            />
                                        </Box>
                                    </Form.Group>
                                </Form>
                            </Col>

                            {/* Bathrooms */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Bathrooms</Form.Label>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                aria-label="Bathrooms"
                                                defaultValue={0}
                                                valueLabelDisplay="auto"
                                                step={1}
                                                marks
                                                min={0}
                                                max={10}
                                            />
                                        </Box>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            {/* Work Location Preferences */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Work Location Preference</Form.Label>
                                        <Dropdown placeholder='Suburbs List' fluid multiple selection options={suburb_options} />
                                    </Form.Group>
                                </Form>
                            </Col>

                            {/* Increase Scope */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Scope</Form.Label>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                aria-label="Scope"
                                                defaultValue={0}
                                                valueLabelDisplay="auto"
                                                step={1}
                                                marks
                                                min={0}
                                                max={10}
                                            />
                                        </Box>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Col>

                {/* <p1>Additional Preferences</p1> */}
                <Col xs={6} md={6} className="additional-preferences">
                    <Container>
                        <Row>
                            <Col xs={6} md={6}>
                                {/* Bootstrap Radio: Public Transport */}
                                <Form>
                                    <div key={`default-radio`} className="mb-3">
                                        <Form.Check 
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={`Public Transport`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                {/* Bootstrap Radio: Amazing View */}
                                <Form>
                                    <div key={`default-radio`} className="mb-3">
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={`Amazing View`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                {/* Bootstrap Radio: Close to School */}
                                <Form>
                                    <div key={`default-radio`} className="mb-3">
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={`Close to School`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                {/* Bootstrap Radio: Close to Shops */}
                                <Form>
                                    <div key={`default-radio`} className="mb-3">
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={`Close to Shops`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                {/* Bootstrap Radio: Close to Park */}
                                <Form>
                                    <div key={`default-radio`} className="mb-3">
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={`Close to Park`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                {/* Bootstrap Radio: Close to Hospital */}
                                <Form>
                                    <div key={`default-radio`} className="mb-3">
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={`Close to Hospital`}
                                        />  
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                {/* Bootstrap Radio: Close to Beach */}
                                <Form>
                                    <div key={`default-radio`} className="mb-3">
                                        <Form.Check
                                            type={'radio'}
                                            id={`default-radio`}
                                            label={`Close to Beach`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                
                            </Col>
                            <Col xs={6} md={6}>
                                
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={4}>
                    <Row>
                        {/* <Button className="blue-Button" onClick={ () => getRecommendations(setRecommendations)}>Get Recommendation</Button> */}
                        <Button className="blue-Button" onClick={ () => CalcCluster() }>Get Recommendation</Button>
                    </Row>
                </Col>

                <Col xs={6} md={4}>
                    <p1>OR</p1>
                </Col>

                <Col xs={6} md={4}>
                    <Row>
                        {/* <Button className="blue-Button" onClick={ () => getRecommendations(setRecommendations)}>I'm Feeling Lucky</Button> */}
                        <Button className="blue-Button" onClick={ () => feelingLucky() }>I'm Feeling Lucky</Button>
                    </Row>
                </Col>
            </Row>
        </Container>

        {/* Get Results */}
        <Container>
            <Results result={results}/>
        </Container>
        </div>
    );
}
export default Recommendations;