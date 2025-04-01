import { useRef, useEffect, useState } from 'react';
import '@/styles/styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl/mapbox';

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
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
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

export function ListItem({ brewery, listNum }) {
  return (
    <div className="list-item">
      <a>{listNum + 1}.</a>
      <a href={brewery.website_url} target="_blank">{brewery.name}</a>
    </div>
  )
}
