// Import
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function SuburbBreakdown(list_of_suburbs){
    return (
        <Row>
        {
            Array.from(list_of_suburbs.name).map(
                (name) => (
                    <Col>
                        <Card>
                            <Card.Title>{list_of_suburbs}</Card.Title>
                        </Card>
                    </Col>
                )
            )
        }
        </Row>
    )
}

export default SuburbBreakdown;