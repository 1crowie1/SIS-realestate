import logo from './logo.svg';
import './App.css';
// import DoughnutChart from './components/Doughnut';
// import DoughnutChart from './Components/Doughnut';
// import BarChart from './Components/BarChart'
// import { Doughnut } from 'react-chartjs-2';
import Map from './components/Heatmap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridListingCard from './components/ListingCardComponent/GridListingCards';
// import Legend from './Components/Legend'

// import BarChart from './Components/BarChart'
// import { Doughnut } from 'react-chartjs-2';

const listings = [
  {
    address: '165 The River Road',
    suburb: 'Revesby',
    images: [],
    bathrooms: 2,
    bedrooms: 4,
    carSpaces: 5,
    price: 'CONTACT AGENT',
    url: 'https://www.realestate.com.au/property-house-nsw-revesby-139848355',
    images: ['https://i2.au.reastatic.net/1144x888-format=webp/f7b513b374ef0ef94f344b43c09d5d4cb0c2e000c3f5ba6f77c4c9f56ebe816f/image.jpg'],
  },
  {
    address: '10/38 Marshall Street',
    suburb: 'Bankstown',
    images: [],
    bathrooms: 1,
    bedrooms: 2,
    carSpaces: 1,
    price: 539000,
    url: 'https://www.realestate.com.au/property-unit-nsw-bankstown-140409731',
    images: ['https://i2.au.reastatic.net/1144x888-format=webp/d9e6540b284ab9bbf0d11baa4f252068178f48bef291a9271bad09bdcb66d6af/image.jpg']
  },
  {
    address: '5/44 Whittle Avenue',
    suburb: 'Milperra',
    bathrooms: 2,
    bedrooms: 3,
    carSpaces: 2,
    price: 845000,
    url: 'https://www.realestate.com.au/property-townhouse-nsw-milperra-140159731',
    images: ['https://i2.au.reastatic.net/1144x888-format=webp/e96ff39436963ebce4465ea6515ae720df95492006fb5580d76806685b01a9ae/image.jpg']
  },
  {
    address: '307/21 Leonard Street',
    suburb: 'Bankstown',
    bathrooms: 2,
    bedrooms: 2,
    carSpaces: 1,
    price: 569000,
    url: 'https://www.realestate.com.au/property-unit-nsw-bankstown-140131623',
    images: ['https://i2.au.reastatic.net/1144x888-format=webp/08604b2519c5d614642c732c67dd19d8bc7b71f9633e8514b434f8b6af63c9cd/image.jpg']
  }
]
function App() {

    
  return (

    <div className="div-1">
        <h1 className="Mid-header">HomeFinder</h1>
        <div className="heatmap">

            <Map />
            
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

                <div className="get-rec">
                    <div className="get-rec2"> 
                    <h2 className="Mid-header">Get Recommendation</h2>
                    </div>
                </div>
            </div>


            <div className="div-2">
                <h1>Recommendations</h1>
                <h1>Himanshu code here</h1>
                <button className="blue-Button">Get Recommendation </button>
            </div>


            <div className="div-2">
                <h1>Results</h1>
                <GridListingCard listings={listings} />
            </div>
                
        </div>
    </div>
    
    
  );
}

export default App;
