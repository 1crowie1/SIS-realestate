
import React,{useState} from 'react';
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';
// import Legend from './legend';
import "leaflet/dist/leaflet.css";
import './map.css';
//import 'bootstrap/dist/css/bootstrap.min.css';


function ResultsMap({mapData}) {
    console.log("%cHeatmap Results", "color: red", mapData);
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
    //   console.log(event.properties.nsw_loca_2);
      return event.properties.nsw_loca_2;
    }

    const getPriceColor = (price) => {
        return price > 10000000
            ? '#ff0000'
            : price > 9000000
            ? '#ff1900'
            : price > 8000000
            ? '#ff3200'
            : price > 7000000
            ? '#ff4b00'
            : price > 6000000
            ? '#ff6400'
            : price > 5000000 
            ? '#ff7d00'
            : price > 4000000
            ? '#ff9600'
            : price > 3000000 
            ? '#ffaf00'
            : price > 2000000 
            ? '#ffc800'
            : price > 1000000 
            ? '#ffe100'
            : price > 900000 
            ? '#fffa00'
            : price > 800000 
            ? '#ebff00'
            : price > 700000 
            ? '#d2ff00'
            : price > 600000 
            ? '#a8ff00'
            : price > 500000 
            ? '#8dff01'
            : price > 400000 
            ? '#71ff03'
            : price > 300000 
            ? '#57ff04'
            : price > 200000 
            ? '#3cff05'
            : price > 100000 
            ? '#22ff07'
            : price > 50000 
            ? '#08ff08'
            : '#ffffff';
    }

    const getSuburbInList = (listing) => {
        return listing < 1
            ? '#ffffff'
            : listing < 2
            ? '#fe4100'
            : listing < 3
            ? '#fc5200'
            : listing < 4
            ? '#f96100'
            : listing < 5
            ? '#f56f00'
            : listing < 6
            ? '#f07c00'
            : listing < 7
            ? '#ea8800'
            : listing < 8
            ? '#e49400'
            : listing < 9
            ? '#dc9f00'
            : listing < 10
            ? '#d3aa00'
            : listing < 11
            ? '#cab400'
            : listing < 12
            ? '#bfbe00'
            : listing < 13
            ? '#b3c800'
            : listing < 14
            ? '#a6d100'
            : listing < 15
            ? '#97da00'
            : listing < 16
            ? '#85e300'
            : listing < 17
            ? '#70ec00'
            : listing < 18
            ? '#53f400'
            : listing < 19
            ? '#1cfc17'
            : '';
    }

    

    const style = (feature => {
        return ({
            fillColor: getSuburbInList(feature.properties.listing),
            weight: 1,
            opacity: 1,
            color: 'white',
            dashArray: '2',
            fillOpacity: 0.5
        });
    });
    const mapStyle = {
        height: '100vh',
        width: '100vw',
        margin: '0 auto',
    }
    
    const feature = mapData.features;
    //   mapData.map(feature=>{
    //     return(feature);
    // });
    if (mapData?.length === 0) {
        return (<></>);
    }
    return(
         <div>
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
            {/* <Legend /> */}
        </div>
    )
}
export default ResultsMap;