import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
=======
<<<<<<< HEAD
import Map from './components/Heatmap';
import Legend from './components/Legend'

function App() {
    const rowStyle = {
        display: 'flex',
        // alignItems: 'center',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
    };
    const colStyle = {
        flexBasis: '50%',
        minWidth: '300px',
        textAlign: 'center',
        display: 'inline-block',
    }

=======
import DoughnutChart from './Components/Doughnut';

import BarChart from './Components/BarChart'
import { Doughnut } from 'react-chartjs-2';

function App() {

    
>>>>>>> b87241a9cca6f1e0ca9f12062fb2940f607fe260
>>>>>>> Stashed changes
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
                                <DoughnutChart/>
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
            <button className="blue-Button">Get Recommendation </button>
        </div>


        <div className="div-2">
            <h1>Results</h1>
            <h1>Amana Results page</h1>
        </div>
              
     
       
      
    </div>
  );
}

export default App;
