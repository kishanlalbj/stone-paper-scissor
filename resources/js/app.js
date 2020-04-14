let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const choices = ["r", "p", "s"];

const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

convertLetterToWord = (letter) =>
  letter === "r"
    ? "Rock"
    : letter === "p"
    ? "paper"
    : letter === "s"
    ? "Scissor"
    : null;

win = (user, comp) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertLetterToWord(
    user
  )} beats ${convertLetterToWord(comp)}. You Win !`;
};

lose = (user, comp) => {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertLetterToWord(
    comp
  )} beats ${convertLetterToWord(user)}. You lose !`;
};

draw = (user, comp) =>
  (result_p.innerHTML = `You selected ${convertLetterToWord(
    user
  )}, Computer selected ${convertLetterToWord(comp)}, It's a draw`);

play = (userChoice) => {
  console.log("User's chice is " + userChoice);
  let compChoice = getCompChoice();
  console.log("Comp's choice is " + compChoice);

  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "sr":
    case "ps":
      lose(userChoice, compChoice);
      break;
    default:
      draw(userChoice, compChoice);
  }
};

main = () => {
  rock_div.addEventListener("click", () => {
    play("r");
  });

  paper_div.addEventListener("click", () => {
    play("p");
  });

  scissor_div.addEventListener("click", () => {
    play("s");
  });
};
getCompChoice = () => choices[Math.floor(Math.random() * 3)];

main();
