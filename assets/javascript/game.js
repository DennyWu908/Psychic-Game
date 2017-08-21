// A string containing the computer's choices.

var alphabet = 'abcdefghijklmnopqrstuvwxyz'

// An array containing the user's guesses.

var userGuess = []

// The following four variables are intended to update the player's score (wins and losses), reamining chances at guessing, and the letters they've already guessed.

var winNumber = document.getElementById("playerWins");
var lossNumber = document.getElementById("playerLoss");

var chances = document.getElementById("guessesLeft");
var currentAnswers = document.getElementById("playerInput");

// This object will contain the initial information for the game, as well as functions to represent its rules.

var gameState = {

	wins = 0,
	losses = 0,
	guessLeft = 9,

	winGame: function() {

		this.wins = this.wins + 1
		playerWins.textContent = "Wins: " + this.wins
	}

	loseGame: function() {

		this.losses = this.losses + 1
		playerLoss.textContent = "Losses: " + this.losses
	}

	missGuess: function() {

		this.guessLeft = this.guessLeft - 1
		guessesLeft.textContent = "Guesses Left: " + this.guessLeft
	}

	outOfGuess: function() {

		this.guessLeft = 9
	}

}

// The following is the code that governs gameplay.

document.onkeyup = function(event) {

	var userGuess = event.key;
	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

	if (userGuess === computerGuess) {
		gameState.winGame()
	}
	else {
		gameState.missGuess();
		userGuess.push(computerGuess);
		computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	if (guessLeft <= 0) {
		gameState.loseGame
		gameState.outOfGuess
		userGuess = []
	}
}