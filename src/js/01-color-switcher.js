const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

let intervalId;

function startColorSwitch() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopColorSwitch() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', startColorSwitch);
stopButton.addEventListener('click', stopColorSwitch);
