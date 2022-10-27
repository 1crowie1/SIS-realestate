/* eslint-disable */ 
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

function Recommendations() {  
    // Buttons
    const [results, setResults] = useState([]);
    const [luckyResults, setLuckyResults] = useState([]);

    // Set Variables
    const [mapData, setMapData] = useState(null);
    const [clusterResults, setClusterResults] = useState(null);
    const [recommendedSuburbs, setRecommendedSuburbs] = useState(null);

    // Set Load
    const [loading, setLoading] = useState(false); // Loading state for the button
    const [buttonClicked, setButtonClicked] = useState(false);// Button Clicked

    // Set Filters
    const [price, setPrice] = useState(null); //[0, 1000000]
    const [bedrooms, setBedrooms] = useState(null); //[0, 10]

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };
    const handleBedroomsChange = (event, newValue) => {
        setBedrooms(newValue);
    };

    async function CalcCluster() {
        setLoading(true);

        // Get All Listings - Variable: results
        const allListings = await realestateUtil.getAllListings();
        setResults(allListings);
        // Get Preferences - Variables: price, bedrooms
        console.log('Real Estate Preferences: ' + allListings + ' | '  + price + " | " + bedrooms);
        let closest_cluster = 0
        let closest_num = 10000000
        let curr_num = 10000000

        for (var i = 0; i < allListings.length; i++) {
            // console.log(`Listing ${i}: ${allListings[i].price} | ${allListings[i].bedrooms}`);
            // closest to 0 on both price and bedrooms
            curr_num = Math.abs(allListings[i].price/1000000 - price/1000000) + Math.abs(allListings[i].bedrooms - bedrooms)
            if (curr_num < closest_num) {
                closest_num = curr_num
                closest_cluster = allListings[i].cluster_num
            }
        }
        console.log(`Cluster: ${closest_cluster} | ${closest_num}`);
        
        // Algorithm - results
        var clusterNum = closest_cluster; 
        let imgs = [];

        // Get Results GeoJSOn
        const resultsGeoJson = await realestateUtil.getResultsGeoJSON(clusterNum)
        setMapData(resultsGeoJson);

        // Get Cluster - Variable: clusterResults
        const clusterListings = await realestateUtil.getCluster(clusterNum)
        for (var i = 0; i < clusterListings.length; i++) {
            console.log(clusterListings[i].id)
            imgs = await realestateUtil.getImgs(clusterListings[i].id);
            clusterListings[i].imgs = imgs;
        }
        
        setClusterResults(clusterListings);

        // Get Recommended Suburbs - Variable: recommendedSuburbs
        const recommendedSuburbsListings = await realestateUtil.getRecommendedSuburbs(clusterNum)
        setRecommendedSuburbs(recommendedSuburbsListings);

        setButtonClicked(true);
        setLoading(false); 
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

    console.log(clusterResults);
    console.log(mapData);

    return (
        <div className='recommendations'>   
            <Container>
            {/* Recommendation Titles */}
            <Row>   
                <div className='recommendations-title'>
                    <img src={require('../.././images/2.png')} alt="Home Finder" width="70" height="70"></img>
                    <h2>Get Personalised Recommendations</h2>
                    <hr style={{border: "1px solid black", width: "90%", margin: "5px auto",}}></hr>
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
                                                aria-label="land-size"
                                                defaultValue={0}
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
                                        <Form.Label>Preference Area (kms)</Form.Label>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                aria-label="Preference Area"
                                                defaultValue={0}
                                                valueLabelDisplay="auto"
                                                step={1}
                                                marks
                                                min={0}
                                                max={50}
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
                            {/* Price $(AUD)*/}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Price</Form.Label>
                                        <Box sx={{ width: 300 }}>
                                            <Slider
                                                aria-label="Price"
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
                    
                            {/* Car Spaces */}
                            <Col xs={6} md={6}>
                                <Form>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Car Spaces</Form.Label>
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
                <div className='padding-bot'>
                <text>Considerations: </text>
                </div>    
                <Container >
                    
                        <Row >
                            <Col xs={6} md={6}>
                                {/* Bootstrap checkbox: Public Transport */}
                                <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            
                                            type={'checkbox'}
                                            id={`default-checkbox`}
                                            label={`Public Transport`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                {/* Bootstrap checkbox: Amazing View */}
                                <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            
                                            type={'checkbox'}
                                            id={`default-checkbox`}
                                            label={`Amazing View`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                {/* Bootstrap checkbox: Close to School */}
                                <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            
                                            type={'checkbox'}
                                            id={`default-checkbox`}
                                            label={`Close to School`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                {/* Bootstrap checkbox: Close to Shops */}
                                <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            type={'checkbox'}
                                            id={`default-checkbox`}
                                            label={`Close to Shops`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                {/* Bootstrap checkbox: Close to Park */}
                                <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            type={'checkbox'}
                                            id={`default-checkbox`}
                                            label={`Close to Park`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                {/* Bootstrap checkbox: Close to Hospital */}
                                <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            type={'checkbox'}
                                            id={`default-checkbox`}
                                            label={`Close to Hospital`}
                                        />  
                                    </div>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6}>
                                {/* Bootstrap checkbox: Close to Beach */}
                                <Form>
                                    <div key={`default-checkbox`} className="mb-3">
                                        <Form.Check
                                            type={'checkbox'}
                                            id={`default-checkbox`}
                                            label={`Close to Beach`}
                                        />
                                    </div>
                                </Form>
                            </Col>
                            <Col xs={6} md={6}>
                                
                            </Col>
                        </Row>
                        <div>
                            <div>
                                <Button className="blue-Button" onClick={ () => CalcCluster() }>Get Recommendation</Button>
                            </div>
                            <div>
                                <h1>OR</h1>
                            </div>
                            <div>
                                <Button className="blue-Button" onClick={ () => feelingLucky() }>I'm Feeling Lucky</Button>
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Container>
        
        <hr style={{border: "1px solid black", width: "90%", margin: "5px auto",}}></hr>
        
        {/* Get Results */}
        
        {loading ? (
            <div>Loading...</div>
        ): buttonClicked && (
            <Container>
                <div>
                    <Results results={clusterResults} mapData={mapData} recommendedSuburbs={recommendedSuburbs} />
                </div>
            </Container>
        )}
        
        </div>
    );
}
export default Recommendations;