const quizData = [
  {
    question: "What does the acronym 'HTTP' stand for in web development?",
    options: [
      "HyperText Transmission Protocol",
      "HyperText Technical Protocol",
      "HyperText Transfer Protocol",
      "Hyper Transfer Text Protocol",
    ],
    correct: "HyperText Transfer Protocol",
  },
  {
    question: "Who is known as the 'father of modern computing'?",
    options: [
      "Charles Babbage",
      "Alan Turing",
      "John von Neumann",
      "Bill Gates",
    ],
    correct: "Charles Babbage",
  },
  {
    question: "In computer science, what does 'API' stand for?",
    options: [
      "Application Programming Interface",
      "Automated Programming Interface",
      "Advanced Programming Integration",
      "Application Performance Indicator",
    ],
    correct: "Application Programming Interface",
  },
  {
    question:
      "Which programming language is primarily used for developing Android mobile applications?",
    options: ["Java", "C++", "Swift", "Python"],
    correct: "Java",
  },
  {
    question:
      "What is the primary function of the ALU (Arithmetic Logic Unit) in a CPU?",
    options: [
      "To manage input and output devices",
      "To perform arithmetic and logical operations",
      "To control the clock speed of the CPU",
      "To store data temporarily",
    ],
    correct: "To perform arithmetic and logical operations",
  },
  {
    question: "Which of the following is a type of non-volatile memory?",
    options: ["RAM", "Cache memory", "Hard Disk Drive (HDD)", "Register"],
    correct: "Hard Disk Drive (HDD)",
  },
  {
    question: "What is the full form of the term 'GPU' in computing?",
    options: [
      "General Processing Unit",
      "Graphics Processing Unit",
      "Global Processing Unit",
      "General Purpose Unit",
    ],
    correct: "Graphics Processing Unit",
  },
  {
    question:
      "Which of these is a key feature of the 5th generation of computers?",
    options: [
      "Vacuum tubes",
      "Artificial Intelligence",
      "Punch cards",
      "Magnetic tapes",
    ],
    correct: "Artificial Intelligence",
  },
  {
    question:
      "In electrical engineering, what is the unit of electrical resistance?",
    options: ["Ampere", "Volt", "Ohm", "Watt"],
    correct: "Ohm",
  },
  {
    question:
      "Which of the following network topologies connects all devices to a central hub?",
    options: [
      "Star topology",
      "Ring topology",
      "Bus topology",
      "Mesh topology",
    ],
    correct: "Star topology",
  },
];
let currentQuestionIndex = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  const questionData = quizData[currentQuestionIndex];
  const questionElement = document.createElement("div");
  questionElement.className = "question";
  questionElement.textContent = questionData.question;
  quizContainer.appendChild(questionElement);

  questionData.options.forEach((option) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.addEventListener("click", () =>
      checkAnswer(optionElement, questionData.correct)
    );
    quizContainer.appendChild(optionElement);
  });
}

function checkAnswer(optionElement, correctAnswer) {
  if (optionElement.textContent === correctAnswer) {
    optionElement.classList.add("correct");
  } else {
    optionElement.classList.add("wrong");
  }
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      alert("Quiz completed!");
    }
  }, 1000);
}

loadQuestion();
