"use strict";

var alertbutton = document.querySelector('button');
var alerts = document.querySelector('.alert');
var closeBtn = document.querySelector('.close-btn');
alertbutton.addEventListener('click', function () {
  alerts.classList.add("showAlert");
  alerts.classList.remove("hide");
  alerts.classList.add("show");
});
closeBtn.addEventListener('click', function () {
  alerts.classList.remove("show");
  alerts.classList.add("hide");
});