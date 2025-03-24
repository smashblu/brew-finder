import { useRef, useEffect } from 'react';
import '@/styles/styles.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

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
