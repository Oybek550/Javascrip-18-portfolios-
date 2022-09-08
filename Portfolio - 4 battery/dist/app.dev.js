"use strict";

navigator.getBattery().then(function (battery) {
  var percantage = document.querySelector(".percantage");
  var numberpercent = document.querySelector(".numberpercent");
  var text = document.querySelector(".text");

  function show() {
    zayryanchikniuqqanda();
    pop();
  }

  show();

  function pop() {
    percantage.style.width = battery.level * 100 + '%';
    numberpercent.innerHTML = battery.level * 100 + '%';
  }

  function zayryanchikniuqqanda() {
    text.innerHTML = battery.charging ? "your device charging" : "";
  }

  battery.addEventListener('levelchange', function () {
    pop();
  });
  battery.addEventListener('chargingchange', function () {
    zayryanchikniuqqanda();
  });
});