const $image = document.querySelector("#image");
const $nextBtn = document.querySelector("#next-btn");
const $previousBtn = document.querySelector("#previous-btn");
const $slideShowBtn = document.querySelector("#slide-show-btn");
const $stopBtn = document.querySelector("#stop-btn");

let count = 0;
let interval = null;

$nextBtn.onclick = () => rightSlide();
$previousBtn.onclick = () => leftSlide();
$slideShowBtn.onclick = () => startSlideShow();
$stopBtn.onclick = () => stopSlideShow();

function rightSlide() {
  count = (count + 1) % 3;
  $image.src = `./images/${count}.png`;
}

function leftSlide() {
  count = (count - 1 + 3) % 3;
  $image.src = `./images/${count}.png`;
}

function startSlideShow() {
  // prevent multiple clicks that creates multiple intervals
  if (interval === null) {
    interval = setInterval(() => rightSlide(), 1500);
  }
}

function stopSlideShow() {
  clearInterval(interval);
  // reset the interval to be able to use slideshow again
  interval = null;
}
