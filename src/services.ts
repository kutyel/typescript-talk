import $ from 'jquery';
import API_KEY from './apikey';
import * as Geocoding from './interfaces';

const search = encodeURIComponent('Edificio Hispania, Alicante');
const SERVICE = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${API_KEY}`;

export function obtenerPermisos(milliseconds: number): Promise<boolean> {
    'use strict';

    return new Promise<boolean>((resolve, reject) => {
        // este es un servidor caprichoso...
        if (Math.random() < 0.5) {
            reject(false);
        }
        setTimeout(() => resolve(true), milliseconds);
    });
};

export function callGoogleMapsGeocodingAPI(): Promise<Geocoding.RootObject> {
    'use strict';

    return new Promise<Geocoding.RootObject>((resolve, reject) => {
        $.getJSON(SERVICE)
            .then(data => resolve(data))
            .fail(error => reject(error));
    });
};
