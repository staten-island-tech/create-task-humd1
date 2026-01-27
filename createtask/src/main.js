import './style.css'

const questions = [
  {
    question: "PLACEHOLDER",
    answers: ["1", "2", "3", "4"],
    correct: "1"
  },
  {
    question: "PLACEHOLDER 2",
    answers: ["1", "2", "3", "4"],
    correct: "2"
  },
];

let answered = 0; //tracks how many questions answered
const questionbox = document.querySelector('.question');
const answerbox = document.querySelector('.answers');

function loadQuestion() {
  questionbox.innerHTML = ""; //clears the previous question and answers
  answerbox.innerHTML = "";

  questionbox.insertAdjacentHTML(
    'afterbegin',
    `<h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
      ${questions[answered].question} 
    </h2>`
    //inserts question based on the number of questions answered
  );

  questions[answered].answers.forEach(answer => {
    answerbox.insertAdjacentHTML(
      'beforeend',
      `<button class="bg-blue-200 hover:bg-blue-300 text-blue-950 font-bold py-2 px-4 rounded h-20 m-5"
        id = "${answer}"> 
        ${answer}
       </button>`
       //the button id is the same as the answer choice it corresponds to
    );
    //for each question, dynamically generate the answer buttons (stored in the array) 
  });

  answerbox.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => { //detect user click on any of the answer buttons
      if (button.id === questions[answered].correct) {
        answered++; //add to the answered values if correct
        if (answered < questions.length) {
          loadQuestion(); //load the next question
        } else {
          questionbox.innerHTML = `
            <h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
              Congratulations!
            </h2>`;
          answerbox.innerHTML = ""; //clear the answer box
        }
      } else {
        questionbox.innerHTML = `
          <h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
            Wrong answer. Try again!
          </h2>`; //end the game if the answer's wrong
      }
    });
  });
}

loadQuestion();
