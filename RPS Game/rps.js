const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === 'rock' ||
      userInput === 'paper' ||
      userInput === 'scissors' ||
      userInput === 'bomb'
    ) {
      return userInput;
    } else {
      console.log("Error: Invalid selection.");
    }
  };
  
  const getComputerChoice = () => {
    let computerNum = Math.floor(Math.random() * 3);
    switch (computerNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      default:
        return "rock";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    let gameResult = "";
    if (userChoice === 'bomb') {
      gameResult = "You won!";
      return gameResult;
    }
    if (userChoice === computerChoice) {
      gameResult = "The game was a tie";
      return gameResult;
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        gameResult = "The computer has won.";
        return gameResult;
      } else {
        gameResult = "You won!";
        return gameResult;
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        gameResult = "The computer has won.";
        return gameResult;
      } else {
        gameResult = "You won!";
        return gameResult;
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        gameResult = "The computer has won.";
        return gameResult;
      } else {
        gameResult = "You won!";
        return gameResult;
      }
    }
  };
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('The computer chose: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  