let drumButtons = document.querySelectorAll(".drum");
let sounds = {
  w: new Audio("sounds/tom-1.mp3"),
  a: new Audio("sounds/tom-2.mp3"),
  s: new Audio("sounds/tom-3.mp3"),
  d: new Audio("sounds/tom-4.mp3"),
  j: new Audio("sounds/kick-bass.mp3"),
  k: new Audio("sounds/crash.mp3"),
  l: new Audio("sounds/snare.mp3"),
};

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    let buttonClick = this.innerHTML;
    playSound(buttonClick);
    animationKey(buttonClick);
  });
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);
  animationKey(event.key);
});

function playSound(key) {
  let sound = sounds[key];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

function animationKey(ojo) {
  let activeButton = document.querySelector("." + ojo);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
