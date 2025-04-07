import { useRef, useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/mapbox';
import '@/styles/styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';

export function Main() {
  const [results, setResults] = useState([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const mapToken = 'pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw';
  const mapStyle = 'mapbox://styles/mapbox/streets-v12';
  const mapView = { longitude: -117.65, latitude: 34.1, zoom: 9 };

  function handleClick(e) {
    showPopup
    console.log('clicked:', e);
  }

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
            mapboxAccessToken={mapToken}
            initialViewState={mapView}
            mapStyle={mapStyle}
          />
        </div>
      </>
    )
  }
  return (
    <>
      <div id="sidebar">
        <div id="side-sub">
          <ZipForm setResults={setResults} />
          {results.map((breweries, index) => <ListItem brewery={breweries} listNum={index} key={index} />)}
        </div>
      </div>
      <div id="map">
        <Map
          mapboxAccessToken={mapToken}
          initialViewState={mapView}
          mapStyle={mapStyle}
        >

          {results.map((breweries, index) => <Marker
            longitude={breweries.longitude}
            latitude={breweries.latitude}
            anchor="bottom"
            onClick={handleClick}
            key={index}>
            <b>{index + 1}</b>
          </Marker>)}

          {results.map((breweries, index) => <Popup
            longitude={breweries.longitude}
            latitude={breweries.latitude}
            anchor="top"
            onClose={() => setShowPopup(false)}
            key={index}>
            <h3>{breweries.name}</h3>
            <p>{breweries.address_1}</p>
            <p>{breweries.city}, {breweries.state_province} {breweries.postal_code}</p>
          </Popup>)}
        </Map>
      </div>
    </>
  )
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

function ListItem({ brewery, listNum }) {
  return (
    <div className="list-item">
      <a>{listNum + 1}.</a>
      <a href={brewery.website_url} target="_blank">{brewery.name}</a>
    </div>
  )
}
