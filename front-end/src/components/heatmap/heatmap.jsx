import React, { Component } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import mapData from '../data/suburb-nsw.json';
import Legend from './legend';
import "leaflet/dist/leaflet.css";
import './map.css';

class Heatmap extends Component {
    state = { color: "#ffff00" };
  
    colors = ["green", "blue", "yellow", "orange", "grey"];
  
    componentDidMount() {
      console.log(mapData);
    }

    countryStyle = {
      fillColor: "green",
      fillOpacity: 1,
      color: "black",
      weight: 2,
    };
  
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
  
    onEachCountry = (suburb, layer) => {
      const suburbName = suburb.properties.nsw_loca_2;
      layer.bindPopup(suburbName + '\nNo. of Listings: 0\nPrice: $1,000,000');
  
      layer.options.fillOpacity = Math.random(); //0-1 (0.1, 0.2, 0.3)
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
  
    render() {
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
          <input
            type="color"
            value={this.state.color}
            onChange={this.colorChange}
          />
          
          <Legend />
        </div>
      );
    }
}

export default Heatmap;

