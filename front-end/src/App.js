// Import Bootstrap
import Container from 'react-bootstrap/Container';
import './App.css';

// Import Components
import Header from './components/header';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Footer from './components/footer';
import LineChart from './components/linechart/linechart';
import top4suburbs from './components/top4suburbs/top4suburbs';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <top4suburbs />
      </Container>
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
