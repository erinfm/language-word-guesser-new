let language = "";
let topic = "";
let click_counter = 0;

// Array to keep track of questions already asked in round, to prevent repeats
const used_q_indexes = [];

// Variables for quiz display sections
const welcome_screen = document.getElementById("welcome-screen");
const quiz_screen = document.getElementById("quiz-screen");

const start_btn = document.getElementById("start-btn");

const current_question = document.getElementById("current-question");
const answer_options = document.querySelectorAll(".answer-option");

// *****
// INITIAL/QUIZ OPTION PAGE
// *****

const manageQuizSetupOptions = e => {
  // If a language option was clicked, toggle the language and show vocab options
  if (e.target.classList.contains("lang-btn")) setLanguage(e.target);

  // If a topic was clicked, toggle the topic and show start button
  if (e.target.classList.contains("topic-btn")) setTopic(e.target);

  // If start button clicked, start quiz
  if (e.target.classList.contains("start-btn")) getQuizQuestions();
};

const setLanguage = element => {
  const chosenLanguage = element.innerText;
  language = chosenLanguage;

  // Display only chosen language
  showOnlyChosenLanguage();
  // Show topics
  showTopics();
};

const showOnlyChosenLanguage = () => {
  document.getElementById("language-columns").innerHTML = ` 
  <div class="column lang-option"> 
  <a class="button lang-btn is-primary is-medium is-fullwidth is-static">
  ${language} ✔ 
  </a>
  </div>
  `;
};

const showTopics = () => {
  document.getElementById("topic-columns").classList.toggle("is-hidden");
};

const setTopic = element => {
  const chosenTopic = element.innerText;
  topic = chosenTopic;

  // Display only chosen topic
  showOnlyChosenTopic();
  // Show start button
  showStartBtn();
};

const showOnlyChosenTopic = () => {
  document.getElementById("topic-columns").innerHTML = ` 
  <div class="column topic-option"> 
  <a class="button topic-btn is-info is-medium is-fullwidth is-static">
  ${topic} ✔ 
  </a>
  </div>
  `;
};

const showStartBtn = () => {
  start_btn.classList.toggle("is-hidden");
  start_btn.focus();
};

// *****
// QUIZ IN PROGRESS PAGE
// *****

const getQuizQuestions = () => {
  const chosen_combination = `${language}_${topic}`.toLowerCase();

  const question_list = words[chosen_combination];

  generateQuestion(question_list);
  console.log(question_list);
  showQuizScreen();
};

const showQuizScreen = () => {
  welcome_screen.classList.toggle("is-hidden");
  quiz_screen.classList.toggle("is-hidden");
};

const getRandomQuestionIndex = question_list => {
  // Choose a word pair from topic array, check that it has not been used already during the round, and display the target word on screen
  const index = Math.floor(Math.random() * question_list.length);

  // Repeat function to choose another value if chosen value has already been used
  if (used_q_indexes.includes(index)) return getRandomQuestionIndex();

  // Add question index to array so it is not used again during round
  used_q_indexes.push(index);
  return index;
};

const generateQuestion = question_list => {
  click_counter = 0;
  const index = getRandomQuestionIndex(question_list);
  const question = question_list[index];

  correct_answer = Object.values(question)[0];
  current_question.textContent = Object.values(question)[1];

  // Choose one of the three answer columns at random and display correct answer inside
  const correct_answer_column = document.getElementById(
    `a-column-${Math.floor(Math.random() * 3)}`
  );
  correct_answer_column.classList.add("correct-answer");
  correct_answer_column.textContent = correct_answer;

  // Display different incorrect answer options in other two answers columns
  const index_array = [];

  answer_options.forEach(option => {
    if (!option.classList.contains("correct-answer")) {
      let index_for_incorrect_option = Math.floor(
        Math.random() * (question_list.length - 2)
      );
      // Ensure different incorrect answer shows in each column
      if (index_array.includes(index_for_incorrect_option))
        index_for_incorrect_option += 1;
      index_array.push(index_for_incorrect_option);

      // Ensures that correct answer cannot appear again among options
      if (index_for_incorrect_option >= index) index_for_incorrect_option += 1;
      const incorrect_answer = question_list[index_for_incorrect_option];

      option.textContent = Object.values(incorrect_answer)[0];
    }
  });
};


const manageQuizScreenClicks = e => {
  console.log(e.target)
if (e.target.)

}


// ******
// EVENT LISTENERS
// ******
welcome_screen.addEventListener("click", manageQuizSetupOptions);
quiz_screen.addEventListener("click", manageQuizScreenClicks);
