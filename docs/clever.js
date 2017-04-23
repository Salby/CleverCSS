$(document).ready(function() {
  // DRAWER ANIMATION
  $("#drawerButton").click(function() {
    $("#mobileDrawer").removeClass("drawerAnimateClose").addClass("drawerAnimateOpen");
    $(".drawerContentLight, .drawerContentDark").removeClass("drawerContentAnimateClose").addClass("drawerContentAnimateOpen");
  });
  $("#drawerClose").click(function() {
    $("#mobileDrawer").removeClass("drawerAnimateOpen").addClass("drawerAnimateClose");
    $(".drawerContentLight, .drawerContentDark").removeClass("drawerContentAnimateOpen").addClass("drawerContentAnimateClose")
  });
  // DROPDOWN ANIMATION
  $(".buttonDropdownSmall").click(function() {
    if ($(this).next().hasClass("dropdownSmallContentShow")) {
        $(this).next().removeClass("dropdownSmallContentShow");
    } else {
        $(this).next().addClass("dropdownSmallContentShow");
    }
  });
  $(".buttonDropdownLarge").click(function() {
    if ($(this).next().hasClass("dropdownLargeContentShow")) {
        $(this).next().removeClass("dropdownLargeContentShow").addClass("dropdownLargeContentHide");
    } else {
        $(this).next().removeClass("dropdownLargeContentHide").addClass("dropdownLargeContentShow");
    }
  });
  // MODAL THINGS
  $(".buttonModal[data-target]").click(function() {
    alert($(this).data("target"));
  });
});
