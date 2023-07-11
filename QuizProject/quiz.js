const data = [
  {
    id: 1,
    question: "How many colors are there in a rainbow?",
    answers: [
      { answer: "7", isCorrect: true },
      { answer: "3", isCorrect: false },
      { answer: "8", isCorrect: false },
      { answer: "12", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Name the biggest animal...",
    answers: [
      { answer: "Elephant", isCorrect: false },
      { answer: "Blue Whale", isCorrect: true },
      { answer: "Ant", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What is the name of Peppa's younger brother?",
    answers: [
      { answer: "Greg", isCorrect: false },
      { answer: "George", isCorrect: true },
      { answer: "Paul", isCorrect: false },
      { answer: "Adam", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What do you measure with a thermometer?",
    answers: [
      { answer: "Length", isCorrect: false },
      { answer: "Temperature", isCorrect: true },
      { answer: "Height", isCorrect: false },
      { answer: "Weight", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  selectedAnswer;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
        <div class="answer">
                <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
                <label for=${index}>${item.answer}</label>
            </div>
        `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();