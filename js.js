
function ComputerPlay(){
    let compTurnOptions = ['Rock','Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * compTurnOptions.length);
    let compGuess = compTurnOptions[randomNumber];
    return compGuess;
}

let compGuess = ComputerPlay();
console.log(compGuess);
function PlayerPlay(){
    let playerGuess = prompt("Please Select either Rock, Paper or Scissors: ");

    if(playerGuess == "Rock"){
        if(compGuess == "Rock"){
            alert("Comp chose Rock as well! It's a draw");
        }
        else if (compGuess == "Paper"){
            alert("Comp chose Paper. Paper Beats Rock. You Lose");
        }
        else {
            alert("Comp Chose Scissors. Rock beats Scissors. You win!");
        }
    }
    else if (playerGuess == "Paper"){
        if(compGuess == "Rock"){
            alert("Comp Chose Rock. Paper Beats Rock. You win!");
        }
        else if(compGuess == "Paper"){
            alert("Comp chose Paper as well! It's a draw");
        }
        else{
            alert("Comp Chose Scissors. Scissors Beats Paper. You Lose");
        }
    }
    else if (playerGuess =="Scissors"){
        if(compGuess == "Rock"){
            alert("Computer Chose Rock. Rock Beats Scissors. You Lose");
        }
        else if(compGuess =="Paper"){
            alert("Computer Chose Paper. Scissors Beats Paper. You Win");
        }
        else{
            alert("Computer also chose Scissors. It's a draw!")
        }
    }
    else{
        alert("You didn't choose right");
        playerGuess = "";
    }
}



PlayerPlay();
