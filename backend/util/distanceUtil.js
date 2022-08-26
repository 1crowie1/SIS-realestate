
// Example Code
// https://www.geeksforgeeks.org/program-distance-two-points-earth/
// let lat1 = 53.32055555555556;
// let lat2 = 53.31861111111111;
// let lon1 = -1.7297222222222221;
// let lon2 = -1.6997222222222223;
// document.write(distance(lat1, lat2,lon1, lon2) + " K.M");

const PI_IN_DEGREES = 180;
const RADIUS_OF_EARTH_IN_KM = 6371;
const RADIUS_OF_EARTH_IN_MILES = 3956;

export function getDistance(
    lat1,
    lat2, 
    lon1, 
    lon2,
    metric
) {
    lon1 = convertToRadians(lon1);
    lon2 = convertToRadians(lon2);
    lat1 = convertToRadians(lat1);
    lat2 = convertToRadians(lat2);

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    c = haversineFormula(dlon, dlat);

    // calculate the result
    if (metric === 'Miles') {
        return (c * RADIUS_OF_EARTH_IN_MILES);
    } else {
        // default to use KM
        (c * RADIUS_OF_EARTH_IN_KM);
    }
}

function haversineFormula(dlon, dlat) {
    let a = Math.pow(Math.sin(dlat / 2), 2)
        + Math.cos(lat1) * Math.cos(lat2)
        * Math.pow(Math.sin(dlon / 2),2);
    return 2 * Math.asin(Math.sqrt(a))
}

// The math module contains a function
// named toRadians which converts from
// degrees to radians.
function convertToRadians(degrees) {
    return degrees * Math.PI / PI_IN_DEGREES
}