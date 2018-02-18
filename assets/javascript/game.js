//I created the variables for the gme
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
let guesses = 10;
//I made the computer guess randomly
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//I created a function to operate the game
document.onkeypress = function(event) {
    //I made the userguess be when they click on the keyboard keys
    var userGuess = event.key;
    //what happens when keys are pressed
    if(userGuess === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++
    }

    if(guesses < 0){
    guesses = 10;
    }

    //I wrote what will appear on the page
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;
  }




