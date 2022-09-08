const menu = document.querySelector('.button')
const icon = document.querySelector('#icon')
const ul = document.querySelector('.some')
const sece = document.querySelector('.sece')




icon.addEventListener('click', (e) => {
    if(menu.classList.toggle('expand')) {
        icon.classList.add('expand')
        setTimeout(function ()  {
            ul.classList.add('pop')
        },200)
    }else {
        icon.classList.remove('expand')
            ul.classList.remove('pop') 
       
        
    }
    
   
    
 
   
})