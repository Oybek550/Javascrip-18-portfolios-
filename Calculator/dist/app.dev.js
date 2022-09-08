"use strict";

var display = document.querySelector('#display');
var numb = document.querySelectorAll(".buttons input");
var idx = 1;
numb[0].addEventListener('click', function (e) {
  document.forms.display.value += '7';
});
numb[1].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[2].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[3].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[4].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[5].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[6].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[7].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[8].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[9].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[10].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[11].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[12].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[13].addEventListener('click', function (e) {
  document.forms.display.value += e.target.value;
});
numb[14].addEventListener('click', function (e) {
  document.forms.display.value += '+';
});
numb[15].addEventListener('click', function (e) {});
numb[16].addEventListener('click', function (e) {
  if (display.value == "") {
    alert("yoz");
  } else display.value = eval(display.value);
});