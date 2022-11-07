//found strict mode watching Web Dev Simplified and it seems to make debugging MUCH better
"use strict"

let city = "";
let searchBtnEl = document.querySelector("#searchBtn");
let inputEl = document.querySelector("input");
let todayCity = document.querySelector("#todayCity");
let todayCloud = document.querySelector("#todayCloud");
let todayTemp = document.querySelector("#todayTemp");
let todayWind = document.querySelector("#todayWind");
let todayHumidity = document.querySelector("#todayHumidity");
const APIKEY = '28c84dca0408e2e881c2b1eec812a185';

/* Use the 5 Day Weather Forecast to retrieve weather data for cities. The base URL should look like the following: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate. */


/* 
////////////////////////////////////////////
///////////////   TO-DO   //////////////////
////////////////////////////////////////////

1) Add city names to localStorage and display as a button
*/

searchBtnEl.addEventListener("click", e => {
    e.preventDefault();
    //checks for empty searches
    if (inputEl.value != "") {
        city = inputEl.value;
        localStorage.setItem(city, city);
    }

    let todayQuery = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&cnt=5&appid=28c84dca0408e2e881c2b1eec812a185&units=imperial';
    console.log(todayQuery);
    fetch(todayQuery)
    .then((response) => {
        return response.json()
    })
    // FIXME: COMPLETE: commented out to save on API reqs
    /*
    .then((today) => {
        todayCityDate.textContent = today.name + ",    " + moment.unix(today.dt).format("MMM D, YYYY");
        // .moment().format("MMM DD, YYYY");
        todayTemp.textContent = "Temp: " + Math.round(today.main.temp) + " °F";
        todayCloud.src="https://openweathermap.org/img/wn/" + today.weather[0].icon + ".png";
        todayCloud.alt=today.weather[0].description;
        todayWind.textContent = "Wind: " + Math.round(today.wind.speed) + " MPH";
        todayHumidity.textContent = "Humidity: " + today.main.humidity + " %";
    })
    */
/*
    FIXME: plug API data into DOM, add date with moment.js
    let fiveDayQuery = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=28c84dca0408e2e881c2b1eec812a185&units=imperial';
    console.log(fiveDayQuery);
    fetch(fiveDayQuery)
    .then((response) => {
        return response.json()
    })
    .then((five) => console.log(five))
*/
})


function init() {
    for (let i=0; i<localStorage.length; i++) {
        // console.log(typeof localStorage.key(i))
        city = localStorage.key(i)
        let newCityBtn = document.createElement("button");
        newCityBtn.innerHTML = city;
        newCityBtn.style.color = "black";
        newCityBtn.style.width = "100%";
        newCityBtn.style.fontSize = "1rem";
        newCityBtn.classList.add("newCityBtn");
        document.getElementById("leftSide").appendChild(newCityBtn);
        
    }
}
init();

//Grabs the city name from buttons that are created as a result of previous searches
//TO-DO connect to API to allow these buttons to search and display weather data
//searchkey: prevSearch
//FIXME: cannot search results without refreshing page
let newCityBtnEl = document.querySelectorAll(".newCityBtn");
for (let i=0; i<newCityBtnEl.length; i++) {
    newCityBtnEl[i].addEventListener("click", e => {
        e.preventDefault();
        // console.log(newCityBtnEl[i].textContent);
        city = newCityBtnEl[i].textContent;
        console.log(city);
    })
}

/*
2) Connect fetch request from weather API
    -connect main search button
    -connect dynamically created buttons (searchkey: prevSearch)
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
