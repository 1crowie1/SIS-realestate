import React from 'react';
// Import Components
import Heatmap from '../heatmap/heatmap';
import GridListingCard from './gridListingCard';
// Import Bootstrap
import { Button, Container, Row, Col } from "react-bootstrap";

const listings = [
    {
        address: '5/44 Whittle Avenue',
        suburb: 'Milperra',
        bathrooms: 2,
        bedrooms: 3,
        carSpaces: 2,
        price: '845,000',
        url: 'https://www.realestate.com.au/property-townhouse-nsw-milperra-140159731',
        images: ['https://i2.au.reastatic.net/1144x888-format=webp/e96ff39436963ebce4465ea6515ae720df95492006fb5580d76806685b01a9ae/image.jpg', 'https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/512e9387292b4702906787128003f85c5ba2ae59a1933bc4c6ad361f31339aca/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/92e7914b10201bd51d18c9df6dc40f255c0dc23a6cfc2cddaeec787ff36c0a84/image.jpg']
    },
    {
        address: '307/21 Leonard Street',
        suburb: 'Bankstown',
        bathrooms: 2,
        bedrooms: 2,
        carSpaces: 1,
        price: '569,000',
        url: 'https://www.realestate.com.au/property-unit-nsw-bankstown-140131623',
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
    },
    {
        address: '165 The River Road',
        suburb: 'Revesby',
        images: [],
        bathrooms: 2,
        bedrooms: 4,
        carSpaces: 5,
        price: 'CONTACT AGENT',
        url: 'https://www.realestate.com.au/property-house-nsw-revesby-139848355',
        images: ['https://i2.au.reastatic.net/1144x888-format=webp/f7b513b374ef0ef94f344b43c09d5d4cb0c2e000c3f5ba6f77c4c9f56ebe816f/image.jpg', 'https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/a0a64af32a66a3ef02f5b65d997420f0cd6456ffe0f0f17d46baf0f886cd6aa3/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/6812621c2f949d95c49a777bae2fa63d4790b19708ee4daaf074e307e446c063/image.jpg'],
    },
    {
        address: '10/38 Marshall Street',
        suburb: 'Bankstown',
        images: [],
        bathrooms: 1,
        bedrooms: 2,
        carSpaces: 1,
        price: '539,000',
        url: 'https://www.realestate.com.au/property-unit-nsw-bankstown-140409731',
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/f9a85661f9c90e4e067cbfe959eb91b65116479b4fc759f95bf430f068c4b5d7/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/d9e6540b284ab9bbf0d11baa4f252068178f48bef291a9271bad09bdcb66d6af/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/68d635af1c36490661c7382fd43b108951efba5d06b7305eeb8064b036d6bc41/image.jpg']
    },
    
]

function Results (result) {
    return (
        <div>
            <h1>Results</h1>
            <h2>Here are the results for your search</h2>

            <Container>
                <Row>
                    <Col>
                        <GridListingCard listings={listings} />
                    </Col>
                    <Col>
                        <Heatmap />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* // Suburb Breakdown */}
                    </Col>
                    <Col>
                    {/* // Price Breakdown */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Results;