import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import mapData from '../data/suburb-nsw-10.json';
import Legend from './Legend';
import "leaflet/dist/leaflet.css";
import './Map.css';

class Heatmap extends Component {
    state = { color: "#ffff00" };
  
    colors = ["green", "blue", "yellow", "orange", "grey"];
  
    componentDidMount() {
      console.log(mapData);
    }
  
    countryStyle = {
      fillColor: "red",
      fillOpacity: 1,
      color: "black",
      weight: 2,
    };
  
    printMesssageToConsole = (event) => {
      console.log("Clicked");
    };
  
    changeCountryColor = (event) => {
      event.target.setStyle({
        color: "green",
        fillColor: this.state.color,
        fillOpacity: 1,
      });
    };
  
    onEachCountry = (country, layer) => {
      const countryName = country.properties.ADMIN;
      console.log(countryName);
      layer.bindPopup(countryName);
  
      layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
      // const colorIndex = Math.floor(Math.random() * this.colors.length);
      // layer.options.fillColor = this.colors[colorIndex]; //0
  
      layer.on({
        click: this.changeCountryColor,
      });
    };
  
    colorChange = (event) => {
      this.setState({ color: event.target.value });
    };
  
    render() {
      return (
        <div>
          <h1 style={{ textAlign: "center" }}>My Map</h1>
          <MapContainer style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON
              style={this.countryStyle}
              data={mapData.features}
              onEachFeature={this.onEachCountry}
            />
          </MapContainer>
          <input
            type="color"
            value={this.state.color}
            onChange={this.colorChange}
          />
        </div>
      );
    }
}

// const Map = ()=>{
//     const [onselect, setOnselect] = useState({});
//     /* function determining what should happen onmouseover, this function updates our state*/
//     const highlightFeature = (e=> {
//         var layer = e.target;
//         const { County, Total, Male, Female, Intersex, Desnity } = e.target.feature.properties;
//         setOnselect({
//             county:County,
//             total:Total,
//             male:Male,
//             female:Female,
//             intersex:Intersex,
//             density: Desnity
//         });
//         layer.setStyle({
//             weight: 1,
//             color: "black",
//             fillOpacity: 1
//         });
//     });
//     /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
//     const resetHighlight= (e =>{
//         setOnselect({});
//         e.target.setStyle(style(e.target.feature));
//     })
//     /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
//      highlightFeature and resetHighlight*/
//     const onEachFeature= (feature, layer)=> {
//         layer.on({
//             mouseover: highlightFeature,
//             mouseout: resetHighlight,
//         });
//     }

//     const mapPolygonColorToDensity=(density => {
//         return density > 3023
//             ? '#a50f15'
//             : density > 676
//             ? '#de2d26'
//             : density > 428
//             ? '#fb6a4a'
//             : density > 236
//             ? '#fc9272'
//             : density > 23
//             ? '#fcbba1'
//             : '#fee5d9';
//     })
//     const style = (feature => {
//         return ({
//             fillColor: mapPolygonColorToDensity(feature.properties.Desnity),
//             weight: 1,
//             opacity: 1,
//             color: 'white',
//             dashArray: '2',
//             fillOpacity: 0.5
//         });
//     });
//     const mapStyle = {
//         height: '55vh',
//         width: '85%',
//         margin: '0 auto',
//     }
//     //   const feature = features.map(feature=>{
//     //     return(feature);
//     // });
//     return(
//          <div className='container'>
//             <div className="header">
//             <h2 className='heading'>Kenya Population as Per 2019 National Census Exercise</h2>
//             <p className="text-muted">A choropleth map displaying Kenya population density as per the national census conducted <br/>in 2019
//             Each County, details displayed by the map include, total population and number of each gender.</p></div>
//             <div className="">
//                 <div className="">
//                 {!onselect.county && (
//                 <div className="census-info-hover">
//                     <strong>Kenya population density</strong>
//                     <p>Hover on each county for more details</p>
//                 </div>
//                 )}
//                 {onselect.county && (
//                     <ul className="census-info">
//                        <li><strong>{onselect.county}</strong></li><br/>
//                         <li>Total Population:{onselect.total}</li>
//                         <li>Men:{onselect.male}</li>
//                         <li>Women:{onselect.female}</li>
//                         <li>Intersex:{onselect.intersex}</li>
//                         <li>Population density:{onselect.density} people <br/> per square km</li>
//                     </ul>
//                 )}
//                 <MapContainer zoom={6}
//                  scrollWheelZoom={true} 
//                   style={mapStyle} 
//                    center={[1.286389, 38.817223]}>
//                     
//                    {feature && (
//                     <GeoJSON data={feature} 
//                     style={style} 
//                     onEachFeature={onEachFeature}/>
//                     )}
//                 </MapContainer>
//                 </div>
//             </div>
//         </div>

//     )
// }

export default Heatmap;

