// Calling setClock() and playAudio() in every 1sec.
setInterval(setClock, 1000);
setInterval(playAudio, 1000);

// Creating variables to handle indicators.
const hourIndicator = document.querySelector('[data-hour-indicator]');
const minuteIndicator = document.querySelector('[data-minute-indicator]');
const secondIndicator = document.querySelector('[data-second-indicator]');
const audioEffect = document.getElementById("tickSound");

function setClock() {
    // Get local time and converting to ratio, which is using as rotation ratio of indicators.
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    // Passing values to setRotation()
    setRotation(secondIndicator, secondsRatio);
    setRotation(minuteIndicator, minutesRatio);
    setRotation(hourIndicator, hoursRatio);
}

function setRotation(indicator, rotationRatio) {
    // Set value to --rotation variable in css file.
    indicator.style.setProperty('--rotation', rotationRatio * 360);
}

function playAudio() {
    audioEffect.play();
}

// Executes setClock() method in page load.
setClock();