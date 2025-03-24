import '@/styles/main.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export function Sidebar() {
  return (
    <div id="sidebar">
      <div id="sub-side">
      </div>
    </div>
  );
}

async function zipSearch(zip) {
  const brewDB = 'https://api.openbrewerydb.org/v1/breweries';
  const byPostal = '?by_postal=';
  try {
    const response = await fetch(`${brewDB}${byPostal}${zip}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const brewSet = await response.json();
    return brewSet;
  } catch (error) {
    console.error(error.message);
  }
  return [];
}

export function CreateMap() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw';
  const map = new mapboxgl.Map({
    container: 'map',
    center: [-117.65, 34.1],
    zoom: 9
  });
}