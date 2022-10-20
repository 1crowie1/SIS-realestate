// Import Bootstrap
import Container from 'react-bootstrap/Container';
import './App.css';

// Import Components
import Header from './components/header';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Footer from './components/footer';
import LineChart from './components/linechart/linechart';


function App() {
  return (
    <div className='App'>
      <Header />
      {/* Line Chart */}
      <Container>
        <LineChart />
      </Container>

      {/* HeatMap Section */}
      {/* <Container> */}
        <Heatmap />
      {/* </Container> */}

      {/* Get Recommendations */}
      <Container>
        <Recommendations />
      </Container>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
