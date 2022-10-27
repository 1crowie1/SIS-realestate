import React from 'react';
// Import CSS
import './results.css'
// Import Components
// import Heatmap from '../heatmap/heatmap';
import ResultsHeatmap from '../heatmap/results-heatmap';
import GridListingCard from './gridListingCard';
// Import Bootstrap
import { Button, Container, Row, Col } from "react-bootstrap";
import { keyframes } from '@emotion/react';

// Breakdowns
import SuburbBreakdown from './suburbBreakdown';
import PriceBreakdown from './priceBreakdown';

function Results ({results, mapData, recommendedSuburbs}) { //{results}
    console.log("%Results Data in Results file", "color: aqua", results)
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
                        <ResultsHeatmap mapData={mapData}/>
                    </Col>
                </Row>

                <Row className='padding-top' >
                    <Col>
                        {/* // Suburb Breakdown */}
                        <SuburbBreakdown recommendedSuburbs={recommendedSuburbs} />
                    </Col>
                    <Col className='small-scrollable'>
                        
                        {/* // Price Breakdown */}
                        <PriceBreakdown recommendedSuburbs={recommendedSuburbs}/>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 

        
export default Results;