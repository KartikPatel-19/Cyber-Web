const quizData = [
  {
    question:
      "What is the most common type of cyberattack targeting individuals?",
    options: [
      "Phishing",
      "Ransomware",
      "DDoS (Distributed Denial of Service)",
      "Malware",
    ],
    correct: "Phishing",
  },
  {
    question:
      "What does 'phishing' refer to in the context of cybersecurity?",
    options: [
      "Using fake websites to steal personal information",
      "Tracking online activity for marketing purposes",
      "Sending fake emails to trick people into giving sensitive information",
      "Hacking into Wi-Fi networks to steal data",
    ],
    correct:
      "Sending fake emails to trick people into giving sensitive information",
  },
  {
    question: "Which of the following is a strong password practice?",
    options: [
      "Using your pet's name and birth year",
      "Creating a long password with a mix of letters, numbers, and symbols",
      "Reusing the same password for every account",
      "Writing your password down in a notebook for easy access",
    ],
    correct:
      "Creating a long password with a mix of letters, numbers, and symbols",
  },
  {
    question:
      "What should you do if you receive an email asking for personal information from an unfamiliar source?",
    options: [
      "Respond with the requested information",
      "Open any links or attachments in the email",
      "Mark the email as spam and delete it",
      "Forward the email to your friends to warn them",
    ],
    correct: "Mark the email as spam and delete it",
  },
  {
    question:
      "How often should you update your passwords for online accounts?",
    options: [
      "Every 1-2 years",
      "Every month",
      "Only when you forget your password",
      "Every 3-6 months",
    ],
    correct: "Every 3-6 months",
  },
  {
    question: "Which of these is a sign that a website may not be secure?",
    options: [
      "The website uses 'https://' instead of 'http://'",
      "There is a padlock symbol in the browser's address bar",
      "The website asks for personal information without any explanation",
      "The website has a green color scheme",
    ],
    correct:
      "The website asks for personal information without any explanation",
  },
  {
    question:
      "What should you do if you suspect that your computer has been infected with malware?",
    options: [
      "Ignore it and continue working",
      "Disconnect from the internet and run an antivirus scan",
      "Try to remove the malware manually",
      "Share the infection with others to warn them",
    ],
    correct: "Disconnect from the internet and run an antivirus scan",
  },
  {
    question: "Why is it important to use two-factor authentication (2FA)?",
    options: [
      "It makes your accounts look more professional",
      "It helps to protect your account even if your password is compromised",
      "It makes it easier to share your accounts with friends",
      "It speeds up the login process",
    ],
    correct:
      "It helps to protect your account even if your password is compromised",
  },
  {
    question: "What is a 'secure' Wi-Fi network?",
    options: [
      "Using fake websites to steal personal information",
      "Tracking online activity for marketing purposes",
      "Sending fake emails to trick people into giving sensitive information",
      "Hacking into Wi-Fi networks to steal data",
    ],
    correct: "Hacking into Wi-Fi networks to steal data",
  },
  {
    question:
      "What is the best way to protect your personal information when using public Wi-Fi?",
    options: [
      "Share your personal information freely, since its usually safe",
      "Use a Virtual Private Network (VPN) to encrypt your connection",
      "Avoid logging into any accounts while using public Wi-Fi",
      "Both B and C",
    ],
    correct: "Both B and C",
  },
];
let currentQuestionIndex = 0;
let rightAnswer = 0;

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
    rightAnswer+=1;
  } else {
    optionElement.classList.add("wrong");
  }
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      displayResult();
    }
  }, 1000);
}

loadQuestion();

function displayResult() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  const resultMessage = document.getElementById("quiz-container");
  resultMessage.innerHTML=
    "<h2>We have submitted your response.<span>Here is your result.</span></h2>";

  const scoreElement = document.createElement("h2");
  scoreElement.textContent = `${rightAnswer}/${quizData.length}`;
  scoreElement.style.color =
    rightAnswer <= quizData.length / 3
      ? "#ab0306"
      : rightAnswer >= quizData.length / 3 && rightAnswer <= quizData.length / 2
      ? "#FFD700"
      : "#0ba312";
  quizContainer.appendChild(scoreElement);

  const emojiElement = document.createElement("img");
  emojiElement.style.width = "132px";
  emojiElement.style.height = "132px";
  emojiElement.src =
    rightAnswer <= quizData.length / 3
      ? "Emojis/Confounded-face.png"
      : rightAnswer >= quizData.length / 3 && rightAnswer <= quizData.length / 2
      ? "Emojis/Confused-face.png"
      : "Emojis/Happy-face.png";
  quizContainer.appendChild(emojiElement);

  document.getElementById("back").style.display = "block";
}