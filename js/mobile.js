$(function () {
  const burger = $('.header-mobile__burger');
  const close = $('.header-mobile__close');
  const menu = $('.header-mobile__menu');
  const body = $('body');

  burger.click(function () {
    
    if (!menu.hasClass('header-mobile__menu--open')) {
      menu.addClass('header-mobile__menu--open');
      body.addClass('no-scroll');
    }
  });

  close.click(function () {
    menu.removeClass('header-mobile__menu--open');
    body.removeClass('no-scroll');
  });
});