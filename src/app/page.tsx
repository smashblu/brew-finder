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

export function ZipForm() {
  async function zipSearch(formData) {
    'use server';
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    <form action={zipSearch}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
