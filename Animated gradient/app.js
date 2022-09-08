const numb = document.querySelector('.inner span')
const radius = document.querySelector('.outer')
console.log(radius);
idx = 0;

numb.addEventListener('click', (e) => {
    let load = setInterval(parameter, 200);
    function parameter() {
      if(idx == 100) {
        radius.classList.remove("active") 
        radius.classList.add("active-2") 
        clearInterval();
      } else  {
        idx += 1;             
        e.target.textContent = idx + "%";
        radius.classList.add("active") 
      } 
    }
})