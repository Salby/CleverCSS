$(window).scroll(function() {

  var scroll = $(window).scrollTop();
  var navShadowTrigger = $('#getStarted').offset().top;

  if (scroll >= navShadowTrigger - 56) {
    $('.navbar').removeClass('navbar-no-shadow');
  } else {
    $('.navbar').addClass('navbar-no-shadow');
  }

});
