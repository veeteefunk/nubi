// Get  the elements from the DOM
const choices1 = document.querySelectorAll(".choice1");
const choices2 = document.querySelectorAll(".choice2");
const choices3 = document.querySelectorAll(".choice3");
const result = document.getElementById("result");
const modal = document.querySelector(".modal");

// Call the functions according to the order of the logic of the program

var score = 0;

function getAnswer1(e) {
  const answer = e.target.id;
  if (answer === "yes1") {
    console.log("yes");
    score++;
  } else {
    console.log("no");
    score = 0;
  }
}

function getAnswer2(e) {
  const answer = e.target.id;
  if (answer === "yes2") {
    console.log("yes");
    score++;
  } else {
    console.log("no");
    score = 0;
  }
}

function getAnswer3(e) {
  const answer = e.target.id;
  if (answer === "yes3") {
    console.log("yes");
    score++;
  } else {
    console.log("no");
    score = 0;
  }
}

function showScore(e) {
  if (score === 3) {
    display.innerHTML = `<h3 class="winning">Eres muy Nubi! :) </h3>`;
  } else {
    display.innerHTML = `<h4 class="losing">Buuuu no eres nada Nubi... :(</h4>`;
  }
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// Get Computers Choice
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}


// Implement functions

// Add Event Listeners
choices1.forEach(choice => choice.addEventListener("click", getAnswer1));
choices2.forEach(choice => choice.addEventListener("click", getAnswer2));
choices3.forEach(choice => choice.addEventListener("click", getAnswer3));
result.addEventListener("click", showScore);
window.addEventListener("click", clearModal);

