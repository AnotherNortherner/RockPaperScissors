
let gameOver = false;
let gameResult;
let compScore=0;
let playerScore=0;

//Generate Computer Guess
function ComputerPlay(){
    let compTurnOptions = ['Rock','Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * compTurnOptions.length);
    let compGuess = compTurnOptions[randomNumber];
    return compGuess;
}

//Ask for player guess and convert to lower case
function PlayerPlay(){
    let answerValid = false;
    while(!answerValid){
        let playerInput = prompt("Please Select either Rock, Paper or Scissors: ");
        if(playerInput != null){
            let playerGuess = playerInput.toLowerCase();
            if(playerGuess == "rock" || playerGuess == "paper" || playerGuess == "scissors"){
                return playerGuess;
                answerValid = true;
            }
            else {
                alert("You must have mistyped. Please try again");
            }
        }
        else{
            answerValid = true;
            console.log("gameover");
            alert("goodbye");
            gameOver=true;
        }

        
    }
    

}


function playGame(playerGuess, compGuess){
   
        switch (playerGuess){
            case "rock": 
            if(compGuess == "Rock"){
                alert("Comp chose Rock as well! It's a draw");
                gameResult="Draw";
                playerScore++;
                compScore++;
            }
            else if (compGuess == "Paper"){
                alert("Comp chose Paper. Paper Beats Rock. You Lose");
                gameResult="CompWin";
                compScore++;
            }
            else {
                alert("Comp Chose Scissors. Rock beats Scissors. You win!");
                gameResult="PlayerWin";
                playerScore++;
            }
            break;
        
        case "paper":
            if(compGuess == "Rock"){
                alert("Comp Chose Rock. Paper Beats Rock. You win!");
                gameResult="PlayerWin";
                playerScore++;
            }
            else if(compGuess == "Paper"){
                alert("Comp chose Paper as well! It's a draw");
                gameResult="Draw";
                playerScore++;
                compScore++;
            }
            else{
                alert("Comp Chose Scissors. Scissors Beats Paper. You Lose");
                gameResult="CompWin";
                compScore++;
            }
            break;
        
        case "scissors": 
            if(compGuess == "Rock"){
                alert("Computer Chose Rock. Rock Beats Scissors. You Lose");
                gameResult="CompWin";
                compScore++;
            }
            else if(compGuess =="Paper"){
                alert("Computer Chose Paper. Scissors Beats Paper. You Win");
                gameResult ="PlayerWin";
                playerScore++;
            }
            else{
                alert("Computer also chose Scissors. It's a draw!");
                gameResult="Draw";
                compScore++;
                playerScore++;
            }
            break;
        
        }
        return gameResult;
    }

    

function playFullGame(){
if(!gameOver){
        for(let i = 1; i<=5; i++){
            if(!gameOver){
            let roundCounter = i;
            alert("Round: "+roundCounter);
            let compGuess = ComputerPlay();
            console.log("Computer: "+compGuess);
            let playerGuess = PlayerPlay();
            playGame(playerGuess, compGuess);
            console.log (gameResult);
            console.log(playerScore);
            console.log(compScore);
            alert("Round Over");
            console.log (roundCounter);
            }
        }
        if(!gameOver && compScore > playerScore)
        {
            alert("You lose " + playerScore + ":" + compScore+  " Better Luck Next Time");
            gameOver=true;
        }
        else if(playerScore > compScore)
        {
            alert("You win! " + playerScore + ":" + compScore+ " Well done!");
            gameOver=true;
        }
        else{
            alert("Draw. "+ playerScore + ":" + compScore+ " Why not try again?");
            gameOver=true;;
        }
    }
}


playFullGame();