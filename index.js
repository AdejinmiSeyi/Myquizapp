const Questions = [
  {
    questionId: 1,
    question: "1. Which of these is NOT a South Africa national park?",
    options: {
      text: "Addo Elephant Park",
      answer: "false",
      text: "Kruger National Park",
      answer: "false",
      text: "Table Mountain National Park",
      answer: "false",
      text: "Goreme National Park",
      answer: "true",
    },
  },

  {
    questionId: 2,
    question: "2. Which of these is NOT a South Africa national park?",
    options: {
      text: "Addo Elephant Park",
      answer: "false",
      text: "Kruger National Park",
      answer: "false",
      text: "Table Mountain National Park",
      answer: "false",
      text: "Goreme National Park",
      answer: "true",
    },
  },

  {
    questionId: 3,
    question: "3. Which of these is NOT a South Africa national park?",
    options: {
      text: "Addo Elephant Park",
      answer: "false",
      text: "Kruger National Park",
      answer: "false",
      text: "Table Mountain National Park",
      answer: "false",
      text: "Goreme National Park",
      answer: "true",
    },
  },

  {
    questionId: 4,
    question: "4. Which of these is NOT a South Africa national park?",
    options: {
      text: "Addo Elephant Park",
      answer: "false",
      text: "Kruger National Park",
      answer: "false",
      text: "Table Mountain National Park",
      answer: "false",
      text: "Goreme National Park",
      answer: "true",
    },
  },

  {
    questionId: 5,
    question: "5. Which of these is NOT a South Africa national park?",
    options: {
      text: "Addo Elephant Park",
      answer: "false",
      text: "Kruger National Park",
      answer: "false",
      text: "Table Mountain National Park",
      answer: "false",
      text: "Goreme National Park",
      answer: "true",
    },
  },
];

const playQuiz = document.querySelector(".question-container");
const viewResult = document.querySelector(".result");
const submitButton = document.querySelector(".submit");

for (let i = 0; i < Questions.length; i++) {
  // create a paragraph element to hold the quiz text and assign to variable "quizItems"
  const quizItems = document.createElement("p");

  //render quiz on the DOM using "innerHTML"
  quizItems.innerHTML = `${Questions[i].question}
  ${Questions[i].options["text"]}`;
  // : ${data[i].age};
  playQuiz.appendChild(quizItems);
}
