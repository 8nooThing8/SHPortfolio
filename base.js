document.addEventListener('scroll', ScrollEvents)

function MoveBackgroundSlowlyWithScroll() {
    const container = document.body;
    container.style.backgroundPositionY = (window.scrollY / 5) * -1 + "px";
}

var mysiwndowOpen;
var myWindow;

var elementMove;
var currentPosition = 0;
var moveSpeed = 2;

var menuItems = document.getElementsByClassName("menu-item");

menuItems[0].addEventListener('click', About);
menuItems[1].addEventListener('click', Games);
menuItems[2].addEventListener('click', Awards);

function About() {
    document.getElementById("title-textID").scrollIntoView();
}
function Games() {
    document.getElementById("games-titleID").scrollIntoView();
}
function Awards() {
    myWindow = window.open("https://Zultoox.online", "Windo", "width=500,height=400,left=1000,top=0");
    mysiwndowOpen = true;
}

function MoveNewWindow() {
    if (mysiwndowOpen) {

    myWindow.moveBy(50, 25);
    }
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
setInterval(MoveNewWindow, 1);
