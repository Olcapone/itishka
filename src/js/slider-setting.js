const feedbackEl = document.querySelector('.js-gallery');
const slideEl = document.querySelector('.slider__image');

feedbackEl.addEventListener('click', showSlides);


function showSlides(e) {
    
    if (e.target.nodeName == 'svg') {
    
        

    document.addEventListener('keydown', OnLeftOrRight);

   function OnLeftOrRight (e){

   let someIndex;
   const currentId = slideEl.findIndex(el =>  el.src === slideEl.src);
  
    if(e.key === 'ArrowLeft'){
        someIndex = currentId - 1;
            if (someIndex < 0)  someIndex = slideEl.length - 1;
             }

   else if (e.key === 'ArrowRight'){
        someIndex = currentId + 1;
          if (someIndex == slideEl.length)    someIndex = 0;              
   }
  
     else if(typeof someIndex === 'undefined')  someIndex = currentId;

  //refs.modalImage.src = images[someIndex].original;
 
};
}
}





