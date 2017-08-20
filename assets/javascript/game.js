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

	wins = 0
	losses = 0
	guessLeft = 9

	
}