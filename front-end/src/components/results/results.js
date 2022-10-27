import React from 'react';
// Import Components
import Heatmap from '../heatmap/heatmap';
import ResultsHeatmap from '../heatmap/results-heatmap';
import GridListingCard from './gridListingCard';
// Import Bootstrap
import { Button, Container, Row, Col } from "react-bootstrap";
import { keyframes } from '@emotion/react';
import './results.css'
// 
import SuburbBreakdown from './suburbBreakdown';
import PriceBreakdown from './priceBreakdown';

const listing_suburbs = [
    {suburb_name: 'Paddington', listings_count: 123},
    {suburb_name: 'Zetland', listings_count: 65},
    {suburb_name: 'Bondi', listings_count: 234},
    {suburb_name: 'Bondi Beach', listings_count: 78},
    {suburb_name: 'Bondi Junction', listings_count: 3},
    {suburb_name: 'Ultimo', listings_count: 112},
    {suburb_name: 'Darlinghurst', listings_count: 746},
    {suburb_name: 'Surry Hills', listings_count: 456},
];

function Results ({results}) {
    console.log("%cResults in Table file", "color: aqua", results)
    if (results?.length === 0) {
        return (<></>);
    }
    return (
        <div>
            <h1>Results</h1>
            <hr style={{border: "1px solid black", width: "90%", margin: "5px auto",}}></hr>
            <h2>Here are the results for your search</h2>

            <Container>
                <Row>
                    <Col className='scrollable'>
                        <GridListingCard listings={results} />
                    </Col>
                    <Col>
                        {/* <ResultsHeatmap /> */}
                    </Col>
                </Row>

                <Row className='padding-top' >
                    <Col>
                        {/* // Suburb Breakdown */}
                        <SuburbBreakdown listing_suburbs={listing_suburbs} />
                    </Col>
                    <Col className='small-scrollable'>
                        
                        {/* // Price Breakdown */}
                        <PriceBreakdown listing_suburbs={listing_suburbs}/>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 

        
export default Results;