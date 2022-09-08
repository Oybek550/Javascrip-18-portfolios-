"use strict";

var signup = document.querySelector('.signup');
var myform = document.querySelector('#myform');
var submit = document.querySelector('#submit');
signup.addEventListener('click', function (e) {
  e.preventDefault();
  myform.style.display = "block";
});
submit.addEventListener('click', function (e) {
  e.preventDefault();
  myform.style.display = "none";

  if (document.querySelector('#inp').value === "") {
    focus("skdjskdj");
  }
});