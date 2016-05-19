import $ from "jquery";
import API_KEY from "./apikey";
import * as Geocoding from "./interfaces";

const search = encodeURIComponent("Edificio Hispania, Alicante");
const SERVICE = `https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=${API_KEY}`;

// TODO: uff... esto está un poco desastrado, lo convertimos en una clase estática?

export function obtenerPermisos(milliseconds: number): Promise<boolean> {

    return new Promise<boolean>((resolve, reject) => {
        // este es un servidor caprichoso...
        if (Math.random() < 0.5) {
            reject("No se han podido comprobar los permisos.");
        }
        setTimeout(() => resolve(true), milliseconds);
    });
};

// TODO: encuentra todas las referencias a este servicio!
// TODO: renombra este servicio para comprobar la magia del refactoring!

export function callGoogleMapsGeocodingAPI(): Promise<Geocoding.RootObject> {

    return new Promise<Geocoding.RootObject>((resolve, reject) => {
        $.getJSON(SERVICE)
            .then(data => resolve(data))
            .fail(error => reject(error));
    });
};
