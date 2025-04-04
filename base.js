var sitesList = [
    'https://sliding.toys/mystic-square/8-puzzle/daily/',
    'https://longdogechallenge.com/',
    'https://maze.toys/mazes/mini/daily/',
    'https://optical.toys',
    'https://paint.toys/calligram/',
    'https://puginarug.com',
    'https://memory.toys/classic/easy/',
    'https://alwaysjudgeabookbyitscover.com',
    'https://clicking.toys/flip-grid/neat-nine/3-holes/',
    'https://weirdorconfusing.com/',
    'https://checkbox.toys/scale/',
    'https://binarypiano.com/',
    'https://mondrianandme.com/',
    'https://onesquareminesweeper.com/',
    'https://cursoreffects.com',
    'http://floatingqrcode.com/',
    'https://thatsthefinger.com/',
    'https://cant-not-tweet-this.com/',
    'http://heeeeeeeey.com/',
    'http://corndog.io/',
    'http://eelslap.com/',
    'http://www.staggeringbeauty.com/',
    'http://burymewithmymoney.com/',
    'https://smashthewalls.com/',
    'https://jacksonpollock.org/',
    'http://endless.horse/',
    'http://drawing.garden/',
    'https://www.trypap.com/',
    'http://www.republiquedesmangues.fr/',
    'http://www.movenowthinklater.com/',
    'https://sliding.toys/mystic-square/15-puzzle/daily/',
    'https://paint.toys/',
    'https://checkboxrace.com/',
    'http://www.rrrgggbbb.com/',
    'http://www.koalastothemax.com/',
    'https://rotatingsandwiches.com/',
    'http://www.everydayim.com/',
    'http://randomcolour.com/',
    'http://maninthedark.com/',
    'http://cat-bounce.com/',
    'http://chrismckenzie.com/',
    'https://thezen.zone/',
    'http://ninjaflex.com/',
    'http://ihasabucket.com/',
    'https://toms.toys',
    'http://corndogoncorndog.com/',
    'http://www.hackertyper.com/',
    'https://pointerpointer.com',
    'http://imaninja.com/',
    'http://www.partridgegetslucky.com/',
    'http://www.ismycomputeron.com/',
    'http://www.nullingthevoid.com/',
    'http://www.muchbetterthanthis.com/',
    'http://www.yesnoif.com/',
    'http://lacquerlacquer.com',
    'https://clicking.toys/peg-solitaire/solid/',
    'http://potatoortomato.com/',
    'http://iamawesome.com/',
    'https://strobe.cool/',
    'http://thisisnotajumpscare.com/',
    'http://doughnutkitten.com/',
    'http://crouton.net/',
    'http://corgiorgy.com/',
    'http://www.wutdafuk.com/',
    'http://unicodesnowmanforyou.com/',
    'http://chillestmonkey.com/',
    'http://scroll-o-meter.club/',
    'http://www.crossdivisions.com/',
    'http://tencents.info/',
    'https://memory.toys/maze/easy/',
    'https://boringboringboring.com/',
    'http://www.patience-is-a-virtue.org/',
    'http://pixelsfighting.com/',
    'http://isitwhite.com/',
    'https://existentialcrisis.com/',
    'http://onemillionlols.com/',
    'http://www.omfgdogs.com/',
    'http://oct82.com/',
    'http://chihuahuaspin.com/',
    'http://www.blankwindows.com/',
    'http://tunnelsnakes.com/',
    'http://www.trashloop.com/',
    'http://spaceis.cool/',
    'http://www.doublepressure.com/',
    'http://www.donothingfor2minutes.com/',
    'http://buildshruggie.com/',
    'https://optical.toys/thatcher-effect/',
    // 'http://buzzybuzz.biz/', cert
    'http://yeahlemons.com/',
    'http://wowenwilsonquiz.com',
    // 'https://thepigeon.org/', expired
    'http://notdayoftheweek.com/',
    'https://number.toys/',
    'https://card.toys',
    'http://www.amialright.com/',
    'https://greatbignothing.com/',
    'https://zoomquilt.org/',
    "https://optical.toys/troxler-fade/",
    'https://dadlaughbutton.com/',
    'https://remoji.com/',
    'http://papertoilet.com/',
    'https://loopedforinfinity.com/',
    "https://www.ripefordebate.com/",
    'https://end.city/',
    'https://elonjump.com/',
    'https://www.bouncingdvdlogo.com/',
    'https://toybox.toms.toys',
    'https://memory.toys/monkey-challenge/easy/',
    'https://memory.toys',
  ]

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

