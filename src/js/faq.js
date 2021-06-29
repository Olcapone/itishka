
    const showBtnRef = document.querySelector("[data-menu-show]");
    const detailuRef = document.querySelector("[data-what]");
    const spaceRef = document.querySelector('.question__item');
   

  
    showBtnRef.addEventListener("click", (e) => {

      const heightEl = spaceRef.getAttribute('height');

   

        

      detailuRef.classList.toggle("magic");

      spaceRef.classList.toggle("magic2");
 
    })

