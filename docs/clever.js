$(document).ready(function() {
  // DRAWER ANIMATION
  $("#drawerOpen").click(function(e) {
    e.stopPropagation()
    $("#mobileDrawer").removeClass("drawerAnimateClose").addClass("drawerAnimateOpen");
  });
  $("#drawerClose").click(function() {
    $("#mobileDrawer").removeClass("drawerAnimateOpen").addClass("drawerAnimateClose");
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
  $(".buttonModalOpen[data-target]").click(function() {
    //alert($(this).data("target"));
    var modalTargetOpen = $(this).data("target");
    $(modalTargetOpen).show();
    if ($(modalTargetOpen).hasClass("modalInactive")) {
        $(modalTargetOpen).removeClass("modalInactive").addClass("modalActive");
    } else {
        $(modalTargetOpen).addClass("modalActive")
    }
  });
  $(".buttonModalClose[data-target]").click(function() {
    var modalTargetClose = $(this).data("target");
    $(modalTargetClose).removeClass("modalActive").addClass("modalInactive");
    setTimeout(function() {
      $(modalTargetClose).hide();
    }, 300);
  });
  // FLOATING ACTION BUTTON MENU
  $(".fabMenuContainer .fabMenuButton").click(function() {
    if ($(".fabMenuContainer .fabMenuButton").hasClass("fabMenuButtonActive")) {
        $(".fabMenuContainer .fabMenuButton").removeClass("fabMenuButtonActive");
        $(".fabMenuContainer .fabMenuList").removeClass("fabMenuListActive").addClass("fabMenuListInactive");
    } else {
      $(".fabMenuContainer .fabMenuButton").addClass("fabMenuButtonActive");
      $(".fabMenuContainer .fabMenuList").removeClass("fabMenuListInactive").addClass("fabMenuListActive");
    }
  });
});
