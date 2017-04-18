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
    $("#navBarArticle").siblings().removeClass("showComp");
    $("#navBarArticle").siblings().addClass("hideComp");
    $("#navBarArticle").removeClass("hideComp").addClass("showComp");
  });
  $(".selectButtons").click(function() {
    $("#buttonArticle").siblings().removeClass("showComp");
    $("#buttonArticle").siblings().addClass("hideComp");
    $("#buttonArticle").removeClass("hideComp").addClass("showComp");
  });
  $(".selectTypo").click(function() {
    $("#typoArticle").siblings().removeClass("showComp");
    $("#typoArticle").siblings().addClass("hideComp");
    $("#typoArticle").removeClass("hideComp").addClass("showComp");
  });
  $(".selectGrid").click(function() {
    $("#gridArticle").siblings().removeClass("showComp");
    $("#gridArticle").siblings().addClass("hideComp");
    $("#gridArticle").removeClass("hideComp").addClass("showComp");
  });
  $(".selectForms").click(function() {
    $("#formsArticle").siblings().removeClass("showComp");
    $("#formsArticle").siblings().addClass("hideComp");
    $("#formsArticle").removeClass("hideComp").addClass("showComp");
  });
});
