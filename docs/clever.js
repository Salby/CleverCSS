$(document).ready(function() {
  // DRAWER ANIMATION
  $("#drawerButton").click(function() {
    $("#mobileDrawer").addClass("drawerAnimate");
  });
  $("#drawerClose").click(function() {
    $("#mobileDrawer").removeClass("drawerAnimate");
  });
  // DROPDOWN ANIMATION
  $(".buttonDropdownSmall").click(function() {
    if ($(this).next().hasClass("dropdownContentShow")) {
        $(this).next().removeClass("dropdownContentShow");
    } else {
        $(this).next().addClass("dropdownContentShow");
    }
  });
});
