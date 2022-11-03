// API KEY for weather app = 28c84dca0408e2e881c2b1eec812a185
"use strict"

/* Use the 5 Day Weather Forecast to retrieve weather data for cities. The base URL should look like the following: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate. */

let city;
const APIKEY = '28c84dca0408e2e881c2b1eec812a185';
const QUERYURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKEY;
// user-defined city selection


/* fetch(QUERYURL)
    .then((response) => {
        return response.json()
    })
    .then((data) => console.log(data))
*/

/* 
////////////////////////////////////////////
///////////////   TO-DO   //////////////////
////////////////////////////////////////////

1) Add city names to localStorage and display as a button
*/
searchBtn = document.querySelectorAll("#searchBtn");
/*
2) Connect fetch request from weather API
3) Connect requested API data to the page
4) Make the weather cards pretty

////////////////////////////////////////////
///////////////   CRITERIA   ///////////////
////////////////////////////////////////////

WHEN the user enters a city and clicks search
THEN a fetch request is made to weather API with defined var 'city'
THEN a new page is opened using page2.html wireframe
THEN information is dynically displayed on the page using response from weather API
THEN var 'city' is stored in local storage with a new button generated so the user can easily access that city again
*/
