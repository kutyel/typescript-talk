import { accesoAlServidor, callGoogleMapsGeocodingAPI } from './geocoding';

// ejemplo con promesas

export function main(): void {
    'use strict';

    accesoAlServidor(100)
        .then(permission => {
            if (permission) {
                return callGoogleMapsGeocodingAPI();
            }
        })
        .then(geo => {
            console.log(geo.results[0].formatted_address);
            console.log('Latitude', geo.results[0].geometry.location.lat);
            console.log('Longitude', geo.results[0].geometry.location.lng);
        })
        .catch(error => {
            console.error('No tiene permisos para acceder al servicio.');
        });
}
