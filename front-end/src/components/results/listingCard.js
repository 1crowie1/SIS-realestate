import { Button, Container, Row, Col, Card, Carousel } from "react-bootstrap";
// import {useNavigate} from "react-router-dom";

function ListingCard(listing) {
  // const navigate = useNavigate()

  return (

    <div>
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
            src={listing.listing.images[1]}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={listing.listing.images[2]}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card.Body>
        <Card.Title>{listing.listing.short_address}</Card.Title>
        <Card.Text>${listing.listing.price}</Card.Text>
        <Card.Body>
          <Card.Text>Bathrooms: {listing.listing.bathrooms}</Card.Text>
          <Card.Text>Bedrooms: {listing.listing.bedrooms}</Card.Text>
          <Card.Text>Car Spaces: {listing.listing.parking_spaces}</Card.Text>
        </Card.Body>
        <Button variant="primary" href={listing.listing.url}>Look at RealEstate</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ListingCard;