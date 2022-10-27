
import React,{useState} from 'react';
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
// import {features} from '../data/data.json';
import mapData from '../data/test.json';
import Legend from './legend';
import "leaflet/dist/leaflet.css";
import './map.css';
//import 'bootstrap/dist/css/bootstrap.min.css';


const Map = ()=>{
    // const [onselect, setOnselect] = useState({});
    /* function determining what should happen onmouseover, this function updates our state*/
    // const highlightFeature = (e=> {
    //     var layer = e.target;
    //     const { County, Total, Male, Female, Intersex, Desnity } = e.target.feature.properties;
    //     setOnselect({
    //         county:County,
    //         total:Total,
    //         male:Male,
    //         female:Female,
    //         intersex:Intersex,
    //         density: Desnity
    //     });
    //     layer.setStyle({
    //         weight: 1,
    //         color: "black",
    //         fillOpacity: 1
    //     });
    // });
    /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
    // const resetHighlight= (e =>{
    //     setOnselect({});
    //     e.target.setStyle(style(e.target.feature));
    // })
    /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
     highlightFeature and resetHighlight*/
    const onEachFeature = (feature, layer)=> {
        const suburbName = feature.properties.nsw_loca_2;
        const suburbPrice = feature.properties.price;
        const suburbListing = feature.properties.listing;
        layer.bindPopup(suburbName + '\nNo. of Listings: '+suburbListing+'\n Average Price: $' + suburbPrice);
        // layer.on({
        //     mouseover: highlightFeature,
        //     mouseout: resetHighlight,
        // });
        layer.on({
            click: displaySuburbData(feature),
        });
    }

    const displaySuburbData = (event) => {
      console.log(event.properties.nsw_loca_2);
      return event.properties.nsw_loca_2;
    }

    const getPriceColor = (price) => {
        return price > 10000000
            ? '#e71414'
            : price > 9000000
            ? '#df2016'
            : price > 8000000
            ? '#d72d18'
            : price > 7000000
            ? '#cf391a'
            : price > 6000000
            ? '#c7451c'
            : price > 5000000 
            ? '#c0521e'
            : price > 4000000
            ? '#b85e20'
            : price > 3000000 
            ? '#b06b22'
            : price > 2000000 
            ? '#a87724'
            : price > 1000000 
            ? '#a08326'
            : price > 900000 
            ? '#989028'
            : price > 800000 
            ? '#909c2a'
            : price > 700000 
            ? '#88a82c'
            : price > 600000 
            ? '#80b52e'
            : price > 500000 
            ? '#78c130'
            : price > 400000 
            ? '#71ce32'
            : price > 300000 
            ? '#69da34'
            : price > 200000 
            ? '#61e636'
            : price > 100000 
            ? '#59f338'
            : price > 50000 
            ? '#51ff3a'
            : '#ffffff';
    }

    const style = (feature => {
        return ({
            fillColor: getPriceColor(feature.properties.price),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.5
        });
    });
    const mapStyle = {
        height: '100vh',
        // width: '85%',
        margin: '0 auto',
    }
    
    const feature = mapData.features;
    //   mapData.map(feature=>{
    //     return(feature);
    // });
    return(
         <div className='container'>
            {/* {!onselect.county && (
            <div className="census-info-hover">
                <strong>Kenya population density</strong>
                <p>Hover on each county for more details</p>
            </div>
            )}
            {onselect.county && (
                <ul className="census-info">
                    <li><strong>{onselect.county}</strong></li><br/>
                    <li>Total Population:{onselect.total}</li>
                    <li>Men:{onselect.male}</li>
                    <li>Women:{onselect.female}</li>
                    <li>Intersex:{onselect.intersex}</li>
                    <li>Population density:{onselect.density} people <br/> per square km</li>
                </ul>
            )} */}
            <MapContainer zoom={13}
                scrollWheelZoom={false} 
                style={mapStyle} 
                center={[-33.86, 151.20]}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {feature && (
                <GeoJSON data={feature} 
                style={style} 
                onEachFeature={onEachFeature}/>
                )}
            </MapContainer>
            {/* <input
                type="color"
                value={this.state.color}
                onChange={this.colorChange}
            /> */}
        </div>

    )
}
export default Map;