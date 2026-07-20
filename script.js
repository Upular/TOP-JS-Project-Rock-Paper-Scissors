console.log("Welcome to Rock Paper Scissors Game!");

const GAME_RULES = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};
const VALID_OPTIONS = Object.keys(GAME_RULES);

function getComputerChoice() {
  return VALID_OPTIONS[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const lowHumanChoice = humanChoice.toLowerCase();

    if (!VALID_OPTIONS.includes(humanChoice)) {
      return "Invalid choice!";
    }
    if (lowHumanChoice === computerChoice) {
      return "It's a tie!";
    }

    const computerLoserChoice = GAME_RULES[lowHumanChoice];

    if (computerChoice === computerLoserChoice) {
      humanScore++;
      return `You win! ${lowHumanChoice} beats ${computerChoice}!`;
    } else {
      computerScore++;
      return `You lose! ${computerChoice} beats ${lowHumanChoice}!`;
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(result);
  }
  console.log("--- GAME OVER ---");
  console.log(`Final score -> You: ${humanScore} | computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game! 🎉");
  } else if (computerScore > humanScore) {
    console.log("Game over! The computer won! 🤖");
  } else {
    console.log("The match ended in a tie! Good job everyone! 🤝");
  }
}

playGame();
