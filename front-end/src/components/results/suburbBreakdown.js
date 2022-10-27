// Import
import React from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";
// Imports from doughnut graph
// import CanvasJSReact from './canvasjs.react';
import {CanvasJSChart} from 'canvasjs-react-charts'
// var CanvasJS = CanvasJSReact.CanvasJS;

function SuburbBreakdown({recommendedSuburbs}){
    let total_listing_count = 0;
    recommendedSuburbs.forEach((suburb) => {
        total_listing_count += suburb.suburb_listing_count;

        return total_listing_count;
    });

    const suburbDataPoints = [];
    recommendedSuburbs.forEach((suburb) => {
        suburbDataPoints.push({y: parseInt(suburb.suburb_listing_count / total_listing_count * 100),  name: suburb.name})
    });
    
    const suburb_options = {
        animationEnabled: true,
        title: {
            text: " "
        },
        subtitles: [{
            text: "Suburb Breakdown",
            verticalAlign: "center",
            fontSize: 22,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: false,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: suburbDataPoints,
        }]
    }

    return (
        <Row>
            <Card>
                <Card.Body>
                    <CanvasJSChart options={suburb_options}
                        /* onRef = {ref => this.chart = ref} */
                    />
                </Card.Body>
                {/* <Card.Body>
                    {
                        Array.from(recommendedSuburbs).map(
                            (list) => (
                                <Col>
                                    <Card.Text>
                                        * {list.name}
                                    </Card.Text>
                                    <Card.Text>
                                        * {list.suburb_listing_count} listings
                                    </Card.Text>
                                    <Card.Text>
                                        * {parseInt(list.suburb_listing_count / total_listing_count * 100)}% of listings
                                    </Card.Text>
                                </Col>
                            )
                        )
                    }
                </Card.Body>    */}
            </Card>
        </Row>
    )
}

export default SuburbBreakdown;

