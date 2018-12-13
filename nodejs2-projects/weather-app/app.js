const request = require('request');

// const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const keys = require('./keys');

// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;


// in terminal type node app.js -a 'Enter some address text here'

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

let lat = '39.9444071';
let lng = '-75.1631719';

request({
    url: `https://api.darksky.net/forecast/${keys.DARK_SKY}/37.8267,-122.4233`,
    json: true
}, (error, response, body) => {
    (!error && response.statusCode === 200) 
    ? console.log(body.currently.temperature) 
    : console.log('Unable to fetch weather');

    // if (!error && response.statusCode === 200) {
    //     console.log(body.currently.temperature);
    // } else {
    //     console.log('Unable to fetch weather');
    // }

    // if (error) {
    //     console.log('Unable to connect to server.');
    // } else if (response.statusCode === 404) {
    //     console.log('Unable to fetch weather.')
    // } else if (response.statusCode === 200) {
    //     console.log(body.currently.temperature);
    // }
});