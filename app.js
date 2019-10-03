let language = "";
let topic = "";
let click_counter = 0;

// Array to keep track of questions already asked in round, to prevent repeats
const used_q_indexes = [];

// Variables for quiz display sections
const welcome_screen = document.getElementById("welcome-screen");
const quiz_screen = document.getElementById("quiz-screen");

const start_btn = document.getElementById("start-btn");

// *****
// INITIAL/QUIZ OPTION PAGE
// *****

const manageQuizOptions = e => {
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
  console.log(question_list);
  showQuizScreen();
};

const showQuizScreen = () => {
  welcome_screen.classList.toggle("is-hidden");
  quiz_screen.classList.toggle("is-hidden");
};

const getRandomQuestionIndex = () => {
  // Choose a word pair from topic array, check that it has not been used already during the round, and display the target word on screen
  const index = Math.floor(Math.random() * question_list.length);

  // Repeat function to choose another value if chosen value has already been used
  if (used_q_indexes.includes(index)) return getRandomQuestionIndex();

  // Add question index to array so it is not used again during round
  used_q_indexes.push(index);
  return index;
};

// const generateQuestion = () => {
//   click_counter = 0;
//   const randomIndex = getRandomIndex();
//   const chosenQuestion = langTopicCombination[randomIndex];

//   correctAnswer = Object.values(chosenQuestion)[0];
//   currentQuestion.textContent = Object.values(chosenQuestion)[1];

//   // Choose one of the three answer columns at random and display correct answer inside
//   const correctAnswerColumn = document.getElementById(
//     `a-column-${Math.floor(Math.random() * 3)}`
//   );
//   correctAnswerColumn.classList.add('correct-answer');
//   correctAnswerColumn.textContent = correctAnswer;

// EVENT LISTENERS
welcome_screen.addEventListener("click", manageQuizOptions);
