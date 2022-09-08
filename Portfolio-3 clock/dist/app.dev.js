"use strict";

function clock() {
  var timenow = new Date();
  document.querySelector(".hours").hours = timenow.getHours();
  document.querySelector('minute').minute = timenow.getMinutes();
  document.querySelector(".second").second = timenow.getSeconds();
}

setInterval(function () {
  clock();
}, 1000);
console.log(clock);