import { useRef, useEffect, useState } from 'react';
import '@/styles/styles.css';
import Map from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export function Main() {
  const [results, setResults] = useState([]);

  if (results.length === 0) {
    return (
      <>
        <div id="sidebar">
          <div id="side-sub">
            <ZipForm setResults={setResults} />
          </div>
        </div>
        <div id="map">
          <Map
            mapboxAccessToken="pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw"
            initialViewState={{
              longitude: -117.65,
              latitude: 34.1,
              zoom: 9
            }}
          />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div id="sidebar">
          <div id="side-sub">
            <ZipForm setResults={setResults} />
            {results.map((breweries, index) => <ListItem brewery={breweries} listNum={index} key={index} />)}
          </div>
        </div>
        <DrawMap />
      </>
    )
  }
}

function ZipForm({ setResults }) {
  const [zip, setZip] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchResults = await zipSearch(zip);
    setResults([...searchResults]);
  }

  async function zipSearch(zip) {
    const brewDB = 'https://api.openbrewerydb.org/v1/breweries';
    const byPostal = '?by_postal='
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

  return (
    <form onSubmit={handleSubmit}>
      <label>Zip Code:
        <input
          type="text"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export function Marker() {
  /* const Marker = ({ map, searchResults }) => {
  
    const markerRef = useRef()
  
    useEffect(() => {
      markerRef.current = new mapboxgl.Marker()
        .setLngLat([searchResults[index].latitude, searchResults[index].longitude])
        .addTo(map)
  
      return () => {
         markerRef.current.remove()
      }
    }, [])
  
    return null */
}

export function ListItem({ brewery, listNum }) {
  return (
    <div className="list-item">
      <a>{listNum + 1}.</a>
      <a href={brewery.website_url} target="_blank">{brewery.name}</a>
    </div>
  )
}
