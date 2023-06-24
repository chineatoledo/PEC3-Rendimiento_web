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

    // Cargar imágenes en segundo plano
    function preloadImages() {
      imgs.forEach((img) => {
        const src = img.getAttribute("data-src");
        if (src) {
          const newImg = new Image();
          newImg.src = src;
          newImg.addEventListener("load", () => {
            img.src = src;
          });
        }
      });
    }

    setTimeout(preloadImages, 0); // Cargar imágenes en segundo plano al iniciar

    setInterval(changeImg, intervalTime);
  }
});



//No cargue el video para vista móvil
window.addEventListener('DOMContentLoaded', function () {
  var videoContainer = document.querySelector('.video-placeholder');
  if (videoContainer) {
    var video = videoContainer.querySelector('video');

    function checkWindowSize() {
      if (window.innerWidth <= 700) {
        video.removeAttribute('src');
      } else {
        video.setAttribute('src', './images/video-quart.mp4');
      }
    }

    window.addEventListener('resize', checkWindowSize);
    checkWindowSize();
  }
});

//video presentation
document.addEventListener("DOMContentLoaded", function() {
  var video = document.querySelector(".video-container video");

  if (video) {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var source = entry.target.querySelector("source");
          var src = source.getAttribute("data-src");
          source.setAttribute("src", src);

          video.load();

          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(video);
  }
});
