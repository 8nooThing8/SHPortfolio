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
    window.scrollTo(75, scrollY);
    counter++;

    if (counter >= 5) {
        clearInterval(interval);
    }
});

const keyCombinationExecuted = new Event("key-combination");

class keycombination{
    constructor(comb, func)
    {
        this.combination = comb;
        this.function = func;
    }

    PressedCount = 0;
    lastpressedKey = 0;
    combination;
    function;
}

let combination = [
    new keycombination([38, 38, 40, 40, 37, 39, 37, 39, 66, 65], function(){konamiExecution();})
];

document.addEventListener('keydown', function (event) {

    for (let i = 0; i < combination.length; i++) 
    {
        combination[i] = combination[i];

        if (event.keyCode == combination[i].combination[combination[i].PressedCount])
            {
                combination[i].lastpressedKey = combination[i].combination[combination[i].PressedCount];
                combination[i].PressedCount++;
            }
            else 
            {
                combination[i].lastpressedKey = 0;
                combination[i].PressedCount = 0;
            }
            
            if (combination[i].PressedCount == combination[i].combination.length) {
                combination[i].lastpressedKey = 0;
                combination[i].PressedCount = 0;
        
                combination[i].function();
            }
    }
});

function konamiExecution() {
    site = Math.floor(Math.random() * sitesList.length);
    window.open(sitesList[site]);
}

document.addEventListener("DOMContentLoaded",() => {
	button = new ExplosiveButton("button");
});

class ExplosiveButton {
	constructor(el) {
		this.element = document.querySelector(el);
		this.width = 0;
		this.height = 0;
		this.centerX = 0;
		this.centerY = 0;
		this.pieceWidth = 0;
		this.pieceHeight = 0;
		this.piecesX = 9;
		this.piecesY = 4;
		this.duration = 3500;

        combination.push(new keycombination([38, 39, 40, 40, 40], function(){button.explode(button.duration);}));
	}

	explode(duration) {
		let explodingState = "exploding";

		if (!this.element.classList.contains(explodingState)) {
			this.element.classList.add(explodingState);

			this.createParticles("fire",25,duration);
		}
	}

	createParticles(kind,count,duration) {
		for (let c = 0; c < count; ++c) {
			let r = randomFloat(0.25,0.5),
				diam = r * 2,
				xBound = this.centerX - r,
				yBound = this.centerY - r,
				easing = "cubic-bezier(0.15,0.5,0.5,0.85)";

			if (kind == "fire") {
				let x = this.centerX + randomFloat(-xBound,xBound),
					y = this.centerY + randomFloat(-yBound,yBound),
					a = calcAngle(this.centerX,this.centerY,x,y),
					dist = randomFloat(1,5);

				new FireParticle(this.element,x,y,20, 20,a,dist,duration,easing);

			} else if (kind == "debris") {
				let x = (this.pieceWidth / 2) + this.pieceWidth * (c % this.piecesX),
					y = (this.pieceHeight / 2) + this.pieceHeight * Math.floor(c / this.piecesX),
					a = calcAngle(this.centerX,this.centerY,x,y),
					dist = randomFloat(4,7);

				new DebrisParticle(this.element,x,y,400, 400,a,dist,duration,easing);
			}
		}
	}
}
class Particle {
	constructor(parent,x,y,w,h,angle,distance = 1,className2 = "") {
		let width = `${w}em`,
			height = `${h}em`,
			adjustedAngle = angle + Math.PI/2;

		this.div = document.createElement("div");
		this.div.className = "particle";

		if (className2)
			this.div.classList.add(className2);

		this.div.style.width = width;
		this.div.style.height = height;

        this.div.style.zIndex = 1000;

		parent.appendChild(this.div);

		this.s = {
			x: x - w/2,
			y: y - h/2
		};
		this.d = {
			x: this.s.x + Math.sin(adjustedAngle) * distance,
			y: this.s.y - Math.cos(adjustedAngle) * distance
		};
	}
	runSequence(el,keyframesArray,duration = 1e3,easing = "linear",delay = 0) {
		let animation = el.animate(keyframesArray, {
				duration: duration,
				easing: easing,
				delay: delay
			}
		);
		animation.onfinish = () => {
			let parentCL = el.parentElement.classList;

			el.remove();

			if (!document.querySelector(".particle"))
				parentCL.remove(...parentCL);
		};
	}
}
class DebrisParticle extends Particle {
	constructor(parent,x,y,w,h,angle,distance,duration,easing) {
		super(parent,x,y,w,h,angle,distance,"particle--debris");
		
		let maxAngle = 1080,
			rotX = randomInt(0,maxAngle),
			rotY = randomInt(0,maxAngle),
			rotZ = randomInt(0,maxAngle);

		this.runSequence(this.div,[
			{
				opacity: 1,
				transform: `translate(${this.s.x}em,${this.s.y}em) rotateX(0) rotateY(0) rotateZ(0)`
			},
			{
				opacity: 1,
			},
			{
				opacity: 1,
			},
			{
				opacity: 1,
			},
			{
				opacity: 0,
				transform: `translate(${this.d.x}em,${this.d.y}em) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`
			}
		],randomInt(duration/2,duration),easing);
	}
}
class FireParticle extends Particle {
	constructor(parent,x,y,w,h,angle,distance,duration,easing) {
		super(parent,x,y,w,h,angle,distance,"particle--fire");

		let sx = this.s.x,
			sy = this.s.y,
			dx = this.d.x,
			dy = this.d.y;

		this.runSequence(this.div,[
			{
				background: "hsl(60,100%,100%)",
				transform: `translate(${sx}em,${sy}em) scale(1)`
			},
			{
				background: "hsl(60,100%,80%)",
				transform: `translate(${sx + (dx - sx)*0.25}em,${sy + (dy - sy)*0.25}em) scale(4)`
			},
			{
				background: "hsl(40,100%,60%)",
				transform: `translate(${sx + (dx - sx)*0.5}em,${sy + (dy - sy)*0.5}em) scale(7)`
			},
			{
				background: "hsl(20,100%,40%)"
			},
			{
				background: "hsl(0,0%,20%)",
				transform: `translate(${dx}em,${dy}em) scale(0)`
			}
		],randomInt(duration/2,duration),easing);
	}
}
function calcAngle(x1,y1,x2,y2) {
	let opposite = y2 - y1,
		adjacent = x2 - x1,
		angle = Math.atan(opposite / adjacent);

	if (adjacent < 0)
		angle += Math.PI;

	if (isNaN(angle))
		angle = 0;

	return angle;
}
function propertyUnitsStripped(el,property,unit) {
	let cs = window.getComputedStyle(el),
		valueRaw = cs.getPropertyValue(property),
		value = +valueRaw.substr(0,valueRaw.indexOf(unit));

	return value;
}
function pxToEm(px) {
	let el = document.querySelector(":root");
	return px / propertyUnitsStripped(el,"font-size","px");
}
function randomFloat(min,max) {
	return Math.random() * (max - min) + min;
}
function randomInt(min,max) {
	return Math.round(Math.random() * (max - min)) + min;
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