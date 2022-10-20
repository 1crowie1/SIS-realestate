import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
 import './linechart.css';

// Chart JS Register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// CSS


class LineChart  extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['', '', '', '', '', '','', ''],
                datasets: [
                    {
                        label: 'Average Price',
                        data: [
                            100,
                            200,
                            300,
                            450,
                            500,
                            600,
                            650,
                            800
                            
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition: 'right'
    }

    render() {
        return (
            <div className='chart'>
                <Line 
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Average Price Per Month',
                            fontSize: 10
                            
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        scales:{
                            xAxes: [{
                                display: false //this will remove all the x-axis grid lines
                            }]
                        },
                        
                        
                    }}
                />
            </div>
        )
    }
}

export default LineChart;