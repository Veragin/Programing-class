const resultElement = document.getElementById("result");
const buttonElement = document.getElementById("button");

let isRunning = false;
let startTime = 0;
let intervalId = null;

const formatTime = (time) => {
    const timeInSec = time / 1000;
    const hour = Math.floor(timeInSec / (60 * 60));
    const min = Math.floor((timeInSec - hour * 60 * 60) / 60);
    const sec = timeInSec - hour * 60 * 60 - min * 60;

    const hourString = String(hour).length < 2 ? `0${hour}` : String(hour);
    const minString = String(min).length < 2 ? `0${min}` : String(min);
    const secString =
        String(Math.floor(sec)).length < 2 ? `0${sec}` : String(sec);

    return `${hourString}:${minString}:${secString}`;
};

const onClick = () => {
    isRunning = !isRunning;

    if (isRunning) {
        startTime = Date.now();

        intervalId = setInterval(() => {
            const time = Date.now() - startTime;
            resultElement.innerText = formatTime(time);
        }, 40);

        buttonElement.innerText = "stop";
    } else {
        if (intervalId) clearInterval(intervalId);
        buttonElement.innerText = "start";
    }
};

buttonElement.addEventListener("click", onClick);
