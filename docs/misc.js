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
  $(".selectTypo").click(function() {
    $("#typoArticle").siblings("article").removeClass("showComp");
    $("#typoArticle").siblings("article").addClass("hideComp");
    $("#typoArticle").removeClass("hideComp").addClass("showComp");
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
});
