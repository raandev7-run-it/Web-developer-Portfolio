function toggleMenu() {
  var overlay = document.getElementById('overlay');
  overlay.classList.toggle('active');
}

document.querySelectorAll('.overlay-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('overlay').classList.remove('active');
  });
});
/* ── Project Carousels ── */

document.querySelectorAll('.project-card').forEach(card => {

  const track = card.querySelector('.gallery-track');
  const slides = card.querySelectorAll('.project-slide');
  const prevBtn = card.querySelector('.gallery-prev');
  const nextBtn = card.querySelector('.gallery-next');
  const dots = card.querySelectorAll('.gallery-dot');

  let currentSlide = 0;


  function updateCarousel() {

    const slideWidth = track.clientWidth;

    track.scrollTo({
      left: slideWidth * currentSlide,
      behavior: 'smooth'
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle(
        'active',
        index === currentSlide
      );
    });
  }


  nextBtn.addEventListener('click', () => {

    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }

    updateCarousel();
  });


  prevBtn.addEventListener('click', () => {

    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = slides.length - 1;
    }

    updateCarousel();
  });


  dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

      currentSlide = index;
      updateCarousel();

    });

  });


  track.addEventListener('scroll', () => {

    const slideWidth = track.clientWidth;

    if (slideWidth === 0) return;

    const newSlide = Math.round(
      track.scrollLeft / slideWidth
    );

    if (newSlide !== currentSlide) {

      currentSlide = newSlide;

      dots.forEach((dot, index) => {
        dot.classList.toggle(
          'active',
          index === currentSlide
        );
      });

    }

  });

});