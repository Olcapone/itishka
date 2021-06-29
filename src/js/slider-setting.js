const refs = {
  galleryEl: document.querySelector('.js-gallery'),
}


document.addEventListener('keydown', OnLeftOrRight);
refs.galleryEl.addEventListener('click', OnLeftOrRight);


function OnLeftOrRight(n) {

  const someDots = n.target.dataset.action;
  
    
  if (n.key === 'ArrowLeft' || someDots === 'prev') previousSlide();

      else if (n.key === 'ArrowRight' || someDots === 'next') nextSlide();
}

/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
  let slides = document.getElementsByClassName("slider__item");
   
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
  /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}






