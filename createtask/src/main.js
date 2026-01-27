import './style.css'

import './style.css'

const questions = [
  {
    question: "PLACEHOLDER",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "PLACEHOLDER 2",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
];

let score = 0;
const questionbox = document.querySelector('.question');
const answerbox = document.querySelector('.answers');
const scorebox = document.querySelector('.score');

function loadQuestion() {
  questionbox.innerHTML = "";
  answerbox.innerHTML = "";

  questionbox.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
      ${questions[score].question}
    </h2>`
  );

  questions[score].answers.forEach((answer, index) => {
    answerbox.insertAdjacentHTML(
      'afterbegin',
      `<button 
         class="bg-blue-200 hover:bg-blue-300 text-blue-950 font-bold py-2 px-4 rounded h-20 m-5"
         data-index="${index}">
         ${answer}
       </button>`
    );
  });
}

loadQuestion();
