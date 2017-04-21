$(document).ready(function() {
  // SMOOTH SCROLLING START
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
  // COMPONENTS SELECTION
  $(".selectNavBar").click(function() {
    $("#navBarArticle").siblings("article").removeClass("showComp");
    $("#navBarArticle").siblings("article").addClass("hideComp");
    $("#navBarArticle").removeClass("hideComp").addClass("showComp");
  });
  $(".selectButtons").click(function() {
    $("#buttonArticle").siblings("article").removeClass("showComp");
    $("#buttonArticle").siblings("article").addClass("hideComp");
    $("#buttonArticle").removeClass("hideComp").addClass("showComp");
  });
  $(".selectDropdown").click(function() {
    $("#dropdownArticle").siblings("article").removeClass("showComp");
    $("#dropdownArticle").siblings("article").addClass("hideComp");
    $("#dropdownArticle").removeClass("hideComp").addClass("showComp");
  });
  $(".selectGrid").click(function() {
    $("#gridArticle").siblings("article").removeClass("showComp");
    $("#gridArticle").siblings("article").addClass("hideComp");
    $("#gridArticle").removeClass("hideComp").addClass("showComp");
  });
  $(".selectForms").click(function() {
    $("#formsArticle").siblings("article").removeClass("showComp");
    $("#formsArticle").siblings("article").addClass("hideComp");
    $("#formsArticle").removeClass("hideComp").addClass("showComp");
  });
  // SCROLL STUFF
  var menu = $(".elementList");
  var heightThreshold = $(".elementDisplay").offset().top;
  var heightThreshold_end = $(".elementDisplay").offset().top +$(".elementDisplay").height();
  var components = $("#componentsWrapper");
  var scrollTrigger_end = $("#getStarted").offset().top +$("#getStarted").height();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= heightThreshold && scroll <= heightThreshold_end) {
        menu.addClass("elementListPin");
    } else {
        menu.removeClass("elementListPin");
    }

    if (scroll < scrollTrigger_end) {
        components.addClass("animateWrapper")
    }
  });
});
