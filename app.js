let language = "";
let topic = "";

// *****
// INITIAL/QUIZ OPTION PAGE
// *****

const manageQuizOptions = e => {
  // If a language option was clicked, toggle the language and show vocab options
  if (e.target.classList.contains("lang-btn")) setLanguage(e.target);

  // If a topic was clicked, toggle the topic and show start button
  if (e.target.classList.contains("topic-btn")) setTopic(e.target);

  // If start button clicked, start quiz
  if (e.target.classList.contains("start-btn")) startQuiz();
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
  document.getElementById("start-btn").classList.toggle("is-hidden");
  startBtn.focus();
};

// *****
// QUIZ IN PROGRESS PAGE
// *****

// EVENT LISTENERS
document
  .getElementById("welcome-screen")
  .addEventListener("click", manageQuizOptions);
