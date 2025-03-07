// Sample 50 questions from the provided PDF
const questions = [
    {
        question: "The temperature of potentially hazardous foods should be taken every ___ hours.",
        options: ["2", "3", "4", "5"],
        correct: "4"
    },
    {
        question: "Approximately how long does it take a food safety auditor to complete an audit?",
        options: ["1 hour", "2 hours", "3 hours", "4 hours"],
        correct: "2 hours"
    },
    {
        question: "Cashiers should repeat the order back to the customer before completing the order.",
        options: ["True", "False"],
        correct: "True"
    },
    {
        question: "How many times per year will stores receive food safety audits?",
        options: ["1", "2", "3", "4"],
        correct: "2"
    },
    {
        question: "If a customer insists on a rare burger you should:",
        options: [
            "Give it to them if they are certain",
            "Give them a slightly undercooked burger",
            "Ask them to try one the Five Guys way",
            "Refuse the request"
        ],
        correct: "Ask them to try one the Five Guys way"
    }
];

const quizContainer = document.getElementById('quizContainer');
const quizForm = document.getElementById('quizForm');
const resultContainer = document.getElementById('result');

// Render the quiz
function loadQuiz() {
    quizContainer.innerHTML = "";
    questions.forEach((q, index) => {
        const questionHTML = `
            <div class="question">
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map(option => `
                    <label>
                        <input type="radio" name="q${index}" value="${option}" required>
                        ${option}
                    </label><br>
                `).join('')}
            </div>
        `;
        quizContainer.innerHTML += questionHTML;
    });
}

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    questions.forEach((q, index) => {
        const selected = document.querySelector(input[name="q${index}"]:checked);
        if (selected && selected.value === q.correct) {
            score++;
        }
    });
    resultContainer.textContent = You scored ${score} out of ${questions.length}!;
});

loadQuiz();
