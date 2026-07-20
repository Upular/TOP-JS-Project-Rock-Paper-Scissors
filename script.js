console.log("Welcome to Rock Paper Scissors Game!");

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "Rock";
  } else if (randomNumber === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

//This would be the array way of accomplishing the same thing
/*let myArr = ["Rock", "Paper", "Scissors"];
let randomIndex = Math.floor(Math.random() * 3);
console.log(myArr[randomIndex]);*/

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice (rock, paper, or scissors):");
  return humanChoice;
}

let humanChoice = getHumanChoice();
console.log(humanChoice);

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      let lowHumanChoice = humanChoice.toLowerCase();
      let lowcomputerChoice = computerChoice.toLowerCase();

      if (lowHumanChoice === "rock" && lowcomputerChoice === "scissors") {
        humanScore += 1;
        return "You win! Rock beats scissors!";
      } else if (lowHumanChoice === "paper" && lowcomputerChoice === "rock") {
        humanScore += 1;
        return "You win! paper beats rock!";
      } else if (
        lowHumanChoice === "scissors" &&
        lowcomputerChoice === "paper"
      ) {
        humanScore += 1;
        return "You win! scissors beats paper";
      } else if (
        lowcomputerChoice === "rock" &&
        lowHumanChoice === "scissors"
      ) {
        computerScore += 1;
        return "You lose! Rock beats scissors!";
      } else if (lowcomputerChoice === "paper" && lowHumanChoice === "rock") {
        computerScore += 1;
        return "You lose! paper beats rock!";
      } else if (
        lowcomputerChoice === "scissors" &&
        lowHumanChoice === "paper"
      ) {
        computerScore += 1;
        return "You lose! scissors beats paper";
      }
    }
    let result = playRound(humanChoice, computerChoice);
    console.log(result);
  }
}
