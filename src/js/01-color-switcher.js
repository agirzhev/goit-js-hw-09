
const buttonStart = document.querySelector('button[data-start=""]');
const buttonStop = document.querySelector('button[data-stop=""]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function start() {
  
  document.body.style.background = getRandomHexColor();
  
}


buttonStart.addEventListener("click", () => {
  
  buttonStart.disabled = true
  timerId = 
    setInterval(() => {
      start()
    }, 1000);
  
});

buttonStop.addEventListener("click", () => {

  clearInterval(timerId);
  buttonStart.disabled = false

});

