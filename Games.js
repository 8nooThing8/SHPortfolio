
elementMove = document.getElementsByClassName("top-menu");

var currentPosition = 0;
var moveSpeed = 2;

function Move() {
    if (window.scrollY > 25 && currentPosition > -elementMove[0].offsetHeight) 
        elementMove[0].style.top = (currentPosition -= moveSpeed) + "px"

    else if (window.scrollY <= 25 && currentPosition < 0 && currentPosition < 0) 
        elementMove[0].style.top = (currentPosition += moveSpeed) + "px"
}

setInterval(Move, 7);