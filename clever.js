//DRAWER ANIMATION
  //DRAWER
  var drawer = document.getElementById('mobileDrawer')
  //DRAWER OPEN BUTTON
  var buttonOpen = document.getElementById('drawerButton')
  //DRAWER CLOSE BUTTON
  var buttonClose = document.getElementById('drawerClose')
//OPEN DRAWER WHEN USER CLICKS ON BUTTON
buttonOpen.onclick = function() {
  drawer.className = "drawer animateOut";
}
//CLOSE DRAWER WHEN USER CLICKS THE CLOSE BUTTON
buttonClose.onclick = function() {
  drawer.className = "drawer animateIn";
}
//CLOSE DRAWER WHEN USER CLICKS ANYWHERE OUTSIDE THE DRAWER
window.onclick = function(event) {
  if (event.target == drawer) {
      drawer.className = "drawer animateIn";
  }
}
