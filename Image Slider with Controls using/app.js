 const images = document.querySelectorAll('img')
let indevalue = 0;

 function side_slide(){
    for(let i = 0; i < images.length; i++) {
        images[i].style.display = "none"
       }
   indevalue++;
   if(indevalue > images.length -1){ indevalue = 1}
 images[indevalue].style.display = "block"

 }



const myfunction = (e) => {
setTimeout(myfunction,2500)

   for(let i = 0; i < images.length; i++) {
    images[i].style.display = "none"
   }
  indevalue++;
  if(indevalue > images.length-1 ) {indevalue = 1}
  images[indevalue].style.display = "block"

}

myfunction()