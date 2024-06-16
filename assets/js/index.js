let currentSlide = 0;

function moveSlides(direction) {

  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  document.querySelector('.carousel').style.transform = `translateX(-${
    currentSlide * 100
  }%)`;

}


document.querySelectorAll('.submit-btn').forEach((ele)=>{
  ele.addEventListener('click',function(){
    moveSlides(+1);
  })
});