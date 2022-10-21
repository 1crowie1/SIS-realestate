// Import
import React from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function SuburbBreakdown(listing_suburbs){
    return (
        <Row>
        {
            Array.from(listing_suburbs.listing_suburbs).map(
                (list) => (
                    <Col>
                        <Card style={{ width: '18rem', display: 'inline-block' }}>
                            <Card.Body>
                                <Card.Title>{list.suburb_name}</Card.Title>
                                <Card.Body>
                                    <Card.Text>Number of Lists: {list.listings_count}</Card.Text>
                                    <Card.Text>Details: {list.details}</Card.Text>
                                </Card.Body>
                                <Button variant="primary">Look at RealEstate</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            )
        }
        </Row>
    )
}

export default SuburbBreakdown;