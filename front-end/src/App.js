import './App.css';
import React, { useState } from "react";

function App() {

  const [recommendations, setRecommendations] = useState("{a: 1}");

  function logRecommendations() {
    fetch("http://localhost:4000/calculateNearestProperties/")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        setRecommendations(JSON.stringify(result));
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error);
      }
    );
  }

  fetch("http://localhost:4000/feelingLucky/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );

  return (

    <div className="div-1">
        <h1 className="Mid-header">HomeFinder</h1>
        <div className="div-2">
            <h1>Makes Home Finding Painless</h1>
        <div className="divi">
            <div className="div-6">
                <div className="gap">
                -
                </div>
                <div className="div-3">
                Average property price
                </div>
                
                <div className="gap">
                -
                </div>
                <div className="div-3">
                Average Mortgage price
                </div>
                
                <div className="div-4">
                Get a personalised recommendation!
                </div>
              </div>
              <div className="div-5">
              HeatMap 
              </div>
        </div>
        </div>


        <div className="div-2">
            <h1>Recommendations</h1>
            <h1>Himanshu code here</h1>
            <button className="blue-Button" onClick={logRecommendations}>Get Recommendation </button>
        </div>


        <div className="div-2">
            <h1>Results</h1>
            {recommendations}
            <h1>Amana Results page</h1>
        </div>
              
      
       
      
    </div>
  );
}

export default App;
