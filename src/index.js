//console.log("hello.");
const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken = "pk.eyJ1Ijoic2hpcmF0aWVlIiwiYSI6ImNqOGJxZ2RhdzAwbTAyd244b3VrOGF4bDAifQ.FtSG15i8FTMv0UcYkrjnaA";
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const marker = buildMarker("activity", [-74.009151, 40.705086]);
marker.addTo(map);

