import logo from './logo.svg';
import React,{useState} from "react";
import styled from "styled-components";
import './App.css';
import { SliderComponent } from './components';  //npm install styled-components

function App() {
    const [value, setValue]=useState(50);

    const handleChange = (event) => {
      setValue(event.target.value)
    }

    return (

        <div className="div-1">
            

            <h1 className="Mid-header">HomeFinder</h1>
            <div className="heatmap">

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

                <div className="get-rec">
                    <div className="get-rec2"> 
                    <h2 className="Mid-header">Get Recommendation</h2>
                    </div>
                </div>
            </div>


            <div className="div-2">
                <h1>Recommendations</h1>
                <h1>Himanshu code here</h1>
                <AppContainer>
                    <h2>{value}</h2>
                    <SliderComponent 
                        value={value} 
                        handleChange={handleChange} 
                        min={0} 
                        max={100} 
                        step={10}
                    />
                </AppContainer>
                <button className="blue-Button">Get Recommendation </button>
            </div>


            <div className="div-2">
                <h1>Results</h1>
                <h1>Amana Results page
                    Hi :) 
                </h1>
            </div>
                
        
        
        
        </div>
    );
}

export default App;

const AppContainer = styled.div`
  width: 10vw;
  height: 10vh;
  color: #000000;
  background: #f4f5f7;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
