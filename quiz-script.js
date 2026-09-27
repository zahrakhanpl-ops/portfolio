const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "High Text Machine Language", correct: false },
            { text: "Hyper Tool Multi Language", correct: false }
        ]
    },
    {
        question: "What is the primary purpose of CSS?",
        answers: [
            { text: "Styling and designing web pages", correct: true },
            { text: "Managing databases", correct: false },
            { text: "Writing server-side logic", correct: false }
        ]
    },
    {
        question: "Which language is used to make web pages interactive?",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.onclick = () => selectAnswer(answer.correct);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(isCorrect) {
    if(isCorrect) {
        alert("Correct Answer! 🎉");
    } else {
        alert("Wrong Answer! ❌");
    }
    nextButton.innerText = "Next Question";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz Completed! Great job!");
        startQuiz();
    }
});

startQuiz();
