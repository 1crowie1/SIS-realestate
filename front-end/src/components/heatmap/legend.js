import React from 'react';
import './heatmap.css';
import Graph from '../linechart/apexchart';
import Graph2 from '../linechart/apexchart2';
import Graph3 from '../linechart/apexchart3';
import Graph4 from '../linechart/apexchart4';
import { Button, Container, Row, Col } from "react-bootstrap";

const Legend = () => {
    return (
    <div className = "legend">
            
        {/* START OF TOP4SUBURBS */}
            <Container>
                <div className="divi">
                    <div className="div-3">
                        <div className="div-4">
                            <div className="suburb">

                                    <div className= "sub-flex">
                                        <div>
                                        <text className="suburb-name">Oatley</text>
                                        <h1>1.76M</h1>
                                        <text> down 8 %</text>
                                        </div>
                                        
                                        <div className="graph"> <Graph/> </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className='gap'> hello</div>
                    <div className="div-4">
                        <div className="suburb">
                            
                            <div className= "sub-flex">
                            <div>
                            <text className="suburb-name">Bexley</text>
                            <h1>780k</h1>
                            <text> up 11 %</text>
                            </div>
                            
                            <div className="graph"> <Graph2 /> </div>
                            </div>
                        </div>
                    </div>
                    <div className='gap'>hello</div>
                    <div className="div-4">
                        <div className="suburb">
                            <div className= "sub-flex">
                                <div>
                                <text className="suburb-name">WolliCreek</text>
                                <h1>730k</h1>
                                <text> down 10 %</text>
                                </div>
                            <div className="graph"> <Graph3 /></div>
                            </div>
                        </div>
                    </div>
                    <div className='gap'>hello</div>
                    <div className="div-4">
                        <div className="suburb">
                            <div className= "sub-flex">
                                <div>
                                <text className="suburb-name">Redfern</text>
                                <h1>1.4M</h1>
                                <text> up 10 %</text>    
                            </div>
                            <div className="graph"> <Graph4 /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'long '></div>
            </Container>
        {/* END OF TOP4SUBURBS */}
    </div>
    );
}
export default Legend;