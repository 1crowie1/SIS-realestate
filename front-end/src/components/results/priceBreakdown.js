// Import
import React from 'react';
import { Button, Container, Row, Col, Card } from "react-bootstrap";

// Import Apex Graph
import ReactApexChart from "react-apexcharts";

function SuburbBreakdown({recommendedSuburbs}){
    const series = [
        {
          name: "Average Price",
          data: [
              1400,
              1500,
              1400,
              1450,
              1500,
              1600,
              1650,
              1760,
              1760
          ],
        },
        
      ];
      const options = {
        dataLabels: {
          enabled: false,
          
        },
        legend:{
          show: false,
          
        },
        grid: {
          show: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          
          categories: [
            "1/22/20",
            "2/1/20",
            "2/15/20",
            "3/1/20",
            "3/15/20",
            "4/1/20",
            "4/15/20",
            "5/1/20",
            "5/7/20",
          ],
          
        },
        tooltip: {
          x: {
            format: "dd/MM/yy",
          },
        },
      };

    return (
        <Row>
        {
            Array.from(recommendedSuburbs).map(
                (list) => (
                    <Col>
                        <Card style={{ width: '18rem', display: 'inline-block' }}>
                            <Card.Body>
                                <Card.Title>{list.name}</Card.Title>
                                <Card.Body>
                                    <Card.Text>Number of Lists: {list.suburb_listing_count}</Card.Text>
                                    {/* <Card.Text>Details: {list.details}</Card.Text> */}

                                    {/* <Typography component="legend">Controlled</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    /> */}

                                </Card.Body>
                                <Card.Body>
                                    <ReactApexChart
                                        options={options}                                    
                                        series={series}
                                        type="area"
                                        height={150}
                                    />
                                </Card.Body>
                                
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