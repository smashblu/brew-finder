'use client';

import { useState, useRef, useEffect } from 'react';
import '@/styles/styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export default function Page() {
  return (
    <div className="full=page">
      <Header />
      <div className="main">
        <Sidebar />
        <DrawMap />
      </div>
    </div>
  )
}

export function Header() {
  return (
    <div className="header">
      <h1>
        <img src="brewfinder_logo.png" /> Brew Finder
      </h1>
    </div>
  )
}

export function Sidebar() {
  return (
    <div id="sidebar">
      <div id="side-sub">
        <ZipForm />
      </div>
    </div>
  )
}

export function DrawMap() {
  const mapRef = useRef()
  const mapContainerRef = useRef()

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw';
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [-117.65, 34.1],
      zoom: 9
    });

    return () => {
      mapRef.current.remove()
    }
  }, [])

  return (
    <>
      <div id="map" ref={mapContainerRef}/>
    </>
  )
}

function ZipForm() {
  const [zip, setZip] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const searchResults = await zipSearch(zip);
    console.log('results:', searchResults);
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
