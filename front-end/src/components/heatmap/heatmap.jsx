import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import mapData from '../data/suburb-nsw.json';
import Legend from './legend';
import "leaflet/dist/leaflet.css";
import './map.css';

function getColor(d) {
  return d > 1000 ? '#800026' :
         d > 500  ? '#BD0026' :
         d > 200  ? '#E31A1C' :
         d > 100  ? '#FC4E2A' :
         d > 50   ? '#FD8D3C' :
         d > 20   ? '#FEB24C' :
         d > 10   ? '#FED976' :
                    '#FFEDA0';
}

function getSuburbColour(suburb_name) {
  if (suburb_name === 'SYDNEY') {
    return '#800026'; // 1001
  } else if (suburb_name === 'GLEBE') {
    return '#BD0026'; // 51
  } else if (suburb_name === 'WATERLOO') {
    return '#BD0026'; // 101
  } else if (suburb_name === 'ERSKINEVILLE') {
    return '#BD0026'; // 11
  } else if (suburb_name === 'ASHFIELD') {
    return '#FC4E2A'; // 11
  } else if (suburb_name === 'PARRAMATTA') {
    return '#E31A1C'; // 501
  } else if (suburb_name === 'BLACKTOWN') {
    return '#FEB24C'; // 201
  } else if (suburb_name === 'BANKSTOWN') {
    return '#FEB24C'; // 201
  } else if (suburb_name === 'RANDWICK') {
    return '#FED976'; // 21
  } else {
    return '#32CD32'; // 0
  }
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

class Heatmap extends Component {
    state = { color: "#ffff00" };
  
    colors = ["green", "blue", "yellow", "orange", "grey"];
  
    // componentDidMount() {
    //   console.log(mapData);
    // }   
  
    printMesssageToConsole = (event) => {
      console.log("Clicked");
    };
  
    // changeSuburbColor = (event) => {
    //   event.target.setStyle({
    //     color: "green",
    //     fillColor: this.state.color,
    //     fillOpacity: 1,
    //   });
    // };
    // displaySuburbData = (event) => {
    //   console.log(event.target.feature.properties.nsw_loca_2);
    //   return event.target.feature.properties.nsw_loca_2;
    // }

    countryStyle = (feature) => {
      return {
        fillColor: getSuburbColour(feature.properties.nsw_loca_2), // this.state.color = "green"
        fillOpacity: 0.6,
        color: "black",
        weight: 1,
        // dashArray: '2',
      };
    };
  
    onEachCountry = (suburb, layer) => {
      const suburbName = suburb.properties.nsw_loca_2;
      layer.bindPopup(suburbName + '\nNo. of Listings: 0\nPrice: $1,000,000');
  
      // layer.options.fillOpacity = randomIntFromInterval(0.4, 0.6) //Math.random(); //0-1 (0.1, 0.2, 0.3)
      // const colorIndex = Math.floor(Math.random() * this.colors.length);
      // layer.options.fillColor = this.colors[colorIndex]; //0
      // layer.on({
      //   click: this.changeCountryColor,
      // });
      layer.on({
        click: this.displaySuburbData,
      });
    };
  
    colorChange = (event) => {
      this.setState({ color: event.target.value });
    };

    render(suburbsAndAverages) {
      return (
        <div>
          {/* <h1 style={{ textAlign: "center" }}>My Map</h1> */}
          <MapContainer style={{ height: "80vh" }} zoom={13} center={[-33.86, 151.20]}>
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
          {/* <input
            type="color"
            value={this.state.color}
            onChange={this.colorChange}
          /> */}

          <Legend />
        </div>
      );
    }
  
    // render() {
    //   return (
    //     <div>
    //       {/* <h1 style={{ textAlign: "center" }}>My Map</h1> */}
    //       <MapContainer style={{ height: "80vh" }} zoom={13} center={[-33.86, 151.20]}>
    //         <TileLayer
    //             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         />
    //         <GeoJSON
    //           style={this.countryStyle}
    //           data={mapData.features}
    //           onEachFeature={this.onEachCountry}
    //         />
    //       </MapContainer>
    //       <input
    //         type="color"
    //         value={this.state.color}
    //         onChange={this.colorChange}
    //       />

    //       <Legend />
    //     </div>
    //   );
    // }
}

export default Heatmap;

