/// <reference path="../typings/main.d.ts" />

import { API_KEY } from './apikey';
import * as Geocoding from './interfaces';

const search = encodeURIComponent('Edificio Hispania, Alicante');
const SERVICE = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${API_KEY}`;

export function callGoogleMapsGeocodingAPI(): void {
    'use strict';

    $.getJSON(SERVICE, (data: Geocoding.RootObject) => {
        // console.log(JSON.stringify(data, undefined, 4));
        data.results.forEach(x => {
            console.log(x.formatted_address);
            console.log('Latitude', x.geometry.location.lat);
            console.log('Longitude', x.geometry.location.lng);
        });
    });
};
