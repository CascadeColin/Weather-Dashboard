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

searchBtnEl.addEventListener("click", searchButton);

function searchButton(e) {
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
  fetch(todayQuery)
    .then((response) => {
      return response.json();
    })
    .then((today) => {
      todayCityDate.textContent =
        today.name + ": " + moment.unix(today.dt).format("MMM D, YYYY");
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
  fetch(fiveDayQuery)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //DAY 1
      dayOneEl.children[0].textContent =
        data.city.name +
        ": " +
        moment.unix(data.list[7].dt).format("MMM D, YYYY");
      icon1.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[7].weather[0].icon +
          ".png"
      );
      icon1.setAttribute("alt", data.list[7].weather[0].description);
      dayOneEl.children[2].textContent =
        "Temp: " + Math.round(data.list[7].main.temp) + " °F";
      dayOneEl.children[3].textContent =
        "Wind: " + Math.round(data.list[7].wind.speed) + " MPH";
      dayOneEl.children[4].textContent =
        "Humidity: " + data.list[7].main.humidity + " %";
      //DAY 2
      dayTwoEl.children[0].textContent =
        data.city.name +
        ": " +
        moment.unix(data.list[15].dt).format("MMM D, YYYY");
      icon2.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[15].weather[0].icon +
          ".png"
      );
      icon2.setAttribute("alt", data.list[15].weather[0].description);
      dayTwoEl.children[2].textContent =
        "Temp: " + Math.round(data.list[15].main.temp) + " °F";
      dayTwoEl.children[3].textContent =
        "Wind: " + Math.round(data.list[15].wind.speed) + " MPH";
      dayTwoEl.children[4].textContent =
        "Humidity: " + data.list[15].main.humidity + " %";
      //DAY 3
      dayThreeEl.children[0].textContent =
        data.city.name +
        ": " +
        moment.unix(data.list[23].dt).format("MMM D, YYYY");
      icon3.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[23].weather[0].icon +
          ".png"
      );
      icon3.setAttribute("alt", data.list[23].weather[0].description);
      dayThreeEl.children[2].textContent =
        "Temp: " + Math.round(data.list[23].main.temp) + " °F";
      dayThreeEl.children[3].textContent =
        "Wind: " + Math.round(data.list[23].wind.speed) + " MPH";
      dayThreeEl.children[4].textContent =
        "Humidity: " + data.list[23].main.humidity + " %";
      //DAY 4
      dayFourEl.children[0].textContent =
        data.city.name +
        ": " +
        moment.unix(data.list[31].dt).format("MMM D, YYYY");
      icon4.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[31].weather[0].icon +
          ".png"
      );
      icon4.setAttribute("alt", data.list[31].weather[0].description);
      dayFourEl.children[2].textContent =
        "Temp: " + Math.round(data.list[31].main.temp) + " °F";
      dayFourEl.children[3].textContent =
        "Wind: " + Math.round(data.list[31].wind.speed) + " MPH";
      dayFourEl.children[4].textContent =
        "Humidity: " + data.list[31].main.humidity + " %";
      //DAY 5
      dayFiveEl.children[0].textContent =
        data.city.name +
        ": " +
        moment.unix(data.list[39].dt).format("MMM D, YYYY");
      icon5.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" +
          data.list[39].weather[0].icon +
          ".png"
      );
      icon5.setAttribute("alt", data.list[39].weather[0].description);
      dayFiveEl.children[2].textContent =
        "Temp: " + Math.round(data.list[39].main.temp) + " °F";
      dayFiveEl.children[3].textContent =
        "Wind: " + Math.round(data.list[39].wind.speed) + " MPH";
      dayFiveEl.children[4].textContent =
        "Humidity: " + data.list[39].main.humidity + " %";
    });
  createSearchTags();
}

//produces new city button and saves to localStorage
function createSearchTags() {
  city = inputEl.value;
  localStorage.setItem(city, city);
  let newCityBtn = document.createElement("button");
  newCityBtn.innerHTML = city;
  newCityBtn.style.color = "#cccccc";
  newCityBtn.style.width = "100%";
  newCityBtn.style.fontSize = "1rem";
  newCityBtn.classList.add("newCityBtn", "btn", "btn-secondary");
  document.getElementById("leftSide").appendChild(newCityBtn);
}

