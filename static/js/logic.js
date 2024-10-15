// Create the map object with a center and zoom level
let map = L.map('map').setView([37.7749, -122.4194], 5); // Center the map on the USA with a zoom of 5

// Add a tile layer (the background map image)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


