'use client'

import '@/styles/main.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'

export function FormLabel({ text, style, htmlfor }) {
  return (
    <label htmlFor={htmlfor} className={style}>{text}</label>
  )
}

export function FormButton({ text, style, handleClick }) {
  return (
    <button className={style}>{text}</button>
  )
}

export function FormInput({ type, style, id, placeholder }) {
  return (
    <input name='zip' type={type} className={style} id={id} placeholder={placeholder}></input>
  )
}

export function Sidebar() {
  function handleClick(e) {
    const zipCode = e.get('zip')
    if (zipCode) {
      return <h1>{zipCode}</h1>
    }
  }
  return (
    <div id="sidebar">
      <div id="sub-side">
        <form action={handleClick}>
          <FormLabel htmlfor={'location-with-zip'} style={'form-label'} text={'Zip Code'} />
          <div className="side-input">
            <FormInput type={'text'} style={'form-control'} id={'location-with-zip'} placeholder={'12345'} />
          </div>
          <div className="side-button">
            <FormButton text={'Submit'} style={'side-button'} />
          </div>
        </form>
      </div>
    </div>
  )
}

export function Mapbox() {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw';
  const map = new mapboxgl.Map({
          container: 'map',
          center: [-117.65, 34.1],
          zoom: 9
  });

  return (
    <div id="map"></div>
  )
}