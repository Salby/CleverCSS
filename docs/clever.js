// DRAWER ANIMATION
$(document).ready(function() {
  $("#drawerButton").click(function() {
    $("#mobileDrawer").addClass("drawerAnimate");
  });
  $("#drawerClose").click(function() {
    $("#mobileDrawer").removeClass("drawerAnimate");
  });
  $(".buttonDropdownSmall").click(function() {
    if ($(this).next().hasClass("dropdownContentShow")) {
        $(this).next().removeClass("dropdownContentShow");
    } else {
        $(this).next().addClass("dropdownContentShow");
    }
  });
});
