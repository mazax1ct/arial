$(document).ready(function() {

});

//открытие мобильного меню меню
$(document).on('click', '.js-mobile-menu-opener', function () {
  $('.mobile-menu').fadeIn(function () {
    $('.mobile-menu__inner').addClass('is-active');
  });

  document.addEventListener('click', closeMobileMenu);
  return false;
});

//закрытие мобильного меню меню
$(document).on('click', '.js-mobile-menu-closer', function () {
  $('.mobile-menu__inner').removeClass('is-active');
  $('.mobile-menu').fadeOut();

  document.removeEventListener('click', closeMobileMenu);
  return false;
});

function closeMobileMenu(evt) {
  if (!$('.mobile-menu__inner').is(evt.target) && $('.mobile-menu__inner').has(evt.target).length === 0) {
    $('.mobile-menu__inner').removeClass('is-active');
    $('.mobile-menu').fadeOut();
    document.removeEventListener('click', closeMobileMenu);
	}
}

//открытие мобильного меню
$(document).on('click', '.js-menu-toggler', function() {
  $(this).toggleClass('is-active');
  $('.menu__container').slideToggle();
  return false;
});

//мобильное меню
$(document).on('click', '.js-menu-button', function () {
  if(!$(this).hasClass('is-active')){
    $('.menu__lvl-block').hide();
    $(this).closest('.menu__lvl-block').show();
    $(this).closest('.menu__lvl-block').find('.menu__item').hide();
    $(this).closest('.menu__item').show().addClass('is-active');
    $('div[data-target='+ $(this).attr('data-target') +']').show();
    $(this).addClass('is-active');
  } else {
    $('.menu__lvl-block').hide();
    $(this).closest('.menu__lvl-block').show();
    $(this).closest('.menu__lvl-block').find('.menu__item').show().removeClass('is-active');

    if($(this).closest('.menu__lvl-block').hasClass('menu__lvl-2')){
      $('.menu__lvl-1').show();
    }

    $(this).removeClass('is-active');
  }

  return false;
});

if($('body').width() > 1199) {
  $(document).on('mouseover', '.menu__item', function() {
    var link = $(this).find('.menu__button').attr('data-target');
    if($(this).closest('.menu__lvl-block').hasClass('menu__lvl-1')) {
      $('.menu__item').removeClass('is-active');
      $(this).addClass('is-active');
      $('.menu__lvl-3').hide();
      $('.menu__lvl-2').hide();
      $('.menu__lvl-2[data-target="'+link+'"]').show();
    }

    if($(this).closest('.menu__lvl-block').hasClass('menu__lvl-2')) {
      $('.menu__lvl-3').hide();
      $('.menu__lvl-3[data-target="'+link+'"]').show();
    }
  });
}