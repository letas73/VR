$(document).ready(function () {
  $('.faq-accord__item').click(function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });
});
