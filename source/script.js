function displayTime() {
  let nigeriaElement = document.querySelector("#nigeria");
  let nigeriaDate = nigeriaElement.querySelector(".date");
  let nigeriaTime = nigeriaElement.querySelector(".time");
  let nigeriaDetail = moment().tz("Africa/Lagos");
  nigeriaDate.innerHTML = nigeriaDetail.format("MMMM Do YYYY");
  nigeriaTime.innerHTML = nigeriaDetail.format(
    "h:mm:ss [<small>] A [</small>]"
  );
  let chicagoElement = document.querySelector("#chicago");
  let chicagoDate = chicagoElement.querySelector(".date");
  let chicagoTime = chicagoElement.querySelector(".time");
  let chicagoDetail = moment().tz("America/Chicago");
  chicagoDate.innerHTML = chicagoDetail.format("MMMM Do YYYY");
  chicagoTime.innerHTML = chicagoDetail.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let jamaicaElement = document.querySelector("#jamaica");
  let jamaicaDate = jamaicaElement.querySelector(".date");
  let jamaicaTime = jamaicaElement.querySelector(".time");
  let jamaicaDetail = moment().tz("Jamaica");
  jamaicaDate.innerHTML = jamaicaDetail.format("MMMM Do YYYY");
  jamaicaTime.innerHTML = jamaicaDetail.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyoDetail = moment().tz("Asia/tokyo");
  tokyoDate.innerHTML = tokyoDetail.format("MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoDetail.format("h:mm:ss [<small>] A [</small>]");
}
displayTime();
setInterval(displayTime, 1000);
