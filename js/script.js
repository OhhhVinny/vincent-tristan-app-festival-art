document.addEventListener('DOMContentLoaded', function () {
  const heartButton = document.getElementById('heartButton');
  let isHeartFilled = false;

  heartButton.addEventListener('click', function () {
    const heartPath = heartButton.querySelector('svg path');
    isHeartFilled = !isHeartFilled;

    if (isHeartFilled) {
      heartPath.setAttribute('fill', 'pink');
    } else {
      heartPath.setAttribute('fill', 'currentColor');
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper-filters', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
  });
});

document.addEventListener('DOMContentLoaded', function () {

  var swiperFeaturedArtworks = new Swiper('.swiper-featured-artworks', {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 10,
    freeMode: true,
  });


});



