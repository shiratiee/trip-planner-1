const mapboxgl = require("mapbox-gl");

const iconURLs = {
    hotels:  'http://i.imgur.com/D9574Cu.png',
    activity:  'http://i.imgur.com/WbMOfMl.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png'
}

function buildMarker(type, Coordinates) {
const markerDomEl = document.createElement("div");
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = "url(" + iconURLs[type] + ")" ;
    return new mapboxgl.Marker(markerDomEl).setLngLat(Coordinates)
}

module.exports = buildMarker;