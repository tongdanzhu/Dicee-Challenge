// create random numbers for two dices
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// dice images sourcs
var player1DiceImage = "dice" + randomNumber1 + ".png";
var player2DiceImage = "dice" + randomNumber2 + ".png";

var imageSource = "images/";

// show randomized dices
document.querySelector(".img1").setAttribute("src", imageSource + player1DiceImage);
document.querySelector(".img2").setAttribute("src", imageSource + player2DiceImage);

// show winner on the h1
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
else {
  document.querySelector("h1").textContent = "Draw!";
}
