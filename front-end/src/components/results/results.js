import React from 'react';
// Import Components
import Heatmap from '../heatmap/heatmap';
import GridListingCard from './gridListingCard';
// Import Bootstrap
import { Button, Container, Row, Col } from "react-bootstrap";
import { keyframes } from '@emotion/react';

import SuburbBreakdown from './suburbBreakdown';

// const listings = [
//     {
//         address: '5/44 Whittle Avenue',
//         suburb: 'Milperra',
//         bathrooms: 2,
//         bedrooms: 3,
//         carSpaces: 2,
//         price: '845,000',
//         url: 'https://www.realestate.com.au/property-townhouse-nsw-milperra-140159731',
//         images: ['https://i2.au.reastatic.net/1144x888-format=webp/e96ff39436963ebce4465ea6515ae720df95492006fb5580d76806685b01a9ae/image.jpg', 'https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/512e9387292b4702906787128003f85c5ba2ae59a1933bc4c6ad361f31339aca/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/92e7914b10201bd51d18c9df6dc40f255c0dc23a6cfc2cddaeec787ff36c0a84/image.jpg']
//     },
//     {
//         address: '307/21 Leonard Street',
//         suburb: 'Bankstown',
//         bathrooms: 2,
//         bedrooms: 2,
//         carSpaces: 1,
//         price: '569,000',
//         url: 'https://www.realestate.com.au/property-unit-nsw-bankstown-140131623',
        // images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
//     },
//     {
//         address: '165 The River Road',
//         suburb: 'Revesby',
//         images: [],
//         bathrooms: 2,
//         bedrooms: 4,
//         carSpaces: 5,
//         price: 'CONTACT AGENT',
//         url: 'https://www.realestate.com.au/property-house-nsw-revesby-139848355',
//         images: ['https://i2.au.reastatic.net/1144x888-format=webp/f7b513b374ef0ef94f344b43c09d5d4cb0c2e000c3f5ba6f77c4c9f56ebe816f/image.jpg', 'https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/a0a64af32a66a3ef02f5b65d997420f0cd6456ffe0f0f17d46baf0f886cd6aa3/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/6812621c2f949d95c49a777bae2fa63d4790b19708ee4daaf074e307e446c063/image.jpg'],
//     },
//     {
//         address: '10/38 Marshall Street',
//         suburb: 'Bankstown',
//         images: [],
//         bathrooms: 1,
//         bedrooms: 2,
//         carSpaces: 1,
//         price: '539,000',
//         url: 'https://www.realestate.com.au/property-unit-nsw-bankstown-140409731',
//         images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/f9a85661f9c90e4e067cbfe959eb91b65116479b4fc759f95bf430f068c4b5d7/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/d9e6540b284ab9bbf0d11baa4f252068178f48bef291a9271bad09bdcb66d6af/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/68d635af1c36490661c7382fd43b108951efba5d06b7305eeb8064b036d6bc41/image.jpg']
//     },
// ]

