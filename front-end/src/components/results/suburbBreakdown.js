// Import
import React from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";
// Imports from doughnut graph
// import CanvasJSReact from './canvasjs.react';
import {CanvasJSChart} from 'canvasjs-react-charts'
// var CanvasJS = CanvasJSReact.CanvasJS;

function SuburbBreakdown(listing_suburbs){
    const suburb_options = {
        animationEnabled: true,
        title: {
            text: "Suburb Breakdown"
        },
        subtitles: [{
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Suburb 1", y: 5 },
                { name: "Suburb 2", y: 31 },
                { name: "Suburb 3", y: 40 },
                { name: "Suburb 4", y: 17 },
                { name: "Suburb 5", y: 7 }
            ]
        }]
    }

    const customer_options = {
        animationEnabled: true,
        title: {
            text: "Customer Satisfaction"
        },
        subtitles: [{
            text: "71% Positive",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Unsatisfied", y: 5 },
                { name: "Very Unsatisfied", y: 31 },
                { name: "Very Satisfied", y: 40 },
                { name: "Satisfied", y: 17 },
                { name: "Neutral", y: 7 }
            ]
        }]
    }

    return (
        <Row>
            <Card>
                <Card.Body>
                    <Card.Title>Suburb Breakdown</Card.Title>
                </Card.Body>
                <Card.Body>
                    <CanvasJSChart options={suburb_options}
                        /* onRef = {ref => this.chart = ref} */
                    />
                    <CanvasJSChart options={customer_options}
                        /* onRef={ref => this.chart = ref} */
                    />
                </Card.Body>
                <Card.Body>
                    {
                        Array.from(listing_suburbs.listing_suburbs).map(
                            (list) => (
                                <Card.Text>
                                    * {list.suburb_name}
                                     {/* Listings Percentage on Other Section */}
                                </Card.Text>
                            )
                        )
                    }
                </Card.Body>
            </Card>
        </Row>
    )
}

export default SuburbBreakdown;

