// script.js

// Define variables for DOM elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("options");
const timerElement = document.getElementById("time-left");
const scoreElement = document.getElementById("current-score");
const nextButton = document.getElementById("next-button");

// Define the quiz data
const quizData = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    question: "What is 1+1?",
    answers: ["2", "1", "3", "4"],
    correctAnswer: "2",
  },
];

// Add your js code here

let score = 0;
createQuestionInterface(quizData);

async function createQuestionInterface(data) {
  let questionNo = 0;
  for (const quiz of data) {
    scoreElement.innerText = score;
    answersElement.innerHTML = null;
    const { question, answers, correctAnswer } = quiz;
    // adding question in question element
    questionElement.innerText = question;
    const intervalRef = implementTimer();
    createOptions(answers, correctAnswer, questionNo);
    await quizHold();
    questionNo++;
    clearInterval(intervalRef);
  }
  questionElement.innerText = "Quiz completed!";
  answersElement.style.display = "none";
  document.getElementsByClassName("timer")[0].style.display = "none";
  scoreElement.innerText = score;
  nextButton.style.display = "none";
}

function createOptions(options, correctAnswer, questionNo) {
  let selectedButtonRef = null;
  for (const option of options) {
    const button = document.createElement("button");
    button.addEventListener("click", (e) => {
      if (option == correctAnswer && score < questionNo + 1) {
        // if current selected answer is correct
        score++;
      } else if (score == questionNo + 1) {
        // if current selected answer is wrong
        score--;
      }
      if (selectedButtonRef) {
        selectedButtonRef.style = {};
        selectedButtonRef = e.target;
        selectedButtonRef.style.backgroundColor = "blue";
        selectedButtonRef.style.color = "white";
      } else {
        selectedButtonRef = e.target;
        selectedButtonRef.style.backgroundColor = "blue";
        selectedButtonRef.style.color = "white";
      }
      scoreElement.innerText = score;
    });
    button.innerText = option;
    answersElement.append(button);
  }
}

function quizHold() {
  return new Promise((resolve) => {
    // hold quiz for 60 seconds
    const timeOutRef = setTimeout(() => {
      resolve("load new quiz....");
    }, 60 * 1000 /* 60 seconds quizz */);
    // add next button functionality to skip quiz hold of 60 sec
    nextButton.addEventListener("click", (timeOutRef) => {
      clearTimeout(timeOutRef);
      resolve("load new quiz....");
    });
    return () => clearTimeout(timeOutRef);
  });
}

function implementTimer() {
  let count = 60;
  timerElement.innerText = count;
  const intervalRef = setInterval(() => {
    count--;
    timerElement.innerText = count;
  }, 1000);
  return intervalRef;
}
