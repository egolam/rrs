let possibleChoices = ["rock", "paper", "scissors"];


function getComputerChoice(){
    const comChoice = possibleChoices[Math.floor(Math.random()* possibleChoices.length)];
    return comChoice;
}


function playRound(){

    const playerSelection = prompt("What is your move?: ")
    const computerChoice = getComputerChoice();

    console.log("Computer choise is " + computerChoice);

    if(playerSelection ==  computerChoice){
        console.log("Draw!");
    }else if(playerSelection == "rock" && computerChoice == "scissors"){
        console.log("Player wins!");
    }else if(playerSelection == "paper" && computerChoice == "rock"){
        console.log("Player wins!");
    }else if(playerSelection == "scissors" && computerChoice == "paper"){
        console.log("Player wins!");
    }else if(computerChoice == "rock" && playerSelection == "scissors"){
        console.log("Computer wins!");
    }else if(computerChoice == "paper" && playerSelection == "rock"){
        console.log("Computer wins!");
    }else if(computerChoice == "scissors" && playerSelection == "paper"){
        console.log("Computer wins!");
    }
}


playRound();