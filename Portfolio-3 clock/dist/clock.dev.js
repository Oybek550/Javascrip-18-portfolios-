"use strict";

function clock() {
  var timenow = new Date();
  var hrs = timenow.getHours();
  var min = timenow.getMinutes();
  var sec = timenow.getSeconds();
  setInterval(point, 2000);
  document.getElementById('hours').innerHTML = hrs;
  document.getElementById('minute').innerHTML = min;
  document.getElementById('secon').innerHTML = sec;
}

setInterval(clock, 10);