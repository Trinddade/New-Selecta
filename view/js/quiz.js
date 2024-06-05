const quizData = [
    {
        question: "Qual era o nome completo de Machado de Assis?",
        options: ["Joaquim Maria Machado de Assis", "Machado Maria de Assis", "Joaquim José Machado de Assis", "José Machado de Assis"],
        answer: "Joaquim Maria Machado de Assis"
    },
    {
        question: "Em que cidade Machado de Assis nasceu?",
        options: ["Rio de Janeiro", "São Paulo", "Salvador", "Rio Grande do Sul"],
        answer: "Rio de Janeiro"
    },
    {
        question: "Qual foi o primeiro livro publicado por Machado de Assis?",
        options: ["Memórias Póstumas de Brás Cubas", "Dom Casmurro", "Quincas Borba", "Ressurreição"],
        answer: "Ressurreição"
    },
    {
        question: "Machado de Assis foi o fundador e primeiro presidente de qual instituição literária?",
        options: ["Academia Brasileira de Letras", "Sociedade Brasileira de Escritores", "Associação dos Escritores Brasileiros", "Clube dos Escritores Brasileiros"],
        answer: "Academia Brasileira de Letras"
    },
    {
        question: "Qual é o título do romance de Machado de Assis que é considerado um dos maiores clássicos da literatura brasileira?",
        options: ["Quincas Borba", "Memórias Póstumas de Brás Cubas", "Dom Casmurro", "Helena"],
        answer: "Dom Casmurro"
    }
];

const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const startButton = document.getElementById('startBtn');
const nextButton = document.getElementById('nextBtn');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;
let quizStarted = false;

function startQuiz() {
    quizStarted = true;
    startButton.style.display = 'none';
    loadQuestion();
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';

    currentQuizData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    nextButton.style.display = 'inline-block';
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.height = 'auto';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.innerHTML = `Você acertou ${score} de ${quizData.length} questões. Parabéns!`;

    setTimeout(() => {
        quizContainer.style.display = 'none';
    }, 10000); // Fechar quiz após 10 segundos
}

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    optionsElement.style.display = 'block';
    resultElement.style.display = 'none';
    loadQuestion();
});