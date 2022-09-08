

const ibtn = document.querySelector('.inputField button')
const clear = document.querySelector('.footer button')
const ul = document.querySelector('.todoList ')
const disp = document.getElementById('display')




disp.addEventListener('keyup', () => {
    clear.classList.add('activ')
    ibtn.classList.add('active')
    if(disp.value ===""){
        ibtn.classList.remove('active')
        
    }
})

ibtn.addEventListener('click', () => {
const disp = document.getElementById('display').value
let li = document.createElement('li')
let textnode = document.createTextNode(disp)
clear.classList.add('activ')

ul.appendChild(li);
li.appendChild(textnode)


   
})

clear.addEventListener('click',() => {
    ul.innerHTML = ''
})