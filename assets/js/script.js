// API KEY for weather app = 28c84dca0408e2e881c2b1eec812a185
"use strict"

/* Use the 5 Day Weather Forecast to retrieve weather data for cities. The base URL should look like the following: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate. */

let city = 'Seattle'
const APIKEY = '28c84dca0408e2e881c2b1eec812a185';
const QUERYURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKEY;
// user-defined city selection

fetch(QUERYURL)
    .then((response) => {
        return response.json()
    })
    .then((data) => console.log(data))
