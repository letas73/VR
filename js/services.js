$(function () {
  let filter = $("[data-filter]");
  let firstBtn = filter.first();

  filter.click(function () {
    let category = $(this).data('filter');

    $('.services__menu-item').removeClass('selected');
    $(this).addClass('selected');

    $('[data-category]').each(function () {
      let categoryData = $(this).data('category');

      if (categoryData != category) {
        $(this).addClass('hide');
      } else {
        $(this).removeClass('hide');
      }
    });
  });

  firstBtn.trigger('click');
});