"use strict";

// Get our secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Event listenser for Clicking 'Check' button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // If value not given by user
  if (!guess) {
    document.querySelector(".message").textContent = "No number! 🚫";
  } // When player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct number! 🎉";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Updating high score
    const score = document.querySelector(".score").textContent;
    const highScore = document.querySelector(".highscore").textContent;
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  } // When guess does not match the secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high! 📈" : "Too low! 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game 💥";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Resetting the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
