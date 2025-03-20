// Função para embaralhar um array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Array de perguntas com opções e respostas corretas redistribuídas
const questionsTemplate = [
    { question: "Qual time ganhou mais títulos da Champions League?", options: ["AC Milan", "Chelsea", "Bayern Munich", "Real Madrid"], correct: 3 },
    { question: "Quem é o maior artilheiro de todos os tempos na Premier League?", options: ["Wayne Rooney", "Alan Shearer", "Harry Kane", "Sergio Aguero"], correct: 1 },
    { question: "Qual time ganhou mais títulos do Brasileirão até 2022?", options: ["Flamengo", "Santos", "São Paulo", "Palmeiras"], correct: 2 },
    { question: "Quem é o maior artilheiro de todos os tempos na La Liga?", options: ["Lionel Messi", "Telmo Zarra", "Karim Benzema", "Hugo Sanchez"], correct: 0 },
    { question: "Qual time ganhou mais títulos da Bundesliga?", options: ["Borussia Dortmund", "Hamburger SV", "Bayern Munich", "Schalke 04"], correct: 2 },
    { question: "Quem é o maior artilheiro de todos os tempos no Brasileirão?", options: ["Romário", "Pelé", "Roberto Dinamite", "Zico"], correct: 2 },
    { question: "Qual time ganhou mais títulos da Serie A?", options: ["AC Milan", "Juventus", "Inter Milan", "Roma"], correct: 1 },
    { question: "Quem é o maior artilheiro de todos os tempos na Ligue 1?", options: ["Jean-Pierre Papin", "Karim Benzema", "Delio Onnis", "Kylian Mbappe"], correct: 2 },
    { question: "Qual time ganhou mais títulos da Copa Libertadores?", options: ["São Paulo", "Grêmio", "Independiente", "River Plate"], correct: 2 },
    { question: "Quem tem mais partidas internacionais na história do futebol?", options: ["Iker Casillas", "Badr Al-Mutawa", "Ahmed Hassan", "Gianluigi Buffon"], correct: 1 },
    { question: "Quem marcou o gol mais rápido na história da Premier League?", options: ["Ledley King", "Christian Eriksen", "Sadio Mane", "Gareth Barry"], correct: 1 },
    { question: "Quem tem mais aparições na história da La Liga?", options: ["Xavi", "Andoni Zubizarreta", "Sergio Ramos", "Sergio Busquets"], correct: 1 },
    { question: "Quem tem mais assistências na história da Bundesliga?", options: ["Franck Ribery", "Thomas Muller", "Arjen Robben", "Mesut Ozil"], correct: 1 },
    { question: "Qual jogador ganhou mais prêmios de Jogador do Ano da Serie A?", options: ["Marco van Basten", "Roberto Baggio", "Zlatan Ibrahimovic", "George Weah"], correct: 1 },
    { question: "Quem tem mais aparições na história da Ligue 1?", options: ["Alain Giresse", "Jean-Luc Ettori", "Didier Six", "Dominique Baratelli"], correct: 3 },
    { question: "Quem é o maior artilheiro na história da Copa Libertadores?", options: ["Marcelo Salas", "Norberto Mendez", "Sergio Agüero", "Javier Mascherano"], correct: 1 },
    { question: "Quem tem mais assistências na história da Champions League?", options: ["Ronaldo", "Xavi", "Messi", "Iniesta"], correct: 2 },
    { question: "Quem é o jogador mais jovem a marcar em uma partida da Copa do Mundo?", options: ["Maradona", "Pelé", "Ronaldo", "Messi"], correct: 1 },
    { question: "Quem tem mais gols em Copas do Mundo?", options: ["Ronaldo", "Messi", "Gerd Muller", "Miroslav Klose"], correct: 3 },
    { question: "Qual país ganhou mais títulos da Copa do Mundo?", options: ["Alemanha", "Itália", "Brasil", "Argentina"], correct: 2 },
    { question: "Qual time tem a maior sequência invicta no Brasileirão?", options: ["Flamengo", "São Paulo", "Palmeiras", "Cruzeiro"], correct: 1 },
    { question: "Quem é o jogador mais jovem a marcar no Brasileirão?", options: ["Endrick", "Neymar", "Gabriel Pirani", "Ronaldo"], correct: 2 },
    { question: "Qual time ganhou mais títulos consecutivos do Brasileirão?", options: ["Santos", "Palmeiras", "São Paulo", "Flamengo"], correct: 1 },
    { question: "Qual jogador foi expulso mais vezes na Premier League?", options: ["Richard Dunne", "Duncan Ferguson", "Patrick Vieira", "Gareth Barry"], correct: 1 },
    { question: "Qual time tem mais títulos consecutivos da La Liga?", options: ["Real Madrid", "Atletico Madrid", "Barcelona", "Valencia"], correct: 2 },
    { question: "Qual time tem a maior sequência invicta na Bundesliga?", options: ["Borussia Dortmund", "Bayern Munich", "Bayer Leverkusen", "Schalke 04"], correct: 1 },
    { question: "Qual time tem mais títulos consecutivos da Serie A?", options: ["Inter Milan", "AC Milan", "Juventus", "Roma"], correct: 1 },
    { question: "Qual time tem mais títulos consecutivos da Ligue 1?", options: ["Olympique de Marseille", "AS Cannes", "Paris-Saint Germain", "FC Metz"], correct: 2 },
    { question: "Qual time ganhou mais títulos consecutivos da Copa Libertadores?", options: ["Grêmio", "São Paulo", "River Plate", "Club Nacional de Football"], correct: 1 },
    { question: "Quem é o jogador mais jovem a marcar na Copa Libertadores?", options: ["Neymar", "Angêlo", "Ronaldo", "Diego Maradona"], correct: 1 }
];

