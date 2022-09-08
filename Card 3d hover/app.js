const body = document.querySelector('body')
const card= document.querySelector('.card')



body.addEventListener('mousemove',(e) => {

let x = (window.innerWidth / 2 - e.pageY) / 20; 
let y = (window.innerHeight / 2 - e.pageX)/ 20; 

card.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
})