menuItems[0].addEventListener('click', Games);
menuItems[1].addEventListener('click', Specialization);

function Games() {
    document.getElementById("title-textID").scrollIntoView();
}
function Specialization() {
    document.getElementById("specialization-titleID").scrollIntoView();
}
function Awards() {

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

setInterval(Move, 7);

counter = 0;

const interval = setInterval(() => {
    window.scrollTo(0, scrollY);
    counter++;

    if (counter >= 5) {
        clearInterval(interval);
    }
});

PressedCount = 0;
lastpressedKey = 0;

keycombination = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function (event) {
    if (event.keyCode == keycombination[PressedCount])
    {
        lastpressedKey = keycombination[PressedCount];
        PressedCount++;
    }
    else 
    {
        lastpressedKey = 0;
        PressedCount = 0;
    }
    
    if (PressedCount == 10) {
        lastpressedKey = 0;
        PressedCount = 0;

        site = Math.floor(Math.random() * sitesList.length);

        konamiExecution(sitesList[site]);
    }
});

function konamiExecution(url) {
    window.open(url)
}


// try {

//     /*create canvas's element then append to body */
//     var __canvas_DOM = document.createElement('canvas'),
//         __content = document.getElementsByTagName('body')[0];
//     if (window.getComputedStyle(__content).getPropertyValue('position') != 'relative') {
//         __content.style.position = 'relative';
//     }
//     __canvas_DOM.setAttribute("style", "position: fixed; top: 0; left: 0;");
//     __content.appendChild(__canvas_DOM);

// } catch (e) {
//     console.info("Exception occur: " + e);
// }

// /*canvas basic setting*/
// __canvas_DOM.width = window.innerWidth;
// __canvas_DOM.height = window.innerHeight;

// /*story starts here*/
// if (__canvas_DOM.getContext) {
//     var c = __canvas_DOM.getContext('2d'),
//         w = __canvas_DOM.width,
//         h = __canvas_DOM.height;

//     var centerPoint = {
//         x: w / 2,
//         y: h / 2
//     }

//     var mousePosition = {
//         x: centerPoint.x,
//         y: centerPoint.y
//     }

//     var flashlight_size = {
//         center: h / 5,
//         outside: h / 3
//     }

//     var gradient_color = {
//         first: "rgba(0,0,0,0.8)",
//         second: "rgba(0,0,0,0)"
//     }

//     var gradient;


//     function draw() {
//         c.save();
//         c.clearRect(0, 0, w, h);
//         /*flashlight color*/
//         gradient = c.createRadialGradient(mousePosition.x, mousePosition.y, flashlight_size.center, mousePosition.x, mousePosition.y, flashlight_size.outside);
//         gradient.addColorStop(0, gradient_color.first);
//         gradient.addColorStop(1, gradient_color.second);

//         c.fillStyle = '#000';
//         c.fillRect(0, 0, w, h);


//         c.globalCompositeOperation = 'destination-out';
//         c.fillStyle = gradient
//         c.arc(mousePosition.x, mousePosition.y, flashlight_size.outside, 0, Math.PI * 2, false);
        
//         c.fill();
//         c.restore();
//     }

//     draw();
// // timer
//     // setInterval(draw, 80);
// }

// $document.body.on('mousemove mouseleave', function(e) {
//     if (e.type == 'mousemove') {
//         mousePosition.x = e.offsetX;
//         mousePosition.y = e.offsetY;
//     }
// draw();
// });