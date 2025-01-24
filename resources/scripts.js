mapboxgl.accessToken = 'pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw';
const map = new mapboxgl.Map({
        container: 'map',
        center: [-74.5, 40],
        zoom: 9
});

async function getUserInput() {
        const searchResults = await zipSearch(zipDialog.value);
        printList(searchResults);
        return;
}

async function zipSearch(zip) {
        const byPostal = '?by_postal='
        try {
                const response = await fetch(`${brewDB}${byPostal}${zip}&per_page=3`);
                if (!response.ok) {
                        throw new Error(`Response status: ${response.status}`);
                }

                const brewSet = await response.json();
                return brewSet;
        } catch (error) {
                console.error(error.message);
        }
        return;
}

function printList(objArr) {
        for (const breweries of objArr) {
                console.log(breweries);
        }
        return;
}

const brewDB = 'https://api.openbrewerydb.org/v1/breweries';
const zipDialog = document.getElementById('locationWithZipCode');
const zipButton = document.getElementById('submitZip');

zipButton.addEventListener('click', getUserInput);
