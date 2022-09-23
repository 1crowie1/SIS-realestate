import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import {useNavigate} from "react-router-dom";

function ListingCard(listing) {
  // const navigate = useNavigate()

  return (
    <Card style={{ width: '18rem', display: 'inline-block' }}>
      <Card.Img variant="left" style={{ width: '100%', height: '40%' }} src={listing.listing.images[0]} />
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