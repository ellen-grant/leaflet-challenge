# Earthquake Visualization
  This project visualizes earthquake data from the US Geological Survey (USGS) using Leaflet.js for mapping and D3.js for dynamic color scaling.
The map displays recent earthquake events with markers that are sized based on magnitude and colored based on depth.
  The tool provides users with an interactive way to explore real-time earthquake data, raising awareness of seismic activity worldwide.

## Project Overview
  The United States Geological Survey (USGS) provides scientific data about natural hazards, ecosystems, climate impacts,
and land-use changes. With a large amount of earthquake data collected globally each day, USGS needs a meaningful way to visualize this data for public education and decision-making.
  This project aims to solve that by visualizing real-time earthquake data from USGS on an interactive map.
The tool is designed to make earthquake data more accessible and visually intuitive, helping to raise awareness,
support disaster preparedness, and potentially secure funding for further research and prevention initiatives.

## Features
- Real-time Earthquake Data: Data is fetched from the USGS GeoJSON feed, which updates every 5 minutes.
- Marker Visualization:
- Size: Based on earthquake magnitude.
  - Color: Represents earthquake depth, with green for shallow earthquakes, yellow for medium-depth, and red for deep earthquakes.
- Interactive Popups: Clickable markers display details about the earthquake, including its location, magnitude, and depth.
- Legend: A color-coded legend explains how depth is represented on the map.

## How It Works
1. Earthquake Data Fetching:
The map fetches earthquake data using the USGS GeoJSON feed:

const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(earthquakeUrl).then(function(data) { plotEarthquakes(data.features);
});

2. Marker Creation:
The earthquake data is parsed to create circle markers. The size of each marker is proportional to
the earthquake's magnitude, and the color is determined by the earthquake's depth.
3. Color Scaling:
The color of each marker is determined by the depth of the earthquake, using a red-yellow-green
color scale.
4. Legend: A color-coded legend is added to the bottom-right corner of the map to provide context for the
depth color scale.
