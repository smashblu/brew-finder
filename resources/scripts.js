mapboxgl.accessToken = 'pk.eyJ1Ijoic21hc2hibHUiLCJhIjoiY201eDF0dTI5MDRpMTJqcTVieTNuZHNweCJ9.ynSYSc_J3rnPLBf9zR3rWw';
const map = new mapboxgl.Map({
        container: 'map',
        center: [-117.65, 34.1],
        zoom: 9
});

async function getUserInput() {
        const searchResults = await zipSearch(zipDialog.value);
        printList(searchResults);
        placeMarkers(searchResults);
        return;
}

async function zipSearch(zip) {
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

function printList(breweries) {
        document.querySelectorAll('.list-item').forEach(el => el.remove());
        for (const brewery of breweries) {
                const listDiv = document.createElement('div');
                const nameItem = document.createElement('a');
                divSidebar.appendChild(listDiv);
                listDiv.appendChild(nameItem);
                listDiv.setAttribute('class', 'list-item');
                nameItem.innerHTML = brewery.name;
                nameItem.setAttribute('href', brewery.website_url);
                nameItem.setAttribute('target', '_blank');
        }
        return;
}

function placeMarkers(breweries) {
        for (const brewery of breweries) {
                const location = [parseFloat(brewery.longitude), parseFloat(brewery.latitude)];
                const el = document.createElement('div');
                el.className = 'marker';
                new mapboxgl.Marker(el)
                        .setLngLat(location)
                        .setPopup(
                                new mapboxgl.Popup({ offset: 25 })
                                        .setHTML(
                                                `<h3>${brewery.name}</h3><p>${brewery.address_1}</p><p>${brewery.city}, ${brewery.state_province} ${brewery.postal_code}</p>`
                                        )
                        )
                        .addTo(map);
        }
}

const brewDB = 'https://api.openbrewerydb.org/v1/breweries';
const divSidebar = document.getElementById('sidebar');
const zipDialog = document.getElementById('locationWithZipCode');
const zipButton = document.getElementById('submitZip');

zipButton.addEventListener('click', getUserInput);
