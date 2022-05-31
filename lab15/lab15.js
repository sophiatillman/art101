/*
*Author:Sophia
*Created: 17 May
*License:Public Domain
*/
/*
*Author:Sophia
*Created: 19 May
*License:Public Domain
*/
if (window.navigator.geolocation) {
 // Geolocation available
}
window.navigator.geolocation
  .getCurrentPosition(console.log, console.log);
getCurrentPosition(successCallback, failureCallback);
{
  coords = {
    latitude: 51.4554803,
    longitude: -2.0843058,
    altitude: null,
    accuracy: 49,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  },
  timestamp: 1583860898576
}
const successfulLookup = position => {
  const { latitude, longitude } = position.coords;
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`)
    .then(response => response.json();
    .then(console.log); // Or do whatever you want with the result
    window.navigator.geolocation
      .getCurrentPosition(successfulLookup, console.log);
      results[0].formatted; // Gives something like '54, My street, My Town, My Post Code, My Country




const myElement = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
nction getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
