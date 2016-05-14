import { obtenerPermisos, callGoogleMapsGeocodingAPI } from './services';

// ejemplo de async/await

export async function main(): Promise<void> {
    'use strict';

    try {
        const permission = await obtenerPermisos(100);

        if (permission) {
            const geo = await callGoogleMapsGeocodingAPI();

            console.log('City:', geo.results[0].formatted_address);
            console.log('Latitude:', geo.results[0].geometry.location.lat);
            console.log('Longitude:', geo.results[0].geometry.location.lng);
        }

    } catch (err) {
        console.error('Tiene permisos:', err);
    }
}
