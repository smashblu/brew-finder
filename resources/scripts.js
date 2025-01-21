mapboxgl.accessToken = 'pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw';
const map = new mapboxgl.Map({
        container: 'map',
        center: [-74.5, 40],
        zoom: 9
});

async function zipSearch(zip) {
        const byPostal = '?by_postal='
        try {
                const response = await fetch(`${brewDB}${byPostal}${zip}&per_page=3`);
                if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                console.log(json);
        } catch (error) {
                console.error(error.message);
        }
}

const brewDB = 'https://api.openbreydb.org/v1/breweries';
