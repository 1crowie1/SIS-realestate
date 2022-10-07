// import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListingCard from './listingCard';

const columns = 2
function GridListingCard(listings) {
  return (
    <Row xs={(listings.length / 2)} md={columns} className="g-4">
      {
        Array.from(listings.listings).map(
          (listing) => (
            <Col>
              <ListingCard listing={listing} />
            </Col>
          )
        )
      }
    </Row>
  );
}

export default GridListingCard;