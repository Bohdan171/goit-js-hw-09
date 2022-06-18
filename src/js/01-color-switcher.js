const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
stopBtnEl.disabled = true;
let intervalID = null;

const randomBodyColorGenerator = {
  DELAY: 1000,

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },

  interval() {
    intervalID = setInterval(() => {
      changeBgColorRandom();
    }, this.DELAY);
    
  },

  start() {
    startBtnEl.addEventListener('click', () => {
      this.interval();
      startBtnEl.disabled = true;
      stopBtnEl.disabled = false;
    });
    stopBtnEl.addEventListener('click', this.stop);
  },

  stop() {
    clearInterval(intervalID);
    stopBtnEl.disabled = true;
    startBtnEl.disabled = false;
  },
};

function changeBgColorRandom() {
  bodyEl.style.backgroundColor = `${randomBodyColorGenerator.getRandomHexColor()}`;
}

randomBodyColorGenerator.start();
