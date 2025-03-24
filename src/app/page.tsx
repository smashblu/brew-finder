'use client';

import { useState } from "react";
import '@/styles/styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

export default function Page() {
  return (
    <div className="full=page">
      <Header />
      <div className="main">
        <Sidebar />
      </div>
      <DrawMap />
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
  return (
    <div id="map">
      <h1>MAP</h1>
    </div>
  )
}

function ZipForm() {
  const [zip, setZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    zipSearch(zip);
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