document.getElementById("leftSide").addEventListener("click", (e) => {
  if (e.target && e.target.matches(".newCityBtn")) {
    city = e.target.textContent;
    let todayQuery =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&cnt=5&appid=28c84dca0408e2e881c2b1eec812a185&units=imperial";
    fetch(todayQuery)
      .then((response) => {
        return response.json();
      })
      .then((today) => {
        todayCityDate.textContent =
          today.name + ": " + moment.unix(today.dt).format("MMM D, YYYY");
        todayTemp.textContent = "Temp: " + Math.round(today.main.temp) + " °F";
        todayCloud.src =
          "https://openweathermap.org/img/wn/" + today.weather[0].icon + ".png";
        todayCloud.alt = today.weather[0].description;
        todayWind.textContent =
          "Wind: " + Math.round(today.wind.speed) + " MPH";
        todayHumidity.textContent = "Humidity: " + today.main.humidity + " %";
      });
    let fiveDayQuery =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=28c84dca0408e2e881c2b1eec812a185&units=imperial";
    fetch(fiveDayQuery)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //DAY 1
        dayOneEl.children[0].textContent =
          data.city.name +
          ": " +
          moment.unix(data.list[7].dt).format("MMM D, YYYY");
        icon1.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" +
            data.list[7].weather[0].icon +
            ".png"
        );
        icon1.setAttribute("alt", data.list[7].weather[0].description);
        dayOneEl.children[2].textContent =
          "Temp: " + Math.round(data.list[7].main.temp) + " °F";
        dayOneEl.children[3].textContent =
          "Wind: " + Math.round(data.list[7].wind.speed) + " MPH";
        dayOneEl.children[4].textContent =
          "Humidity: " + data.list[7].main.humidity + " %";
        //DAY 2
        dayTwoEl.children[0].textContent =
          data.city.name +
          ": " +
          moment.unix(data.list[15].dt).format("MMM D, YYYY");
        icon2.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" +
            data.list[15].weather[0].icon +
            ".png"
        );
        icon2.setAttribute("alt", data.list[15].weather[0].description);
        dayTwoEl.children[2].textContent =
          "Temp: " + Math.round(data.list[15].main.temp) + " °F";
        dayTwoEl.children[3].textContent =
          "Wind: " + Math.round(data.list[15].wind.speed) + " MPH";
        dayTwoEl.children[4].textContent =
          "Humidity: " + data.list[15].main.humidity + " %";
        //DAY 3
        dayThreeEl.children[0].textContent =
          data.city.name +
          ": " +
          moment.unix(data.list[23].dt).format("MMM D, YYYY");
        icon3.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" +
            data.list[23].weather[0].icon +
            ".png"
        );
        icon3.setAttribute("alt", data.list[23].weather[0].description);
        dayThreeEl.children[2].textContent =
          "Temp: " + Math.round(data.list[23].main.temp) + " °F";
        dayThreeEl.children[3].textContent =
          "Wind: " + Math.round(data.list[23].wind.speed) + " MPH";
        dayThreeEl.children[4].textContent =
          "Humidity: " + data.list[23].main.humidity + " %";
        //DAY 4
        dayFourEl.children[0].textContent =
          data.city.name +
          ": " +
          moment.unix(data.list[31].dt).format("MMM D, YYYY");
        icon4.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" +
            data.list[31].weather[0].icon +
            ".png"
        );
        icon4.setAttribute("alt", data.list[31].weather[0].description);
        dayFourEl.children[2].textContent =
          "Temp: " + Math.round(data.list[31].main.temp) + " °F";
        dayFourEl.children[3].textContent =
          "Wind: " + Math.round(data.list[31].wind.speed) + " MPH";
        dayFourEl.children[4].textContent =
          "Humidity: " + data.list[31].main.humidity + " %";
        //DAY 5
        dayFiveEl.children[0].textContent =
          data.city.name +
          ": " +
          moment.unix(data.list[39].dt).format("MMM D, YYYY");
        icon5.setAttribute(
          "src",
          "https://openweathermap.org/img/wn/" +
            data.list[39].weather[0].icon +
            ".png"
        );
        icon5.setAttribute("alt", data.list[39].weather[0].description);
        dayFiveEl.children[2].textContent =
          "Temp: " + Math.round(data.list[39].main.temp) + " °F";
        dayFiveEl.children[3].textContent =
          "Wind: " + Math.round(data.list[39].wind.speed) + " MPH";
        dayFiveEl.children[4].textContent =
          "Humidity: " + data.list[39].main.humidity + " %";
      });
  }
});

//calls localStorage so city buttons persist on page reload
function init() {
  for (let i = 0; i < localStorage.length; i++) {
    city = localStorage.key(i);
    let newCityBtn = document.createElement("button");
    newCityBtn.innerHTML = city;
    newCityBtn.style.color = "#cccccc";
    newCityBtn.style.width = "100%";
    newCityBtn.style.fontSize = "1rem";
    newCityBtn.classList.add("newCityBtn", "btn", "btn-secondary");
    document.getElementById("leftSide").appendChild(newCityBtn);
  }
}
init();