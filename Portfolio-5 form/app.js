const showBtn = document.querySelector('#show-btn')
const btnInto= document.querySelector('#btn-into')
const modal = document.querySelector('#modal')
 
const dele = () => {
    showBtn.style.display = "none"
}
const on = () => {
    showBtn.style.display = "block"
}


const addhidden = () => {
    modal.classList.add('hidden')
} 
const removehidden = () => {
    modal.classList.remove('hidden')
} 

showBtn.addEventListener('click', () =>{
    removehidden()
   dele()
})


btnInto.addEventListener('click',() => {
    addhidden()
    on()
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape')
    addhidden()
    on()
})
