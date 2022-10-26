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
                                    // star rating



<Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
/>
<Typography component="legend">Read only</Typography>
<Rating name="read-only" value={value} readOnly />
<Typography component="legend">Disabled</Typography>
<Rating name="disabled" value={value} disabled />
<Typography component="legend">No rating given</Typography>
<Rating name="no-value" value={null} />








// graph 
class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'XYZ MOTORS',
              data: dates
            }],
            options: {
              chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                  type: 'x',
                  enabled: true,
                  autoScaleYaxis: true
                },
                toolbar: {
                  autoSelected: 'zoom'
                }
              },
              dataLabels: {
                enabled: false
              },
              markers: {
                size: 0,
              },
              title: {
                text: 'Suburb Name',
                align: 'left'
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  inverseColors: false,
                  opacityFrom: 0.5,
                  opacityTo: 0,
                  stops: [0, 90, 100]
                },
              },
              yaxis: {
                labels: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0);
                  },
                },
                title: {
                  text: 'Price'
                },
              },
              xaxis: {
                type: 'datetime',
              },
              tooltip: {
                shared: false,
                y: {
                  formatter: function (val) {
                    return (val / 1000000).toFixed(0)
                  }
                }
              }
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
</div>












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