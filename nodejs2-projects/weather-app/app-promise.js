const yargs = require('yargs');
const axios = require('axios');

const keys = require('./keys');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keys.API_KEY}`;

axios.get(geocodeURL)
.then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }

    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    let weatherURL = `https://api.darksky.net/forecast/${keys.DARK_SKY}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherURL)
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}.`);
})
.catch((error) => {
    if (error.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(error.message);
    }
});



