// DRAWER ANIMATION
$(document).ready(function() {
  $("#drawerButton").click(function() {
    $("#mobileDrawer").addClass("drawerAnimate");
  });
  $("#drawerClose").click(function() {
    $("#mobileDrawer").removeClass("drawerAnimate");
  });
});
