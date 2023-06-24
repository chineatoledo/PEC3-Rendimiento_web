// la función devuelve una promesa que se resolverá o rechazará
// dependiendo de la carga del script
const loadScript = (src) => new Promise((resolve, reject) => {
  // creamos un elemento script en el dom
  let script = document.createElement('script')
  // añadimos la fuente src al script del archivo 
  script.src = src
  // usamos los eventos nativos del script para resolver
  // o rechazar la promesa dependiendo de si se ha cargado
  script.onload = resolve
  script.onerror = reject
  // añadimos el script al documento
  document.head.appendChild(script)
})

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    const imgs = carousel.querySelectorAll("img");
    const intervalTime = 3000;
    let activeImg = 0;

    function changeImg() {
      imgs[activeImg].classList.remove("active");
      activeImg++;

      if (activeImg === imgs.length) {
        activeImg = 0;
      }

      imgs[activeImg].classList.add("active");
    }

    setInterval(changeImg, intervalTime);
  }
})

// Inicializa video "placeholders"
var videoContainer = document.querySelector('.video-placeholder');

function loadVideo() {
  var video = document.createElement('video');
  // Configura las propiedades del video (fuente, tamaño, controles, etc.)
  videoContainer.appendChild(video);
}

function handleIntersection(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      loadVideo();
      observer.unobserve(entry.target);
    }
  });
}

// Verifica que videoContainer exista antes de crear el observer
if (videoContainer) {
  var observer = new IntersectionObserver(handleIntersection);
  observer.observe(videoContainer);
}

