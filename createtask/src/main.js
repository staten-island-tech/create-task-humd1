import './style.css'

const questions = [
  {
    question: "PLACEHOLDER",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Berlin"
  },
  {
    question: "PLACEHOLDER 2",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris"
  },
];

let answered = 0;
const questionbox = document.querySelector('.question');
const answerbox = document.querySelector('.answers');

function loadQuestion() {
  questionbox.innerHTML = "";
  answerbox.innerHTML = "";

  questionbox.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
      ${questions[answered].question}
    </h2>`
  );

  questions[answered].answers.forEach(answer => {
    answerbox.insertAdjacentHTML(
      'beforeend',
      `<button class="bg-blue-200 hover:bg-blue-300 text-blue-950 font-bold py-2 px-4 rounded h-20 m-5"
        id = "${answer}">
        ${answer}
       </button>`
    );
  });

  answerbox.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      if (button.id === questions[answered].correct) {
        answered++;
        if (answered < questions.length) {
          loadQuestion();
        } else {
          questionbox.innerHTML = `
            <h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
              Congratulations!
            </h2>`;
          answerbox.innerHTML = "";
        }
      } else {
        questionbox.innerHTML = `
          <h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
            Wrong answer. Try again!
          </h2>`;
        answerbox.innerHTML = "";
      }
    });
  });
}

loadQuestion();
