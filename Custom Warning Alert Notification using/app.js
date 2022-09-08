const alertbutton = document.querySelector('button')
const alerts = document.querySelector('.alert')
const closeBtn = document.querySelector('.close-btn')


alertbutton.addEventListener('click',() => {
 alerts.classList.add("showAlert");
 alerts.classList.remove("hide");
 alerts.classList.add("show");
})

closeBtn.addEventListener('click', () => {
    alerts.classList.remove("show");
    alerts.classList.add("hide");
})