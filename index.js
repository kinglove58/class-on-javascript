function rollDice(PlayerIndex) {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let randomImage = "img/dice" + randomNumber + ".png";
  document
    .querySelectorAll("img")
    [PlayerIndex].setAttribute("src", randomImage);
  return randomNumber;
}

let randomNumber1 = rollDice(0);
let randomNumber2 = rollDice(1);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins😂";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins😅";
} else {
  document.querySelector("h1").innerHTML = "Draw😒";
}
