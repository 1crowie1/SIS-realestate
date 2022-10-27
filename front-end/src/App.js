// Import React
import React, { useState, useEffect } from 'react';

// Import Bootstrap
import './App.css';

// Import Components
import Header from './components/header';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Footer from './components/footer';

// Import Util
import RealestateUtil from "./util/RealestateUtil";
const realestateUtil = new RealestateUtil();

function App() {
  const [heatmapResults, setHeatmapResults] = useState(['TEST']);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        var data = await realestateUtil.getGeoJSON();
        setHeatmapResults(data);

        setLoading(false);
      } catch (e) {
        alert(e);
      } 
    })
    ();
  }, []);
  
  return (
    <div className='App'>
      <Header />

      {/* Top HeatMap Section */}
      {loading ? (
        <div className='loading_section'>{/* Loading... */}</div>
      ) : heatmapResults && 
        ( 
          <Heatmap mapData={heatmapResults} />
        )
      }

      <hr style={{border: "1px solid black", width: "90%", margin: "5px auto",}}></hr>

      {/* Get Recommendations */}
      <Recommendations />
      {/* Results WithIn Recommendations */}
      
      <hr style={{border: "1px solid black", width: "90%", margin: "5px auto",}}></hr> 

      <Footer />
    </div>
  );
}

export default App;
