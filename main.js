const rawBurst = {
  left: 0,
  top: 0,
  radius: { 0: 200 },
  count: 20,
  degree: 360,
  children: {
    fill: { white: "#34E1FF" },
    duration: 2000
  }
}
const burst = new mojs.Burst(rawBurst)
const intervalBurst = new mojs.Burst(rawBurst)
const blueBox = document.querySelector("#gift")

function bursty(x, y) {
  burst.tune({
    x: x,
    y: y
  });

  burst.replay();
}

function randomizedConfetti() {
  let randomX = Math.floor(Math.random() * (document.body.clientWidth-100) + 0);
  let randomY = Math.floor(Math.random() * (window.innerHeight-200) + 0);
  intervalBurst.tune({
    x: randomX,
    y: randomY
  });

  intervalBurst.replay();
}

function showGift() {
  blueBox.querySelector(".lid").classList.add("open-lid")
  blueBox.querySelector(".bow").classList.add("open-bow")
  document.querySelector("#fairy").classList.add("gift")
}

Splitting();

setInterval(() => randomizedConfetti(), 800);

document.addEventListener("click", (event) => {
  bursty(event.pageX, event.pageY);
});
blueBox.addEventListener("click", (event) => {
  showGift();
});

