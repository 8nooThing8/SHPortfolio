//document.addEventListener('DOMContentLoaded', ChangeColor)
document.addEventListener('scroll', MoveBackgroundSlowly)

//function ChangeColor()
//{
//    const container = document.querySelector('.title-text')
//    container.style.color = "lightblue"
//}

//setInterval(Move, 1)
//i = 0;
//function Move() {
//    const container = document.body;
//    container.style.backgroundPositionY = i++ + "px";
//    console.log(i);
//}

function MoveBackgroundSlowly() {
    const container = document.body;
    container.style.backgroundPositionY = (window.scrollY/ 5) * -1 + "px";
}