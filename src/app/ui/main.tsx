import "@/styles/main.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { FormButton, FormInput, FormLabel } from "@/ui/buttons";

export async function Sidebar() {
  async function handleClick(e) {
    const userZip = e.get("zip");
    if (userZip) {
      const searchResults = await zipSearch(userZip);
      console.log(searchResults);
    }
  }

  return (
    <div id="sidebar">
      <div id="sub-side">
        <form action={handleClick}>
          <FormLabel
            htmlfor={"location-with-zip"}
            style={"form-label"}
            text={"Zip Code"}
          />
          <div className="side-input">
            <FormInput
              type={"text"}
              style={"form-control"}
              id={"location-with-zip"}
              placeholder={"12345"}
            />
          </div>
          <div className="side-button">
            <FormButton text={"Submit"} style={"side-button"} />
          </div>
        </form>
      </div>
    </div>
  );
}

async function zipSearch(zip) {
  const brewDB = "https://api.openbrewerydb.org/v1/breweries";
  const byPostal = "?by_postal=";
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

export function Mapbox() {
  mapboxgl.accessToken = "pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw";
  const map = new mapboxgl.Map({
    container: "map",
    center: [-117.65, 34.1],
    zoom: 9,
  });

  return <div id="map"></div>;
}