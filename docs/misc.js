$(document).ready(function() {
  $(".toHome").click(function() {
    $("html, body").animate({
      scrollTop: $("#home").offset().top
    }, 1000);
  });
  $(".toComponents").click(function() {
    $("html, body").animate({
      scrollTop: $("#elements").offset().top
    }, 1000);
  });
  $(".toDependencies").click(function() {
      $("html, body").animate({
        scrollTop: $("#dependencies").offset().top
      }, 1000);
  });
});
