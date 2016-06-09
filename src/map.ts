declare var L: any; // TODO: I want to have leaflet typings!!!

import { Geolocator } from './geolocation';

let geolocator = new Geolocator();

export async function init() {
    
    try {        
        // get current location

        let { latitude, longitude } = await geolocator.getPosition();

        // show position in map

        let map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map).bindPopup('You are here.').openPopup();

    } catch (err) {
        console.error(err);
    }
}
