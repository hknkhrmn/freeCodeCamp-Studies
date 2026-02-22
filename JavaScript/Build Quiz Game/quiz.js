const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945"
  },
  {
    category: "Math",
    question: "What is the value of Pi (rounded to two decimal places)?",
    choices: ["3.12", "3.14", "3.16"],
    answer: "3.14"
  },
  {
    category: "Technology",
    question: "What does 'HTML' stand for?",
    choices: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language"],
    answer: "HyperText Markup Language"
  }
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(questionObject, computerChoice) {
  if (computerChoice === questionObject.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}