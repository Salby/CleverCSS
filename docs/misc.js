$(document).ready(function() {
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

    if (scroll >= heightThreshold - 66 && scroll < heightThreshold_end - 66) {
        menu.addClass("elementListPin");
    } else {
        menu.removeClass("elementListPin");
    }

    if (scroll < scrollTrigger_end) {
        components.addClass("animateWrapper")
    }
  });
});
