const signup = document.querySelector('.signup');
const myform = document.querySelector('#myform');
const submit = document.querySelector('#submit');


signup.addEventListener('click', (e) =>{
    e.preventDefault()
    myform.style.display = "block" 
    
})
submit.addEventListener('click',(e) => {
    e.preventDefault()
    myform.style.display = "none"
    if(document.querySelector('#inp').value ==="") {
        focus("skdjskdj")
    }
})