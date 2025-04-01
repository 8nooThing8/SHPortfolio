
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
menuItems[2].addEventListener('click', Specialization);
menuItems[3].addEventListener('click', Awards);

function About() {
    document.getElementById("title-textID").scrollIntoView({ behavior: "smooth", block: "start" });
}
function Games() {
    document.getElementById("games-titleID").scrollIntoView({ behavior: "smooth", block: "start" });
}
function Specialization() {
    document.getElementById("specialization-titleID").scrollIntoView({ behavior: "smooth", block: "start" });
}
function Awards() {

}
function MoveNewWindow() {

}


function SpecializationButton()
{
    //console.log("test");
    //window.open("Specialization.html");
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



//var BackGround = document.getElementsByClassName('item-container')[0];


//try {
//    var __canvas_DOM = document.createElement('canvas'),
//        __content = document.getElementsByClassName('my-specialization-title')[0];

//    __canvas_DOM.setAttribute("style", "position: relative; top: 100%; left: 0; pointer-events: none;"); // Added pointer-events
//    __content.appendChild(__canvas_DOM);
//} catch (e) {
//    console.info("Exception occur: " + e);
//}

//__canvas_DOM.width = window.innerWidth;
//__canvas_DOM.height = window.innerHeight;

//if (__canvas_DOM.getContext) {

//    console.log("here");

//    var c = __canvas_DOM.getContext('2d'),
//        w = __canvas_DOM.width,
//        h = __canvas_DOM.height;

//    const textureImg = new Image();
//    textureImg.src = 'test.png'; // Replace with your PNG path

//    var pattern;

//    textureImg.onload = function () {
//        pattern = c.createPattern(textureImg, "repeat");
//    };

//    var centerPoint = {
//        x: w / 2,
//        y: h / 2
//    }

//    var mousePosition = {
//        x: centerPoint.x,
//        y: centerPoint.y
//    }

//    function draw()
//    {
//        var flashlight_size = {
//            radius: BackGround.clientWidth / 20
//        }

//        var width = BackGround.clientWidth/ 1.3;
//        var height = 600;

//        c.save();

//        c.fillStyle = pattern;
//        c.fillRect(w / 2 - width / 2, 0, width, height);

//        c.globalCompositeOperation = 'destination-out';
//        c.beginPath();
//        c.arc(mousePosition.x, mousePosition.y, flashlight_size.radius, 0, Math.PI * 2, false);
//        c.fill();

//        c.restore();
//    }

//    document.addEventListener('mousemove', function (e) {
//        var rect = __canvas_DOM.getBoundingClientRect();
//        mousePosition.x = e.clientX - rect.left;
//        mousePosition.y = e.clientY - rect.top;
//        draw();
//    });

//    draw();
//}