let currentSlide = 0;
let isLocked = false; 

function moveSlides(direction) {
  if (isLocked) return;

  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  document.querySelector('.carousel').style.transform = `translateX(-${
    currentSlide * 100
  }%)`;

}

const lockButton = document.querySelector('.start_btn');

const overlay = document.getElementById('overlay');
const all_ele = document.querySelectorAll('button, input, textarea, select, a, img, video, audio, embed, object, form, fieldset, legend, label, table, tr, td, th, div, span, header, footer, nav, section, article, aside, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, blockquote, q, pre');
lockButton.addEventListener('click',function(){
  lock_page();
})

function lock_page() {
  all_ele.forEach(element => {
    if(element != null && element != undefined){
      element.disabled = true;
    }
  });
  overlay.style.display = 'block'; 
  isLocked = true;
}

function unlock_page() {
  all_ele.forEach((element) => {
    if (element != null && element != undefined) {
      element.disabled = false;
    }
  });
  overlay.style.display = 'none'; 
  isLocked = false;
}
