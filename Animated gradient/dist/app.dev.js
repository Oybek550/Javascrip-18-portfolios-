"use strict";

var numb = document.querySelector('.inner span');
var radius = document.querySelector('.outer');
console.log(radius);
idx = 0;
numb.addEventListener('click', function (e) {
  var load = setInterval(parameter, 200);

  function parameter() {
    if (idx == 100) {
      radius.classList.remove("active");
      radius.classList.add("active-2");
      clearInterval();
    } else {
      idx += 1;
      e.target.textContent = idx + "%";
      radius.classList.add("active");
    }
  }
});