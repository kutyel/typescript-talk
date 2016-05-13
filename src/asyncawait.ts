import { accesoAlServidor, callGoogleMapsGeocodingAPI } from './geocoding';

// ejemplo de async/await

export async function main() {
    'use strict';

    // si la promesa falla, se ejecuta el catch
    try {
        const permission = await accesoAlServidor(100);

        // dependemos del servicio anterior para realizar el siguiente
        if (permission) {
            const geo = await callGoogleMapsGeocodingAPI();

            console.log(geo.results[0].formatted_address);
            console.log('Latitude', geo.results[0].geometry.location.lat);
            console.log('Longitude', geo.results[0].geometry.location.lng);
        }

    } catch (error) {
        console.error('No tiene permisos para acceder al servicio.');
    }
}
