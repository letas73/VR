$(document).ready(function () {

  $('.about-swiper__pagination-next').click(function () {
    var currentSlide = $('.about-swiper__slide.curry');
    var currentSlideIndex = currentSlide.index();
    var nextSlideIndex = currentSlideIndex + 1;
    var nextSlide = $('.about-swiper__slide').eq(nextSlideIndex);
    currentSlide.fadeOut(1000);
    currentSlide.removeClass('curry');

    if (nextSlideIndex == ($('.about-swiper__slide:last').index() + 1)) {
      $('.about-swiper__slide').eq(0).fadeIn(1000);
      $('.about-swiper__slide').eq(0).addClass('curry');
    } else {
      nextSlide.fadeIn(1000);
      nextSlide.addClass('curry');
    }
  });

  $('.about-swiper__pagination-prev').click(function () {
    var currentSlide = $('.about-swiper__slide.curry');
    var currentSlideIndex = currentSlide.index();
    var prevSlideIndex = currentSlideIndex - 1;
    var prevSlide = $('.about-swiper__slide').eq(prevSlideIndex);

    currentSlide.fadeOut(1000);
    currentSlide.removeClass('curry');
    prevSlide.fadeIn(1000);
    prevSlide.addClass('curry');
  });
});