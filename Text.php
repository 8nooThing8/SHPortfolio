let intervalId;
const endTime = new Date("2022-11-20T00:00:00"); // predefined end time for the countdown
let timeLeft;

function checkTime() {
    let currentTime = new Date();
    if (currentTime > endTime) {
        timeLeft = 0;
    } else {
        timeLeft = (endTime - currentTime) / 1000; // convert to seconds
    }
    button.innerText = timeLeft;
    if (timeLeft <= 0) {
        button.innerText = 'Time is up!';
        button.disabled = false;
        clearInterval(intervalId); // stop the interval when time is up
    }
}

const button = document.getElementById('countdown-button');
button.addEventListener('click', function(){
    if (!intervalId) {
        intervalId = setInterval(checkTime,1000);
    } else {
        clearInterval(intervalId);
        intervalId = null;
    }
});
