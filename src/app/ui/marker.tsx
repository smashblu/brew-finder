/* import { useEffect, useRef } from "react"
import mapboxgl from 'mapbox-gl'

const Marker = ({ map, searchResults }) => {

  const markerRef = useRef()

  useEffect(() => {
    markerRef.current = new mapboxgl.Marker()
      .setLngLat([searchResults[index].latitude, searchResults[index].longitude])
      .addTo(map)

    return () => {
       markerRef.current.remove()
    }
  }, [])

  return null
}

export default Marker */

export function TestScope() {
  return (
    <h1>{searchResults}</h1>
  )
}
