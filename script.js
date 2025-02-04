const questions = [
    {
        question: "Which is the largest continent by land area?",
        options: ["Africa", "Europe", "Asia", "North America"],
        correct: "Asia"
    },
    {
        question: "Which country has the longest coastline?",
        options: ["Australia", "Canada", "USA", "Russia"],
        correct: "Canada"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Malta", "San Marino", "Vatican City"],
        correct: "Vatican City"
    },
    {
        question: "Which desert is the largest in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        correct: "Antarctic"
    },
    {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
        correct: "Brasilia"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("home-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    document.getElementById("result-screen").style.display = "none";
    loadQuestion();
}

// Load question dynamically
function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;
    
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = ""; // Clear previous options

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(button, option, questionData.correct);
        optionsContainer.appendChild(button);
    });

    document.getElementById("feedback").innerText = "";
    document.getElementById("next-btn").style.display = "none";
}

// Check answer and give instant feedback
function checkAnswer(button, selected, correct) {
    const feedback = document.getElementById("feedback");

    if (selected === correct) {
        feedback.innerText = "Correct! 🎉";
        feedback.classList.add("correct");
        score++; // Increase score for correct answers
        button.style.backgroundColor = "green";
    } else {
        feedback.innerText = `Wrong! ❌ The correct answer is ${correct}.`;
        feedback.classList.add("wrong");
        button.style.backgroundColor = "red";
    }

    // Disable all buttons after answer selection
    document.querySelectorAll(".option").forEach(btn => btn.disabled = true);

    document.getElementById("next-btn").style.display = "block"; // Show next button
}

// Load next question or go to result screen
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show final score
function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

// Restart quiz
function restartQuiz() {
    startQuiz();
}
