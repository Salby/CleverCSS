$(document).ready(function() {
  // DRAWER ANIMATION
  $("#drawerButton").click(function() {
    $("#mobileDrawer").removeClass("drawerAnimateClose").addClass("drawerAnimateOpen");
    $(".drawerContent").removeClass("drawerContentAnimateClose").addClass("drawerContentAnimateOpen");
  });
  $("#drawerClose").click(function() {
    $("#mobileDrawer").removeClass("drawerAnimateOpen").addClass("drawerAnimateClose");
    $(".drawerContent").removeClass("drawerContentAnimateOpen").addClass("drawerContentAnimateClose")
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
