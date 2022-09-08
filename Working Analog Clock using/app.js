const sec = document.querySelector('.sec')
const min = document.querySelector('.min')
const hr = document.querySelector('.hr')


setInterval(function() {
    let time  = new Date();
    let secund = time.getSeconds() *6;
    let minute = time.getMinutes() *6;
    let hours = time.getHours() * 30;
    
    sec.style.transform = `rotateZ(${secund}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    hr.style.transform = `rotateZ(${hours}deg)`;
})