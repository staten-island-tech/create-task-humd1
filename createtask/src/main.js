import './style.css'

const questions = [
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Au", "Ag", "Gd", "Go"],
    correct: "Au"
  },
  {
    question: "What planet is known as the Red Planet?",
    answers: ["Mars", "Venus", "Jupiter", "Mercury"],
    correct: "Mars"
  },
  {
    question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correct: "Carbon Dioxide"
  },
  {
    question: "What is the powerhouse of the cell?",
    answers: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    correct: "Mitochondria"
  },
  {
    question: "Water boils at what temperature at sea level?",
    answers: ["100°C", "90°C", "212°C", "80°C"],
    correct: "100°C"
  },
  {
    question: "Which element has the highest atomic number naturally occurring on Earth?",
    answers: ["Uranium", "Plutonium", "Lead", "Osmium"],
    correct: "Uranium"
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: "Nitrogen"
  },
  {
    question: "What is the main function of red blood cells?",
    answers: ["Fight infection", "Carry oxygen", "Clot blood", "Produce hormones"],
    correct: "Carry oxygen"
  },
  {
    question: "Which planet has the most moons?",
    answers: ["Jupiter", "Saturn", "Neptune", "Earth"],
    correct: "Saturn"
  },
  {
    question: "What type of bond involves the sharing of electron pairs between atoms?",
    answers: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Metallic bond"],
    correct: "Covalent bond"
  }
];
//questions and answers (+ correct answer)

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
          loadQuestion(); //load the next question if the number answered is less than the total number of questions
        } else {
          questionbox.insertAdjacentHTML(
            'afterbegin',
            `<h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
              Congratulations!
            </h2>`
          );
          answerbox.innerHTML = ""; //clear the answer box
        }
      } else {
        questionbox.insertAdjacentHTML(
          'afterbegin',
          `<h2 class="text-2xl font-bold text-center pb-10 text-blue-950">
            Wrong answer. Try again!
          </h2>`
        ); //end the game if the answer's wrong
        answerbox.innerHTML = "";
      }
    });
  });
}

loadQuestion(); //starts with the first question
