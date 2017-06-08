$(document).ready(function() {
  // DRAWER ANIMATION
  $("#drawer-open").click(function(e) {
    e.stopPropagation()
    $("#mobile-drawer").removeClass("drawerAnimateClose").addClass("drawerAnimateOpen");
  });
  $("#drawer-close").click(function() {
    $("#mobile-drawer").removeClass("drawerAnimateOpen").addClass("drawerAnimateClose");
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
    $(modalTargetOpen).css("display", "flex");
    if ($(modalTargetOpen).hasClass("modalInactive")) {
        $(modalTargetOpen).removeClass("modalInactive").addClass("modalActive");
    } else {
        $(modalTargetOpen).addClass("modalActive")
    }
    $("body").css("overflow-y", "hidden");
  });
  $(".buttonModalClose[data-target]").click(function() {
    var modalTargetClose = $(this).data("target");
    $(modalTargetClose).removeClass("modalActive").addClass("modalInactive");
    setTimeout(function() {
      $(modalTargetClose).css("display", "none");
    }, 300);
    $("body").css("overflow-y", "visible");
  });
  // FLOATING ACTION BUTTON MENU
  $(".fabMenuContainer .fabMenuButton").click(function() {
    if ($(this).hasClass("fabMenuButtonActive")) {
        $(this).removeClass("fabMenuButtonActive");
        $(".fabMenuContainer .fabMenuList").removeClass("fabMenuListActive").addClass("fabMenuListInactive");
    } else {
        $(this).addClass("fabMenuButtonActive");
        $(".fabMenuContainer .fabMenuList").removeClass("fabMenuListInactive").addClass("fabMenuListActive");
    }
  });
});
