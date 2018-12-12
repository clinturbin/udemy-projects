const request = require('request');

const keys = require('./keys');

console.log(keys.API_KEY);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=${keys.API_KEY}`,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
});