import './top4suburbs.css';
import Container from 'react-bootstrap/Container';
import React, { Component } from 'react';
import LineChart from '../linechart/linechart';
function top4suburbs() {
    return (
        <Container>
        <div className="divi">
        <div className="div-3">
            <div className="div-4">
                <div className="suburb-1">
                    <p className = "text-1">MosMan</p>
                    <div className= "sub-flex">
                    <h1>1000</h1>
                    <div className="graph">
                       
                    </div>
                    </div>
                </div>
            </div>
            <div className="div-4">
                <div className="suburb-2">
                    <p className = "text-1">MosMan</p>
                    <div className= "sub-flex">
                    <h1>1000</h1>
                    <div className="graph"> GRAPH</div>
                    </div>
                </div>
            </div>
            <div className="div-4">
                <div className="suburb-3">
                    <p className = "text-1">MosMan</p>
                    <div className= "sub-flex">
                    <h1>1000</h1>
                    <div className="graph"> GRAPH</div>
                    </div>
                </div>
            </div>
            <div className="div-4">
                <div className="suburb-4">
                    <p className = "text-1">MosMan</p>
                    <div className= "sub-flex">
                    <h1>1000</h1>
                    <div className="graph"> GRAPH</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </Container>
    );
  }
  
  export default top4suburbs;