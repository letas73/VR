$(document).ready(function () {

  $('.collection__btns-btn').click(function () {
    var btn = $(this);
    var btnData = $(btn).attr('data-btn');
    var id1 = $('.collection__row .collection__row-item[id="1"]');
    var id2 = $('.collection__row .collection__row-item[id="2"]');

    $('.collection__btns-btn').removeClass('collection__btns-btn--selected');
    $(this).addClass('collection__btns-btn--selected');

    $('.collection__row .collection__row-item').removeClass('active');

    switch (btnData) {
      case '1': $(id1).addClass('active');
        break;
      case '2': $(id2).addClass('active');
        break;
    }
  });
  
});