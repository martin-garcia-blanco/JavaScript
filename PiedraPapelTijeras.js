const getUserChoice = userInput=>{
  userInput = userInput.toLowerCase();
  if(userInput=="rock" || userInput=="paper" || userInput=="scissors" ){

  } else{
    console.log("Elixe unha opción válida");
  }
};

const getComputerChoice =() =>{
  var valor = Math.floor(Math.random()*(2+1));
  switch (valor){
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

function determineWinner(userChoice, computerChoice){
  if(userChoice == computerChoice){
    return "Game was a tie";
  }
  if(userChoice == "rock"){
    if (computeCrhoice == "paper"){
      return "Computer wins";
    } else if(computerChoice == "scissors"){
      return "User wins"
    }
  } else if(userChoice == "paper"){
    if (computerChoice == "rock"){
      return "User wins";
    } else if(computerChoice == "scissors"){
      return "Computer wins"
    }
  } else {
    if (computerChoice == "paper"){
      return "User wins";
    } else if(computerChoice == "rock"){
      return "Computer wins"
    }
  }
}

function playGame(){
  var userChoice = getUserChoice("paper");
  var computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice,computerChoice));

  console.log(userChoice);
  console.log(computerChoice);
}


playGame();
