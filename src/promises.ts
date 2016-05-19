import { obtenerPermisos, callGoogleMapsGeocodingAPI } from "./services";

// ejemplo con promesas

export function main(): void {
    "use strict";

    obtenerPermisos(100)
        .then(permission => {
            if (permission) {
                return callGoogleMapsGeocodingAPI();
            } else {
                return new Promise((res, rej) => rej(false));
            }
        })
        .then(geo => {
            console.log("City:", geo.results[0].formatted_address);
            console.log("Latitude:", geo.results[0].geometry.location.lat);
            console.log("Longitude:", geo.results[0].geometry.location.lng);
        })
        .catch(err => console.error(err));
}
