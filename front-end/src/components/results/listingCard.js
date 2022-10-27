import { Button, Container, Row, Col, Card, Carousel, ListGroup } from "react-bootstrap";
// import {useNavigate} from "react-router-dom";

function ListingCard(listing) {
  // const navigate = useNavigate()

  return (
    <div>
      <Card style={{ width: '18rem', display: 'inline-block' }}>
        {/* <Card.Img variant="left" style={{ width: '100%', height: '40%' }} src={listing.listing.images[0]} /> */}
        <Carousel>
            {
              Array.from(listing.listing.imgs).map(
                  (images) => (
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={images.img}
                        alt="First slide"
                      />
                      <Carousel.Caption>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
              )
            }
        </Carousel>
        
        {/* <Carousel>
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
        </Carousel> */}

        <Card.Body>
          <Card.Title>{listing.listing.short_address}</Card.Title>
          <Card.Text>${listing.listing.price}</Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Bathrooms: {listing.listing.bathrooms}</ListGroup.Item>
            <ListGroup.Item>Bedrooms: {listing.listing.bedrooms}</ListGroup.Item>
            <ListGroup.Item>Car Spaces: {listing.listing.parking_spaces}</ListGroup.Item>
          </ListGroup>
          <Button variant="primary" href={listing.listing.url} target="_blank">Look at RealEstate</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListingCard;