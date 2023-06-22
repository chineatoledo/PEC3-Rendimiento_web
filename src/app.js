const carousel = document.querySelector('.carousel');
const imgs = carousel.querySelectorAll('img');
const intervalTime = 3000;
let activeImg = 0;

function changeImg() {
  imgs[activeImg].classList.remove('active');
  activeImg++;

  if (activeImg === imgs.length) {
    activeImg = 0;
  }

  imgs[activeImg].classList.add('active');
}

setInterval(changeImg, intervalTime);