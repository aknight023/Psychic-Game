

    $(document).ready(function() {

    var winCounter = 0;
    var loseCounter = 0;
    var guessLeft = 9;
    var guessedLetters = [];
    var computerLettersChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var computerGuess = computerLettersChoices[Math.floor(Math.random() * computerLettersChoices.length)];
    console.log(computerGuess);
    
    //updates the guesses left div
    var updateGuessesLeft = function() {
    $('#guessleft').html("Guesses Left: " + guessLeft);
    };

    //updates the guess so far div
    var updateGuessesSoFar = function() {
    $('#guessSoFar').html("Your Guesses so far: "+ guessedLetters.join(', '));
    };
    var updateWin = function() {
      $('#win').html("Wins: " + winCounter);
    };
    var updateLose = function() {
      $('#lose').html("Lose: " + loseCounter);
    };


    // console computer guess to check in debugging
    console.log(computerGuess);

    // resets the guess counter and guess array to null/empty
    var reset = function() {
      guessLeft = 9;
      guessedLetters = [];
      updateGuessesLeft();
      updateGuessesSoFar();
      updateWin();
      updateLose();
      computerGuess = computerLettersChoices[Math.floor(Math.random() * computerLettersChoices.length)];
      // console log computer guess to check in debugging on reset
      console.log(computerGuess);

    };

    // Load the initial values on page load
      reset();

      // function to get keys from key to see if they match the random computer guess
      document.onkeyup = function(event) {
        guessLeft--;
        var userGuess = event.key;
        guessedLetters.push(userGuess);
        updateGuessesLeft ();
        updateGuessesSoFar();

          if (guessLeft > 0){
            if (userGuess == computerGuess){
            winCounter++;
           // $('#win').html(winCounter);
            updateWin();
            alert("You are winner");
            reset();
            }
          }
          else if(guessLeft == 0){
            loseCounter++;
          //  $('#lose').html(loseCounter) ;
            updateLose();
            alert("you lose try again");         
            reset();
          }
    
      };
    


    });