// Função para embaralhar as perguntas e opções, ajustando o índice da resposta correta
function shuffleQuestions(questions) {
    const shuffledQuestions = shuffleArray([...questions]);
    return shuffledQuestions.map(q => {
        const optionsWithIndices = q.options.map((option, index) => ({ option, index }));
        const shuffledOptions = shuffleArray([...optionsWithIndices]);
        const newOptions = shuffledOptions.map(item => item.option);
        const newCorrect = shuffledOptions.findIndex(item => item.index === q.correct);
        return { ...q, options: newOptions, correct: newCorrect };
    });
}

// Função para formatar o tempo em minutos e segundos
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Função para calcular a pontuação baseada em acertos e tempo
function calculateScore(correctAnswers, timeInSeconds) {
    const baseScore = correctAnswers * 10; // 10 pontos por acerto
    const timeBonus = Math.max(0, 300 - timeInSeconds); // Bônus: 300 - tempo, mínimo 0
    return baseScore + timeBonus;
}

let questions = [];
let currentQuestion = 0;
let score = 0;
let totalQuestions = 0;
let quizHistory = JSON.parse(localStorage.getItem('quizHistory')) || { attempts: 0, totalScore: 0 };
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
let startTime;
let timerInterval;

const welcomeSection = document.getElementById('welcome-section');
const quizSection = document.getElementById('quiz-section');
const welcomeMessage = document.getElementById('welcome-message');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const progressElement = document.getElementById('progress');
const questionCounter = document.getElementById('question-counter');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const historyElement = document.getElementById('history');
const leaderboardElement = document.getElementById('leaderboard');
const leaderboardBody = document.getElementById('leaderboard-body');

function updateHistory() {
    historyElement.innerHTML = `Histórico: ${quizHistory.attempts} pessoas fizeram o quiz. Média de acertos: ${(quizHistory.attempts > 0 ? (quizHistory.totalScore / (quizHistory.attempts * totalQuestions)).toFixed(2) : 0)} perguntas.`;
}

function updateLeaderboard() {
    // Ordenar leaderboard por pontuação (maior para menor)
    leaderboard.sort((a, b) => b.score - a.score);
    
    leaderboardBody.innerHTML = '';
    leaderboard.forEach((entry, index) => {
        const row = document.createElement('tr');
        const isLeader = index === 0; // O primeiro após ordenação é o líder
        row.innerHTML = `
            <td ${isLeader ? 'class="leader"' : ''}>${entry.name}${isLeader ? ' <i class="fas fa-crown"></i>' : ''}</td>
            <td>${entry.time}</td>
            <td>${entry.correct}/${totalQuestions}</td>
            <td>${entry.score}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

function startQuiz() {
    const userName = document.getElementById('user-name').value.trim();
    if (userName === '') {
        alert('Por favor, digite seu nome!');
        return;
    }
    questions = shuffleQuestions(questionsTemplate);
    totalQuestions = questions.length;
    currentQuestion = 0;
    score = 0;
    scoreElement.textContent = score;
    welcomeSection.style.display = 'none';
    quizSection.style.display = 'block';
    welcomeMessage.innerHTML = `Bem-vindo, ${userName}! <i class="fas fa-futbol"></i>`;
    restartButton.style.display = 'none';
    leaderboardElement.style.display = 'none';
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        // Pode exibir o tempo em tempo real se desejar, mas aqui só usaremos no final
    }, 1000);
    loadQuestion();
    updateHistory();
}

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.innerHTML = `<i class="fas fa-question-circle"></i> ${q.question}`;
    optionsElement.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsElement.appendChild(button);
    });

    updateProgress();
    resultElement.textContent = '';
    nextButton.style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestion];
    const options = optionsElement.children;

    if (selectedIndex === q.correct) {
        score += 10; // Apenas o score base é atualizado aqui
        scoreElement.textContent = score;
        options[selectedIndex].classList.add('correct');
        resultElement.textContent = 'Correto!';
        resultElement.style.color = '#28a745';
        resultElement.style.background = '#d4edda';
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[q.correct].classList.add('correct');
        resultElement.textContent = 'Errado!';
        resultElement.style.color = '#dc3545';
        resultElement.style.background = '#f8d7da';
    }

    for (let option of options) {
        option.style.pointerEvents = 'none';
    }

    nextButton.style.display = 'block';
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    progressElement.style.width = `${progress}%`;
    questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${totalQuestions}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        loadQuestion();
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    const endTime = Date.now();
    const elapsedTime = Math.floor((endTime - startTime) / 1000);
    clearInterval(timerInterval);

    const correctAnswers = score / 10; // Número de acertos
    const finalScore = calculateScore(correctAnswers, elapsedTime);

    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.innerHTML = `Quiz Finalizado! Pontuação Final: ${finalScore} <i class="fas fa-trophy"></i>`;
    resultElement.style.background = '#fff';
    restartButton.style.display = 'block';

    const userName = document.getElementById('user-name').value.trim();
    const entry = {
        name: userName,
        time: formatTime(elapsedTime),
        correct: correctAnswers,
        score: finalScore
    };
    leaderboard.push(entry);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    quizHistory.attempts++;
    quizHistory.totalScore += correctAnswers; // Apenas os acertos para o histórico geral
    localStorage.setItem('quizHistory', JSON.stringify(quizHistory));

    leaderboardElement.style.display = 'block';
    updateHistory();
    updateLeaderboard();
}

function restartQuiz() {
    welcomeSection.style.display = 'block';
    quizSection.style.display = 'none';
    document.getElementById('user-name').value = '';
}

nextButton.addEventListener('click', nextQuestion);
updateHistory();
updateLeaderboard();