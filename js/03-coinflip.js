let coinFlip = Math.round(Math.random());

var choice;
var result;
coinFlip >= 50 ? result = 1 : result = 0;


    choice = prompt("Please choose either Heads or Tails only\n", "Heads");
    // handles user-entered "Heads" or "Tails" in uppercase/ lowercase/ mixed case also!
    if(choice.toUpperCase() === "HEADS") {
       result === 1 ? alert("The flip was heads and you chose heads...you win!") : alert("The flip was tails and you chose heads...you lose!");
    } else if(choice.toUpperCase() === "TAILS") {
        result === 0 ? alert("The flip was tails and you chose tails...you win!") : alert("The flip was heads and you chose tails...you lose!");
    } else { // anything other than "heads" or "tails" will result in an error
        alert("You made a wrong choice ! Please choose either Heads or Tails only...");
    }

