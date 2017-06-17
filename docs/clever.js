$(document).ready(function() {
  // DRAWER ANIMATION
  $('#drawer-open').click(function(e) {
    e.stopPropagation()
    $('#mobile-drawer').removeClass('drawerAnimateClose').addClass('drawerAnimateOpen');
  });
  $('#drawer-close').click(function() {
    $('#mobile-drawer').removeClass('drawerAnimateOpen').addClass('drawerAnimateClose');
  });
  // DROPDOWN ANIMATION
  $('.button-dropdown').click(function() {
    $(this).toggleClass('dropdown-active');
    $(this).next().slideToggle('fast');
  });
  // MODAL THINGS
  $('.button-modal-open[data-target]').click(function() {
    //alert($(this).data('target'));
    var modalTargetOpen = $(this).data('target');
    $(modalTargetOpen).css('display', 'flex');
    if ($(modalTargetOpen).hasClass('modal-inactive')) {
        $(modalTargetOpen).removeClass('modal-inactive').addClass('modal-active');
    } else {
        $(modalTargetOpen).addClass('modal-active')
    }
    $('body').css('overflow-y', 'hidden');
  });
  $('.button-modal-close[data-target]').click(function() {
    var modalTargetClose = $(this).data('target');
    $(modalTargetClose).removeClass('modal-active').addClass('modal-inactive');
    setTimeout(function() {
      $(modalTargetClose).css('display', 'none');
    }, 300);
    setTimeout(function() {
      $('body').css('overflow-y', 'visible');
    },300);
  });
  // FLOATING ACTION BUTTON MENU
  $('.fabMenuContainer .fabMenuButton').click(function() {
    if ($(this).hasClass('fabMenuButtonActive')) {
        $(this).removeClass('fabMenuButtonActive');
        $('.fabMenuContainer .fabMenuList').removeClass('fabMenuListActive').addClass('fabMenuListInactive');
    } else {
        $(this).addClass('fabMenuButtonActive');
        $('.fabMenuContainer .fabMenuList').removeClass('fabMenuListInactive').addClass('fabMenuListActive');
    }
  });
});
