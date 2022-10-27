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
            dataPoints: [
                { name: "Paddington", y: 4 },
                { name: "Zetland", y: 31 },
                { name: "Bondi", y: 35 },
                { name: "Ultimo", y: 17 },
                { name: "Darlinghurst", y: 7 },
                { name: "Surry Hills", y: 6 }
            ]
        }]
    }

    // old graph 

    return (
        <Row>
            <Card>
                <Card.Body>
                  
                </Card.Body>
                <Card.Body>
                    <CanvasJSChart options={suburb_options}
                        /* onRef = {ref => this.chart = ref} */
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

