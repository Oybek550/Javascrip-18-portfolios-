const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('img');

let index = 0;

function changeimage () {
     if (index > img.length-1) {
         index = 0;
     }else if (index < 0) {
         index = img.length-1;
     }

    imgs.style.transform = `translateX(${-index * 500}px)`
}

rightBtn.addEventListener('click', function addindex (){
    index++;

    changeimage()
})
leftBtn.addEventListener('click', function addindex (){
    index--;

    changeimage()
})

let qaytaqayta = setInterval(abu,2000);
function abu () {
    index++;

    changeimage()
}