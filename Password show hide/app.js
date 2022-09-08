const innput = document.querySelector('input')
const eye = document.querySelector("i")

eye.addEventListener('click', () => {
    if(innput.type ==="password") {
        innput.type = "text";
    }else {
        innput.type ="password";
    }
})