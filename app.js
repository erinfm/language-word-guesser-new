let language = "";
let topic = "";
let question_list = "";
let click_counter = 0;
let current_score = 0;

let my_interval = "";

// Array to keep track of questions already asked in round, to prevent repeats
const used_q_indexes = [];

// Variables for quiz display sections
const welcome_screen = document.getElementById("welcome-screen");
const quiz_screen = document.getElementById("quiz-screen");

const topic_columns = document.getElementById("topic-columns");

const start_btn = document.getElementById("start-btn");

const current_question = document.getElementById("current-question");
const answer_options = document.querySelectorAll(".answer-option");

const score_display = document.getElementById("score");
const timer = document.getElementById("timer");

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
  topic_columns.classList.toggle("is-hidden");
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
  topic_columns.innerHTML = ` 
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

  question_list = words[chosen_combination];

  generateQuestion();

  showQuizScreen();

  start_timer();
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

const generateQuestion = () => {
  // First, reset click counter
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

const start_timer = () => {
  const max_ticks = 59;
  let tick_count = -1;
  const tick = () => {
    if (tick_count >= max_ticks) {
      // Stops the interval
      clearInterval(my_interval);
      // End the round
      stop_quiz();
      return;
    }
    const time_remaining = max_ticks - tick_count;
    if (time_remaining < 10)
      timer.textContent = `Time Remaining: 0${time_remaining}`;
    else timer.textContent = `Time Remaining: ${time_remaining}`;

    tick_count += 1;
  };

  // Call tick function every second.
  my_interval = setInterval(tick, 1000);
};

const stop_timer = () => {
  clearInterval(my_interval);
  timer.textContent = `Time Remaining: 60`;
};

const manageQuizScreenClicks = e => {
  // Prevent multiple rapid clicks. This stops multiple answers from being chosen
  console.log(e.target);
  if (!e.target.classList.contains("answer-option")) return;

  click_counter += 1;

  if (click_counter !== 1) return;

  // Otherwise, see whether correct or incorrect answer was clicked

  if (e.target.classList.contains("correct-answer")) {
    manageCorrectAnswer(e.target, nextQuestion);
  } else manageIncorrectAnswer(e.target, nextQuestion);
};

const manageCorrectAnswer = (element, callback) => {
  console.log(element);

  // Turn element green
  element.classList.add("is-success");

  // Increment score
  current_score += 1;
  score_display.textContent = `Score: ${current_score}`;

  setTimeout(callback, 900);
  // incrementScore();
  // setTimeout(resetOptionClasses, 900);
  // setTimeout(generateQuestion, 900);
};

const manageIncorrectAnswer = (element, callback) => {
  console.log(element);

  // Turn element red
  element.classList.add("is-danger");

  showCorrectAnswer();

  setTimeout(callback, 900);

  // setTimeout(resetOptionClasses, 900);
  // setTimeout(generateQuestion, 900);
};

const showCorrectAnswer = () => {
  answer_options.forEach(option => {
    if (option.classList.contains("correct-answer")) {
      option.classList.add("is-success");
    }
  });
};

const nextQuestion = () => {
  // Reset option classes
  answer_options.forEach(option => {
    option.classList.remove("is-success", "is-danger", "correct-answer");
  });

  // Generate next question
  generateQuestion();
};

// ******
// EVENT LISTENERS
// ******
welcome_screen.addEventListener("click", manageQuizSetupOptions);
quiz_screen.addEventListener("click", manageQuizScreenClicks);
