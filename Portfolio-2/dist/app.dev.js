"use strict";

var imgs = document.getElementById('imgs');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var img = document.querySelectorAll('img');
var index = 0;

function changeimage() {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }

  imgs.style.transform = "translateX(".concat(-index * 500, "px)");
}

rightBtn.addEventListener('click', function addindex() {
  index++;
  changeimage();
});
leftBtn.addEventListener('click', function addindex() {
  index--;
  changeimage();
});
var qaytaqayta = setInterval(abu, 2000);

function abu() {
  index++;
  changeimage();
}