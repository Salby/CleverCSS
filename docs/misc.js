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
  $(".selectArticle").click(function() {
    var target = $(this).data("target");
    $(target).siblings("article").removeClass("showComp").addClass("hideComp");
    $(target).removeClass("hideComp").addClass("showComp");
  });
  // SCROLL STUFF
  var menu = $(".elementList");
  var heightThreshold = $(".elementDisplay").offset().top;
  var heightThreshold_end = $(".elementDisplay").offset().top +$(".elementDisplay").height();
  var components = $("#componentsWrapper");
  var scrollTrigger_end = $("#getStarted").offset().top +$("#getStarted").height();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= heightThreshold - 66) {
        menu.addClass("elementListPin");
    } else {
        menu.removeClass("elementListPin");
    }

    if (scroll < scrollTrigger_end) {
        components.addClass("animateWrapper")
    }
  });
});
