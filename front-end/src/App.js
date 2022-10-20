// Import Bootstrap
import './App.css';

// Import Components
import Header from './components/header';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Footer from './components/footer';

function App() {
  return (
    <div className='App'>
      <Header />

      {/* Top HeatMap Section */}
      <Heatmap />

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
