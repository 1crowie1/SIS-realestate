import { Button, Container, Row, Col, Card, Carousel } from "react-bootstrap";
// import {useNavigate} from "react-router-dom";

function ListingCard(listing) {
  // const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem', display: 'inline-block' }}>
      {/* <Card.Img variant="left" style={{ width: '100%', height: '40%' }} src={listing.listing.images[0]} /> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={listing.listing.images[0]}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={listing.listing.images[0]}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={listing.listing.images[0]}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card.Body>
        <Card.Title>{listing.listing.address}</Card.Title>
        <Card.Body>
          <Card.Text>{listing.listing.bathrooms}</Card.Text>
          <Card.Text>{listing.listing.bedrooms}</Card.Text>
          <Card.Text>{listing.listing.carSpaces}</Card.Text>
        </Card.Body>
        <Card.Text>${listing.listing.price}</Card.Text>
        <Button variant="primary" href={listing.listing.url}>Look at RealEstate</Button>
      </Card.Body>
    </Card>
  );
}

export default ListingCard;