function displayTime() {
  let londonElement = document.querySelector("#london");
  let londonDate = londonElement.querySelector(".date");
  let londonTime = londonElement.querySelector(".time");
  let londonDetail = moment().tz("Europe/London");
  londonDate.innerHTML = londonDetail.format("MMMM Do YYYY");
  londonTime.innerHTML = londonDetail.format("h:mm:ss [<small>] A [</small>]");

  let chicagoElement = document.querySelector("#chicago");
  let chicagoDate = chicagoElement.querySelector(".date");
  let chicagoTime = chicagoElement.querySelector(".time");
  let chicagoDetail = moment().tz("America/Chicago");
  chicagoDate.innerHTML = chicagoDetail.format("MMMM Do YYYY");
  chicagoTime.innerHTML = chicagoDetail.format(
    "h:mm:ss [<small>] A [</small>]"
  );
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyoDetail = moment().tz("Asia/tokyo");
  tokyoDate.innerHTML = tokyoDetail.format("MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoDetail.format("h:mm:ss [<small>] A [</small>]");

  let jamaicaElement = document.querySelector("#jamaica");
  let jamaicaDate = jamaicaElement.querySelector(".date");
  let jamaicaTime = jamaicaElement.querySelector(".time");
  let jamaicaDetail = moment().tz("Jamaica");
  jamaicaDate.innerHTML = jamaicaDetail.format("MMMM Do YYYY");
  jamaicaTime.innerHTML = jamaicaDetail.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}
displayTime();
setInterval(displayTime, 1000);

function cityDetail(event) {
  let cityName = event.target.value;
  let cityNameFormatted = cityName.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityName).format("MMMM Do YYYY");
  let cityTime = moment().tz(cityName).format("h:mm:ss [<small>]A[</small>]");
  let replaceCity = document.querySelector("#cities");
  replaceCity.innerHTML = `<div class="city">
          <div>
            <h2> ${cityNameFormatted}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
          </div> 
          <div class ="closing-link">
          <a href="/" class="back-to-homepage"> City List </a></div>`;
}

function showCurrentLocation() {
  let currentElement = moment.tz.guess();
  let currentElementName = currentElement.replace("_", " ").split("/")[1];
  let currentDate = moment.tz(currentElement).format("MMMM Do YYYY");
  let currentTime = moment
    .tz(currentElement)
    .format("h:mm:ss [<small>]A[</small>]");
  let replaceCity = document.querySelector("#cities");

  replaceCity.innerHTML = `<div class="city">
          <div>
            <h2> ${currentElementName}</h2>
            <div class="date">${currentDate}</div>
          </div>
          <div class="time">${currentTime}</div>
          </div> 
          <div class ="closing-link">
          <a href="/" class="back-to-homepage"> City List </a></div>`;
}

let selectedCity = document.querySelector("#city");
selectedCity.addEventListener("change", cityDetail);

let currentLocation = document.querySelector("#current");
currentLocation.addEventListener("click", showCurrentLocation);
