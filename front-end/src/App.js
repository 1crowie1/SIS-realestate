// Import Bootstrap
import Container from 'react-bootstrap/Container';
import './App.css';

// Import Components
import Header from './components/header';
import Heatmap from './components/heatmap/heatmap';
import Recommendations from './components/recommendations/recommendations';
import Footer from './components/footer';
import { Control } from 'leaflet';

function App() {
  return (
    <div className='App'>
      <Header />

      {/* HeatMap Section */}
      {/* <Container> */}
        <Heatmap />
      {/* </Container> */}

      {/* Get Recommendations */}
      <Container>
        <Recommendations />
      </Container>
    <Container>
      <Footer />
    </Container>

    </div>
  );
}

export default App;
