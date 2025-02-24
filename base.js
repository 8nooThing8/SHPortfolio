document.addEventListener('scroll', ScrollEvents)

function MoveBackgroundSlowlyWithScroll() {
    const container = document.body;
    container.style.backgroundPositionY = (window.scrollY / 3) * -1 + "px";
}

var elementMove;
var currentPosition = 0;
var moveSpeed = 2;

var menuItems = document.getElementsByClassName("menu-item");

menuItems[0].addEventListener('click', About);
menuItems[1].addEventListener('click', Games);

function About() {
    document.getElementById("title-textID").scrollIntoView();
}
function Games() {
    document.getElementById("games-titleID").scrollIntoView();
}


elementMove = document.getElementsByClassName("top-menu");

function Move() {
    if (window.scrollY > 25 && currentPosition > -elementMove[0].offsetHeight) 
        elementMove[0].style.top = (currentPosition -= moveSpeed) + "px"

    else if (window.scrollY <= 25 && currentPosition < 0 && currentPosition < 0) 
        elementMove[0].style.top = (currentPosition += moveSpeed) + "px"
}

function ScrollEvents() {
    MoveBackgroundSlowlyWithScroll();
}

setInterval(Move, 1);
