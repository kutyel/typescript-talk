export class Geolocator {

    private _navigator: Navigator;

    constructor() {
        if (this._isGeolocationAvailable()) {
            this._navigator = navigator;
        } else {
            console.log("Your browser does not support geolocation.");
        }
    }

    public getPosition(): Promise<Coordinates> {
        return new Promise((resolve, reject) =>
            this._navigator.geolocation
                .getCurrentPosition(({ coords, timestamp }) => resolve(coords),
                () => reject("We could not get your location.")));
    }

    private _isGeolocationAvailable(): boolean {
        return "geolocation" in navigator;
    }
}
