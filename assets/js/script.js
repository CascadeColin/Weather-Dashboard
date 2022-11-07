//found strict mode watching Web Dev Simplified and it seems to make debugging better
"use strict";


let city = "";
let searchBtnEl = document.querySelector("#searchBtn");
let newCityBtnEl = document.querySelector(".newCityBtn");
let inputEl = document.querySelector("input");
let todayCity = document.querySelector("#todayCity");
let todayCloud = document.querySelector("#todayCloud");
let todayTemp = document.querySelector("#todayTemp");
let todayWind = document.querySelector("#todayWind");
let todayHumidity = document.querySelector("#todayHumidity");
const APIKEY = "28c84dca0408e2e881c2b1eec812a185";
let dayOneEl = document.getElementById("dayOneEl");
let dayTwoEl = document.getElementById("dayTwoEl");
let dayThreeEl = document.getElementById("dayThreeEl");
let dayFourEl = document.getElementById("dayFourEl");
let dayFiveEl = document.getElementById("dayFiveEl");
let icon1 = document.getElementById("icon1");
let icon2 = document.getElementById("icon2");
let icon3 = document.getElementById("icon3");
let icon4 = document.getElementById("icon4");
let icon5 = document.getElementById("icon5");

searchBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  //checks for empty searches
  if (inputEl.value == "") {
    return;
  }
  city = inputEl.value;
  localStorage.setItem(city, city);
  let todayQuery =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&cnt=5&appid=28c84dca0408e2e881c2b1eec812a185&units=imperial";
  console.log(todayQuery);
  fetch(todayQuery)
    .then((response) => {
      return response.json();
    })
    .then((today) => {
      todayCityDate.textContent =
        today.name +
        ",    " +
        moment.unix(today.dt).format("MMM D, YYYY");
      todayTemp.textContent = "Temp: " + Math.round(today.main.temp) + " °F";
      todayCloud.src =
        "https://openweathermap.org/img/wn/" + today.weather[0].icon + ".png";
      todayCloud.alt = today.weather[0].description;
      todayWind.textContent = "Wind: " + Math.round(today.wind.speed) + " MPH";
      todayHumidity.textContent = "Humidity: " + today.main.humidity + " %";
    });
  let fiveDayQuery =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=28c84dca0408e2e881c2b1eec812a185&units=imperial";
  console.log(fiveDayQuery);
  fetch(fiveDayQuery)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //DAY 1
      dayOneEl.children[0].textContent =
        data.city.name +
        ", " +
        moment.unix(data.list[0].dt).format("MMM D, YYYY");
      icon1.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[0].weather[0].icon +
          ".png"
      );
      icon1.setAttribute("alt", data.list[0].weather[0].description);
      dayOneEl.children[2].textContent =
        "Temp: " + Math.round(data.list[0].main.temp) + " °F";
      dayOneEl.children[3].textContent =
        "Wind: " + Math.round(data.list[0].wind.speed) + " MPH";
      dayOneEl.children[4].textContent =
        "Humidity: " + data.list[0].main.humidity + " %";
      //DAY 2
      dayTwoEl.children[0].textContent =
        data.city.name +
        ", " +
        moment.unix(data.list[8].dt).format("MMM D, YYYY");
      icon2.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[8].weather[0].icon +
          ".png"
      );
      icon2.setAttribute("alt", data.list[8].weather[0].description);
      dayTwoEl.children[2].textContent =
        "Temp: " + Math.round(data.list[8].main.temp) + " °F";
      dayTwoEl.children[3].textContent =
        "Wind: " + Math.round(data.list[8].wind.speed) + " MPH";
      dayTwoEl.children[4].textContent =
        "Humidity: " + data.list[8].main.humidity + " %";
      //DAY 3
      dayThreeEl.children[0].textContent =
        data.city.name +
        ", " +
        moment.unix(data.list[16].dt).format("MMM D, YYYY");
      icon3.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[16].weather[0].icon +
          ".png"
      );
      icon3.setAttribute("alt", data.list[16].weather[0].description);
      dayThreeEl.children[2].textContent =
        "Temp: " + Math.round(data.list[16].main.temp) + " °F";
      dayThreeEl.children[3].textContent =
        "Wind: " + Math.round(data.list[16].wind.speed) + " MPH";
      dayThreeEl.children[4].textContent =
        "Humidity: " + data.list[16].main.humidity + " %";
      //DAY 4
      dayFourEl.children[0].textContent =
        data.city.name +
        ", " +
        moment.unix(data.list[24].dt).format("MMM D, YYYY");
      icon4.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[24].weather[0].icon +
          ".png"
      );
      icon4.setAttribute("alt", data.list[24].weather[0].description);
      dayFourEl.children[2].textContent =
        "Temp: " + Math.round(data.list[24].main.temp) + " °F";
      dayFourEl.children[3].textContent =
        "Wind: " + Math.round(data.list[24].wind.speed) + " MPH";
      dayFourEl.children[4].textContent =
        "Humidity: " + data.list[24].main.humidity + " %";
      //DAY 5
      dayFiveEl.children[0].textContent =
        data.city.name +
        ", " +
        moment.unix(data.list[32].dt).format("MMM D, YYYY");
      icon5.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[32].weather[0].icon +
          ".png"
      );
      icon5.setAttribute("alt", data.list[32].weather[0].description);
      dayFiveEl.children[2].textContent =
        "Temp: " + Math.round(data.list[32].main.temp) + " °F";
      dayFiveEl.children[3].textContent =
        "Wind: " + Math.round(data.list[32].wind.speed) + " MPH";
      dayFiveEl.children[4].textContent =
        "Humidity: " + data.list[32].main.humidity + " %";
    });
  createSearchTags();
})

//produces new city button and saves to localStorage
function createSearchTags() {
  city = inputEl.value;
  localStorage.setItem(city, city);
  let newCityBtn = document.createElement("button");
  newCityBtn.innerHTML = city;
  newCityBtn.style.color = "black";
  newCityBtn.style.width = "100%";
  newCityBtn.style.fontSize = "1rem";
  newCityBtn.classList.add("newCityBtn");
  document.getElementById("leftSide").appendChild(newCityBtn);
}

//FIXME: not working at all
//maybe set n=1 to skip search button and run it for any button?
function searchTags() {
  for (let n = 0; n < newCityBtnEl.length; n++) {
    newCityBtnEl[n].addEventListener("click", (e) => {
      e.preventDefault();
      console.log(newCityBtnEl[n].textContent);
      citySearch = newCityBtnEl[n].textContent;
      console.log(citySearch);
    });
  }
}

//calls localStorage so searchTags persist page reload
function init() {
  for (let i = 0; i < localStorage.length; i++) {
    // console.log(typeof localStorage.key(i))
    city = localStorage.key(i);
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