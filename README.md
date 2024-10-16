# Earthquake Visualization
  This project visualizes earthquake data from the US Geological Survey (USGS) using Leaflet.js for mapping and D3.js for dynamic color scaling.
The map displays recent earthquake events with markers that are sized based on magnitude and colored based on depth.
  The tool provides users with an interactive way to explore real-time earthquake data, raising awareness of seismic activity worldwide.

## Project Overview
![1-Logo](https://github.com/user-attachments/assets/5c4723c0-44c2-4f1c-bd83-439fb5e75dfd)

  The United States Geological Survey (USGS) provides scientific data about natural hazards, ecosystems, climate impacts,
and land-use changes. With a large amount of earthquake data collected globally each day, USGS needs a meaningful way to visualize this data for public education and decision-making.
  This project aims to solve that by visualizing real-time earthquake data from USGS on an interactive map.
The tool is designed to make earthquake data more accessible and visually intuitive, helping to raise awareness,
support disaster preparedness, and potentially secure funding for further research and prevention initiatives.

## Features
![Map](https://github.com/user-attachments/assets/ef0dcd1c-a1a1-4e1a-823e-25010fd071b5)



- Real-time Earthquake Data: Data is fetched from the USGS GeoJSON feed, which updates every 5 minutes.
- Marker Visualization:
- Size: Based on earthquake magnitude.
  - Color: Represents earthquake depth, with green for shallow earthquakes, yellow for medium-depth, and red for deep earthquakes.
- Interactive Popups: Clickable markers display details about the earthquake, including its location, magnitude, and depth.
- Legend: A color-coded legend explains how depth is represented on the map.

## How It Works
1. Earthquake Data Fetching:
![3-Data](https://github.com/user-attachments/assets/d7936e0e-d7d6-4496-bd60-1832b69ceb71)

The map fetches earthquake data using the USGS GeoJSON feed:

const earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
d3.json(earthquakeUrl).then(function(data) { plotEarthquakes(data.features);
});

![4-JSON](https://github.com/user-attachments/assets/24f5a381-9696-40a2-be82-d985ff4dde10)

2. Marker Creation:
The earthquake data is parsed to create circle markers. The size of each marker is proportional to
the earthquake's magnitude, and the color is determined by the earthquake's depth.
3. Color Scaling:
The color of each marker is determined by the depth of the earthquake, using a red-yellow-green
color scale.
4. Legend: A color-coded legend is added to the bottom-right corner of the map to provide context for the
depth color scale.

## Setup Instructions

### 1. Clone the Repository
To get started, clone the repository to your local machine:
git clone https://github.com/your-username/earthquake-visualization.git 
cd earthquake-visualization

### 2. Add Dependencies
Include the following CDN links in your index.html file:
<!-- Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"> <!-- Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<!-- D3.js -->
<script src="https://d3js.org/d3.v7.min.js"></script>

### 3. Run the Project
Open the index.html file in your browser to visualize the earthquake data.

## Limitations
- Data Latency: There may be a slight delay between the occurrence of an earthquake and its appearance on the map due to the update frequency of the USGS feed.
- Real-time Data Only: This map only visualizes recent earthquake data (up to one week). It does not include historical data.
- Rendering Performance: Large datasets might affect performance when rendering too many markers at once.

## Potential Uses
- Risk Assessment: Government agencies and planners can use this tool to identify earthquake-prone regions and prepare accordingly.
- Educational Tool: Teachers and educators can use this map to teach students about seismic activity, earthquake distribution, and geology.
- Public Awareness: This tool can help raise awareness among the general public about ongoing seismic activity worldwide.

## References:
Dataset created by the United States Geological Survey (http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
