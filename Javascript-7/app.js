const clickme = document.querySelector('.click')
const cancel = document.querySelector('.btn1')
const delet = document.querySelector('.btn2')
const box = document.querySelector('#box')






clickme.addEventListener('click',  () => {
box.style.display = 'block'
});

cancel.addEventListener('click', ()=> {
box.style.display = 'none'
})

delet.addEventListener('click', (e) => {
   alert("Are you sure to proceed?"),(box.style.display = 'none');
     
})