const listings = [
    {
        id: 139982483,
        url: 'https://www.realestate.com.au/property-apartment-nsw-newtown-139982483',
        suburb: 'Newtown',
        state: 'NSW',
        postcode: '2042',
        short_address: '12/306 Edgeware Road',
        full_address: '12/306 Edgeware Road, Newtown, NSW 2042',
        property_type: 'apartment',
        price: 399000,
        price_text: '$399,000',
        bedrooms: 1,
        bathrooms: 1,
        parking_spaces: 0,
        listing_company_id: 'ZPCACX',
        listing_company_name: 'Wiseberry - ENMORE',
        listing_company_phone: '0295571225',
        description: 'With a walk to everywhere location, this top floor studio apartment offers an open & leafy outlook with abundant natural light. Situated in a well maintained security building of 12 apartments the refreshed interior is ready to move in and enjoy or lease out as a secure investment.<br/>Highlights include:<br/>•\tUpdated kitchen & bathroom<br/>•\tInternal laundry facilities<br/>•\tSecurity building<br/>•\tBuilt in wardrobe<br/>•\tPrivate yet open outlook<br/>•\tWalk to Metro shops & city transport<br/>•\tNo common walls in living areas',
        cluster_num: 0,
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
      },
      {
        id: 139760799,
        badge: 'Under offer',
        url: 'https://www.realestate.com.au/property-studio-nsw-newtown-139760799',
        suburb: 'Newtown',
        state: 'NSW',
        postcode: '2042',
        short_address: '203W/138 Carillon Avenue',
        full_address: '203W/138 Carillon Avenue, Newtown, NSW 2042',
        property_type: 'studio',
        price: 439000,
        price_text: '$439,000',
        bedrooms: 0,
        bathrooms: 1,
        parking_spaces: 0,
        building_size: '35',
        building_size_unit: 'm²',
        listing_company_id: 'EXLCON',
        listing_company_name: 'Exclusive Real Estate - Concord',
        listing_company_phone: '(02)97361699',
        description: 'Private, stylish and secure, a cosmopolitan lifestyle awaits<br/>Perfectly positioned with all the delights of the popular inner-west at your doorstep, this modern apartment provides a carefree and socially convenient lifestyle. Proportioned with an open plan design over 35sqm this studio flows effortlessly to a substantial balcony which enjoys the sunlight of a north east aspect.<br/><br/>Appointed for stress free living, it includes lift access, security intercom, masses of visitor parking and an internal laundry. This desirable haven is centrally placed and just a stroll to the RPA, Camperdown Memorial Rest Park, a huge array of eateries from around the world, Dendy Cinema, Newtown rail and just moments to Sydney University and Broadway shopping.<br/><br/>Features you will love include; <br/>- Newly laid timber laminate flooring<br/>- Freshly painted interiors<br/>- Large double door built in wardrobe<br/>- Stainless steel dishwasher<br/>- Dual burner gas stove top<br/>- Ample kitchen storage<br/>- Microwave<br/><br/>Water\t\t\t\t$155.60 per quarter<br/>Council\t\t\t\t$285.70 per quarter<br/>Strata levy\t\t\t$705.80 per quarter<br/>',
        cluster_num: 0,
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
      },
      {
        id: 139139599,
        url: 'https://www.realestate.com.au/property-apartment-nsw-newtown-139139599',
        suburb: 'Newtown',
        state: 'NSW',
        postcode: '2042',
        short_address: '414/88 King Street',
        full_address: '414/88 King Street, Newtown, NSW 2042',
        property_type: 'apartment',
        price: 380000,
        price_text: 'For Sale | $350,000 - $380,000',
        bedrooms: 1,
        bathrooms: 1,
        parking_spaces: 0,
        building_size: '24',
        building_size_unit: 'm²',
        listing_company_id: 'XFNSUM',
        listing_company_name: 'Harris Tripp - Summer Hill',
        listing_company_phone: '0287524500',
        description: 'Peacefully set towards the rear of a popular security building in the heart of Newtown, this well-presented studio apartment unveils an ultra-desirable lifestyle that blends location with convenience. Wonderfully elevated and enjoying far reaching urban views all the way to Botany Bay, the stunning oasis is instantly appealing and showcases a clever floorplan with stylish appointments and plenty of natural light plus a fantastic walk-to-everywhere address just footsteps to trendy restaurants, pubs and Carriageworks. <br/><br/>Contemporary studio in converted warehouse building<br/>Open plan interiors with wall of glass captures views<br/>Chic kitchen featuring Westinghouse induction cooktop<br/>Spacious bathroom offering combined shower/bathtub<br/>Intercom and shared laundry<br/>Complex boasts resort-style pool plus entertaining area <br/>Excellent investment or outstanding lifestyle retreat<br/>Popular eateries, local shops and transport at your door<br/>Short walk to Sydney Uni and within close proximity to RPA and the CBD<br/><br/>Council rates: Approx. $202 per quarter<br/>Water rates: Approx. $156 per quarter',
        cluster_num: 0,
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
      
      },
      {
        id: 140263567,
        url: 'https://www.realestate.com.au/property-studio-nsw-lilyfield-140263567',
        suburb: 'Lilyfield',
        state: 'NSW',
        postcode: '2040',
        short_address: '31/3 Rayner Street',
        full_address: '31/3 Rayner Street, Lilyfield, NSW 2040',
        property_type: 'studio',
        price: 345000,
        price_text: '$330,000 - $345,000',
        bedrooms: 1,
        bathrooms: 1,
        parking_spaces: 1,
        listing_company_id: 'SNEHMU',
        listing_company_name: 'Marsden Real Estate',
        listing_company_phone: '0413689915',
        description: 'For the eager first home buyer or the astute investor, this exceptional studio apartment is simply irresistible. <br/><br/>Its ideally located within minutes to local restaurants, cafes, transport, and the light rail. This studio apartment is set within a well maintained complex with security intercom access, immaculate gardens, and a communal courtyard area.<br/><br/>This property is a great low maintenance option to make the most of all the Inner West has to offer!<br/><br/>Features Include:<br/>• Good size open plan room with plenty of natural light.<br/>• Well-presented kitchenette.<br/>• Convenient pull-down Murphy Bed.<br/>• Modern & tiled bathroom.<br/>• Shared laundry facilities with security intercom.<br/>• Allocated underground car space with remote control access.<br/>• Immaculate gardens & communal courtyard area.<br/>• Approx. 22sqm internal plus 12sqm car space.<br/>• Weekly Rent currently achieving $310 <br/><br/>Outgoings:<br/>- Strata Levies Approximately   $635 p/q<br/>- Council Rates Approximately $309 p/q<br/>- Water Rates Approximately   $166 p/q<br/><br/>All information contained herein is gathered from sources we believe to be reliable. However, we cannot guarantee its accuracy and interested parties/persons should rely on their own enquiries. ',
        cluster_num: 0,
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
      
      },
      {
        id: 138344163,
        url: 'https://www.realestate.com.au/property-apartment-nsw-balmain-138344163',
        suburb: 'Balmain',
        state: 'NSW',
        postcode: '2041',
        short_address: '4/91 Mort Street',
        full_address: '4/91 Mort Street, Balmain, NSW 2041',
        property_type: 'apartment',
        price: 469000,
        price_text: 'For Sale $469,000',
        bedrooms: 1,
        bathrooms: 1,
        parking_spaces: 0,
        listing_company_id: 'XRWANN',
        listing_company_name: 'Ray White - Annandale',
        listing_company_phone: '(02)95718088',
        description: 'Conveniently located just a short stroll from Mort Bay Park, the Thames Street Wharf and Darling Street village life, this one-bedroom apartment is situated on the top floor of the boutique ’Star Hotel’ conversion in the heart of Balmain. It presents as a unique address with interiors full of character and updated for modern life, including a light filled living space with kitchenette, main bathroom and bedroom with ensuite. Mort Street is so close to everything, yet quiet, leafy and just minutes from the water - the very definition of Balmain living! If you’re in the market for a first home or investment, don’t miss this opportunity to purchase a property of rare affordability in one of Sydney’s most sought-after lifestyle pockets.<br/><br/>Well-maintained building brimming with historic charm<br/>Top floor aspect provides elevated peace and privacy<br/>Fresh updates include timber flooring and paint<br/>Open living/dining has high ceilings, plenty of light<br/>Kitchenette, main bath plus an ensuite bathroom<br/>Walk-to-everything convenience, easy access to CBD',
        cluster_num: 0,
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
      
      },
      {
        id: 138302830,
        url: 'https://www.realestate.com.au/property-studio-nsw-rozelle-138302830',
        suburb: 'Rozelle',
        state: 'NSW',
        postcode: '2039',
        short_address: '58/3 Hornsey Street',
        full_address: '58/3 Hornsey Street, Rozelle, NSW 2039',
        property_type: 'studio',
        price: 469000,
        price_text: 'For Sale Guide - $469,000',
        bedrooms: 1,
        bathrooms: 1,
        parking_spaces: 1,
        listing_company_id: 'XLJLEI',
        listing_company_name: 'MONTANO GROUP - LEICHHARDT',
        listing_company_phone: '0295682600',
        description: 'Enjoy the panoramic 180 degree views from the top floor.<br/><br/>This well located studio apartment is close by to restaurants, pubs, shopping, amenities and a few minutes’ walk to city buses, and a short stroll to waterfront and parklands.  <br/><br/>Low maintenance apartment perfect for professionals and investors.<br/><br/>Featuring a functional gas kitchen, mirror built-in robe and the convenience of a lift.  <br/><br/>•\tFeatures:<br/>•\tCity and water views<br/>•\tOpen plan kitchen and living <br/>•\tParking space<br/>•\tInternal laundry facilities <br/>•\tLocated in character filled street<br/><br/>Strata Levies: $662.85 per quarter (approx.)<br/>Council Rates: $ 302.00 per quarter (approx.)<br/>Water Fees: $157.31 per quarter (approx.)<br/><br/>',
        cluster_num: 0,
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
      
      },
      {
        id: 139085971,
        url: 'https://www.realestate.com.au/property-apartment-nsw-paddington-139085971',
        suburb: 'Paddington',
        state: 'NSW',
        postcode: '2021',
        short_address: '19/38 Stephen Street',
        full_address: '19/38 Stephen Street, Paddington, NSW 2021',
        property_type: 'apartment',
        price: 430000,
        price_text: 'For Sale @ $430,000 - don’t miss out!',
        bedrooms: 0,
        bathrooms: 1,
        parking_spaces: 1,
        listing_company_id: 'MKXCYY',
        listing_company_name: 'Local Agency Co. - PADDINGTON',
        listing_company_phone: '0293625333',
        description: 'Looking for the perfect investment opportunity in a popular inner-city location? Want your own little sanctuary right in the heart of all the action? Live in the area and struggle with parking? This is the one for you!<br/><br/>It gives us great pleasure to present to you 19/38 Stephen St, Paddington.<br/><br/>Located on a quiet cul-de-sac and surrounded by greenery, this setting is the definition of serene. But don’t let first appearances fool you – this charming apartment couldn’t be closer to all the hustle and bustle. Sitting just moments from Five-Ways it’s an easy walk to the cafes, shops, and parks that make Paddington so sought-after.<br/><br/>Located within a well maintained boutique block, this top floor studio is sure to delight investors and owner-occupiers alike.<br/><br/>A tenant will love living here! Imagine coming home after a long day and pulling into your own dedicated car space. As you make your way upstairs, you take in the lushness of the surrounds and start to unwind. You open the door to your open plan living space and instantly know that you are home.<br/><br/>How you spend your evenings will be entirely up to you. Do you make the most of the sleek and stylish kitchen by whipping up your favourite dishes? Or do you indulge in all this unbeatable location has to offer and head out for dinner at Vino e Cucina or drinks at Tequila Mockingbird?<br/><br/>This is a great opportunity to get into one of the city’s most prestigious and highly competitive property markets. Whether you’re buying for yourself, or looking to build your portfolio, this one will tick all your boxes.<br/><br/>* Unbeatable location right in the heart of Paddington<br/>* Only moments from Five-Ways and everything it has to offer<br/>* Top floor apartment open plan studio space<br/>* Serene setting on a quiet, tree-lined cul-de-sac<br/>* Sleek and stylish, but still with scope to make your own mark<br/>* Well-maintained boutique block of 20, solid brick, low strata levies<br/>* 2 LOTS - the parking and apartment are on separate lots<br/> <br/>(All information contained herein is gathered from sources we consider to be reliable, however we cannot guarantee or give any warranty to the information provided. Interested parties must solely rely upon their own enquiries.)',
        cluster_num: 0,
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
      
      },
      {
        id: 137633834,
        url: 'https://www.realestate.com.au/property-apartment-nsw-zetland-137633834',
        suburb: 'Zetland',
        state: 'NSW',
        postcode: '2017',
        short_address: '208/301 Botany Road',
        full_address: '208/301 Botany Road, Zetland, NSW 2017',
        property_type: 'apartment',
        price: 545000,
        price_text: '$545,000',
        bedrooms: 1,
        bathrooms: 1,
        parking_spaces: 0,
        listing_company_id: 'ULLOBQ',
        listing_company_name: 'Leaders Estate Agents - Gladesville',
        listing_company_phone: '0298178770',
        description: 'Infinity by Crown group offers resort-style facilities such as a swimming pool and spa on the apartment level, 24-hour gym access, private music room, communal function room with kitchen facilities, meeting room, and cinema room. <br/><br/>This studio apartment features:<br/><br/>- Gas kitchen with Miele appliances and island bench<br/>- Timber tile flooring and ducted air conditioning throughout<br/>- Direct lift access from the complex to Green Square Station<br/>- Security intercom, internal laundry<br/>- Bathroom with luxury frameless glass shower<br/>- Positioned  directly above Green Square station, the location offers immediate access to Green Square library, Woolworths supermarket, multiple cafes, and restaurants<br/>- Just a short walk to the state-of-the-art Gunyama Park Aquatic & Recreation Centre.<br/><br/><br/>Disclaimer: The above information has been furnished from sources we deem to believe. We have not verified whether or not that information is accurate, and do not have any responsibility to any person for its accuracy and do no more than pass it on.<br/>All interest parties should make and reply upon their own inquiries in order to determine whether or not this information is, in fact, accurate.<br/>',
        cluster_num: 0,
        images: ['https://i2.au.reastatic.net/1168x824-resize,extend,r=33,g=40,b=46/9d121d6e6a92dba19b819f6af027a2c11e3954992753d63f68df537fc47b37fb/image.jpg', 'https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg', 'https://i2.au.reastatic.net/2336x1648-resize,r=33,g=40,b=46/a9fa7b5adeae3081752afcf562198aeefc8a800910cdc1bc9bba8bed224f3ecb/image.jpg']
      }
]

const list_of_suburbs = [{name: 'Zetland'}];

function Results (result) {
    return (
        <div>
            <h1>Results</h1>
            <h2>Here are the results for your search</h2>

            <Container>
                <Row>
                    <Col>
                        <GridListingCard listings={listings} />
                        {/* <GridListingCard listings={result} /> */}
                    </Col>
                    <Col>
                        <Heatmap />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {/* // Suburb Breakdown */}
                      <SuburbBreakdown list_of_suburbs={list_of_suburbs} />
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