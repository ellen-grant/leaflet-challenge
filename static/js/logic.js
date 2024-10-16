// Initialize the map
let map = L.map('map').setView([37.7749, -122.4194], 5);

// Add a tile layer (the map's background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap contributors'
}).addTo(map);

// Fetch earthquake data from USGS
const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(earthquakeUrl).then(function(data) {
    plotEarthquakes(data.features);
});

// Function to plot earthquakes on the map
function plotEarthquakes(earthquakeData) {
    earthquakeData.forEach(function(earthquake) {
        let coordinates = earthquake.geometry.coordinates;
        let magnitude = earthquake.properties.mag;
        let depth = coordinates[2]; // depth is the third value in coordinates

        // Create circle markers using the red-yellow-green color scale based on depth
        L.circleMarker([coordinates[1], coordinates[0]], {
            radius: magnitude * 4, // size based on magnitude
            fillColor: getColor(depth),  // color based on depth
            color: "#000",
            weight: 1,
            fillOpacity: 0.8
        })
        .bindPopup(`<strong>Location:</strong> ${earthquake.properties.place}<br>
                    <strong>Magnitude:</strong> ${magnitude}<br>
                    <strong>Depth:</strong> ${depth}`)
        .addTo(map);
    });
}

// Function to determine color based on earthquake depth (using a red-yellow-green scale)
function getColor(depth) {
    // Correct the color scale so that deep earthquakes are red, shallow ones are green
    let colorScale = d3.scaleSequential(d3.interpolateRdYlGn).domain([90, -10]); 
    return colorScale(depth);
}

// Create and add a proper legend
let legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    let div = L.DomUtil.create('div', 'info legend'),
        grades = [-10, 10, 30, 50, 70, 90], // Adjust grades to better represent depths
        labels = [];

    let colorScale = d3.scaleSequential(d3.interpolateRdYlGn).domain([90, -10]);

    // Loop through depth intervals and generate labels with corresponding color squares
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colorScale(grades[i]) + '; width: 20px; height: 20px; display: inline-block;"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);
