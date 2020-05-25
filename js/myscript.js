//
var overlay = document.getElementById('overlay');
overlay.className = 'width-0';

var burgerMenu = document.getElementById('burger-menu')

//Toggle on/off overlay
burgerMenu.addEventListener('click',
function () {
    if (overlay.className == "width-0") {
      overlay.className = 'width-100';
      burgerMenu.className = 'active';
      }
    else {
      overlay.className = 'width-0';
      burgerMenu.className = '';
    }
  }
)
