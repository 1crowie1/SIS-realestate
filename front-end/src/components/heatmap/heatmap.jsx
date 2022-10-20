import React, { Component, useState } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
// import mapData from '../data/suburb-nsw.json';
import mapData from '../data/test.json';
// import RealestateUtil from "../../util/RealestateUtil";

import Legend from './legend';
import "leaflet/dist/leaflet.css";
import './map.css';

function getSuburbColour(suburb_name) {
  if (suburb_name === 'SYDNEY') {
    return '#800026'; // 1001
  } else if (suburb_name === 'GLEBE') {
    return '#BD0026'; // 51
  } else if (suburb_name === 'ULTIMO') {
    return '#BD0026'; // 101
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

function getPriceColour(price){
  return price > 1300000 ? '#BD0026' :
         price > 1200000 ? '#E31A1C' :
         price > 1100000 ? '#FC4E2A' :
         price > 1000000 ? '#FD8D3C' :
         price > 900000 ? '#FEB24C' :
         price > 800000 ? '#CFB24C' :
         price > 700000 ? '#92CD32' :
         price > 700000 ? '#99FD32':
          '#ffffb2';
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
        fillColor: getPriceColour(feature.properties.price), // (feature.properties.nsw_loca_2), // this.state.color = "green"
        fillOpacity: 0.6,
        color: "black",
        weight: 1,
        // dashArray: '2',
      };
    };
  
    onEachCountry = (suburb, layer) => {
      const suburbName = suburb.properties.nsw_loca_2;
      const suburbPrice = suburb.properties.price;
      const suburbListing = suburb.properties.listing;
      layer.bindPopup(suburbName + '\nNo. of Listings: '+suburbListing+'\n Average Price: $' + suburbPrice);
  
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
            {/* <h1>{RealestateUtil.getGeoJSON([])}</h1> */}
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

