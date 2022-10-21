// Import
import React from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function SuburbBreakdown(listing_suburbs){
    return (
        <Row>
            <Card>
                <Card.Body>
                    <Card.Title>Suburb Breakdown</Card.Title>
                </Card.Body>
                <Card.Body>
                    {/* THIS SECTION IS LEFT TO DISPLAY THE PIE CHART CONTAINING PERCENTAGE BREAKDOWN OF NUMBER OF LISTINGS IN SUBURBS */}
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