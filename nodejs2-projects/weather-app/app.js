const request = require('request');
const yargs = require('yargs');

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


// in terminal type node app.js -a 'Enter some address text here'

let encodedAddress = encodeURIComponent(argv.address);
// encodeURIComponent takes a string like '1301 lombard street' and converts it to 1301%20lombard%20street

console.log(argv.address);
console.log(encodedAddress);

request({
    // url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=${keys.API_KEY}`,
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${keys.API_KEY}`,
    json: true
}, (error, response, body) => {
    if (error) {
        // System error
        console.log('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
        // Input error
        console.log('Unable to find that address.');
    } else if (body.status === "OK") {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});