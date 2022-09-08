
    const persent = document.querySelector('.percent');
    const progress = document.querySelector('.progress');
    const text = document.querySelector('.text');
 
    let numb = 4;
    let count = 16;
  
    let loading = setInterval(ani, 100);
    function ani() {
      if(numb == 100 && count == 400){
        text.style.display = "block" 
        persent.classList.add('text-blink')
        clearInterval(loading);
      }else {
     
     numb = numb + 1;
     count = count + 4; 
     progress.style.width = count + 'px';
     persent.textContent = numb + '%';
    }
     
    }

    

 
    
  
    
  
  
  