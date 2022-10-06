import logo from './logo.svg';
import './App.css';

function App() {

    
  return (

    <div className="div-1">
        
        // title of the homepage 
        <h1 className="Mid-header">HomeFinder</h1>

        // after title page, heatmap has the heatmap
        <div className="heatmap"> // heatmap starts here 

            // genral box for suburb overlay 
            <div className="divi">

                // another box breaking down suburb over overlay 
                <div className="div-3">
                    
                    // start of Suburb 1 
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

                    // start of suburb 2
                    <div className="div-4">
                        <div className="suburb-2"> 
                            <p className = "text-1">MosMan</p>
                            <div className= "sub-flex"> 
                            <h1>1000</h1>
                            <div className="graph"> GRAPH</div>
                            </div>
                        </div>
                    </div>
                    
                    //start of suburb 3 
                    <div className="div-4">
                        <div className="suburb-3"> 
                            <p className = "text-1">MosMan</p>
                            <div className= "sub-flex"> 
                            <h1>1000</h1>
                            <div className="graph"> GRAPH</div>
                            </div>
                        </div>
                    </div>
                   
                   // start of suburb 4
                    <div className="div-4">
                        <div className="suburb-4"> 
                            <p className = "text-1">MosMan</p>
                            <div className= "sub-flex"> 
                            <h1>1000</h1>
                            <div className="graph"> GRAPH</div>
                            </div>
                        </div>
                    </div>

                // end of the second box breaking down suburb overlay     
                </div>
              
           // suburb overlay box 
            </div>

            //get reccommendation button placed ontop of the map
            <div className="get-rec">
                <div className="get-rec2"> 
                <h2 className="Mid-header">Get Recommendation</h2>
                </div>
            </div>

         // heatmap finishes here    
        </div>


        <div className="div-2">
            <h1>Recommendations</h1>
            <h1>Himanshu code here</h1>
            <button className="blue-Button">Get Recommendation </button>
        </div>

 AMANA's SECTION STARTS FROM HERE  
        <div className="div-2">
            <div className = "results-page"></div>
            <h1>  ***Insert logo*** RESULTS</h1>

            // start div for property listing
            <div className = "Property_Listing"> 
                <div className='Divii'>
                    <div className='div-5' >

        
                        // start of first property
                        <div className = "div-4">
                        <div ClassName = "house-1">
                        <div className="suburb-2"> 
                        // insert image 
                        </div>
                        </div>

                        <div ClassName = "house-1">
                        <div className="suburb-2"> 
                        <p className = "property-name">Property Name</p>
                        <p className = "bedroom">bedroom</p>
                        <p className = "bathroom">bathroom</p>
                        <p className = "price">$price</p>
                        </div>
                        </div>
                        </div> 

                        


                        // start of the second property
                        <div className = "div-4">
                        <div ClassName = "house-1">
                        <div className="suburb-2"> 
                        // insert image 
                        </div>
                        </div>

                        <div ClassName = "house-1">
                        <div className="suburb-2"> 
                        <p className = "property-name">Property Name</p>
                        <p className = "bedroom">bedroom</p>
                        <p className = "bathroom">bathroom</p>
                        <p className = "price">$price</p>
                        </div>
                        </div>
                        </div>



                        // start of the third property
                        <div className = "div-6">
                        <div ClassName = "house-1">
                        <div className="suburb-2"> 
                        // insert image 
                        </div>
                        </div>

                        <div ClassName = "house-1">
                        <div className="suburb-2"> 
                        <p className = "property-name">Property Name</p>
                        <p className = "bedroom">bedroom</p>
                        <p className = "bathroom">bathroom</p>
                        <p className = "price">$price</p>
                        </div>
                        </div>
                        </div>



                    </div>
                </div>
            
            
            // end div for property listing
            </div>



            // start div for property heatmap
            <div className = "Property_Heatmap"> 
            // end div for property heatmap
            </div>




            // start div for suburb breakdown 
            <div className = "Suburb_Breakdown"> 

            <div className = "div-6">
                        <div ClassName = "house-1">
                        <div className="suburb-2"> 
                        <h>Suburb breakdown</h>
                        <div className="graph-of-suburb-breakdown">suburn names</div>
                        <div>suburb names</div>

                        </div>
                        </div>
                        </div>
            
            // end div for suburb breakdown
            </div>


            // start div for suburb value 
            <div className = "Suburb_Value"> 

            <div className = "div-6">
                        <div ClassName = "property-name">
                        <div className="suburb-2"> 
                        <h>features</h>
                        <div className="property-features">features</div>
                        </div>
                        </div>
                        </div>



            <div className = "div-6">
                        <div ClassName = "house-1">
                        <div className="suburb-2"> 
                        <h>Suburb breakdown</h>
                        <div className="graph-of-suburb-breakdown">suburn names</div>
                        <div>suburb names</div>

                        </div>
                        </div>
                        </div>
            
            // end div for suburb value
            </div>
                        
            
        </div>
              
     
       
      
    </div>
     // i need to insert an image of the logo here
  );
}

export default App;
