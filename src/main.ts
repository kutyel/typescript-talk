import { Person } from './person';
import { callGoogleMapsGeocodingAPI } from './geocoding';

// rename this variable
let people: Person[] = [];

people.push(new Person('Flavio', 25));
people.push(new Person('David', 22));

console.log(people);

callGoogleMapsGeocodingAPI();
