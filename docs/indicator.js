$(document).ready(function() {

  var indicatorLeft_first = $('.article-active').offset().left;
  var indicatorWidth_first = $('.article-active').outerWidth();

  $('.article-indicator').css('left', indicatorLeft_first);
  $('.article-indicator').css('width', indicatorWidth_first);

  $('.article-button').click(function() {

    var indicatorLeft = $(this).offset().left;
    var indicatorWidth = $(this).outerWidth();

    $(this).siblings().removeClass('article-active');
    $(this).addClass('article-active');

    $('.article-indicator').css('left', indicatorLeft);
    $('.article-indicator').css('width', indicatorWidth);

  });

});
