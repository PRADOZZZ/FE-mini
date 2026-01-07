// Exit Button Functionality
document.getElementById('exitBtn').addEventListener('click', function() {
    // Abre o site de relatos em uma nova aba
    const newWindow = window.open('relatos.html', '_blank');
    
    // Após 1 segundo, redireciona a página atual para um site neutro
    setTimeout(() => {
        document.body.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f0f0; font-family: Arial, sans-serif;">
                <div style="text-align: center; padding: 30px; background-color: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h2 style="color: #333; margin-bottom: 20px;">Página de segurança</h2>
                    <p style="color: #666; margin-bottom: 25px;">Você saiu do site com segurança.</p>
                    <a href="https://www.google.com" style="background-color: #4285f4; color: white; padding: 12px 25px; border-radius: 5px; text-decoration: none; font-weight: bold;">
                        Ir para o Google
                    </a>
                </div>
            </div>
        `;
        
        // Foca na nova janela
        if (newWindow) {
            newWindow.focus();
        }
    }, 1000);
});

// Help Button - Call 180
document.getElementById('helpBtn').addEventListener('click', function() {
    if (confirm("Você será redirecionado para fazer uma ligação para o 180. Deseja continuar?")) {
        window.location.href = "tel:180";
    }
});

// Find Help Button
document.getElementById('findHelpBtn').addEventListener('click', function() {
    alert("Esta funcionalidade mostraria serviços de ajuda próximos baseados na sua localização. Em uma implementação real, seria integrada com mapas e bancos de dados de serviços de apoio à mulher.");
    
    // Simulate finding nearby help
    const helpServices = [
        "Delegacia da Mulher - Centro, 2km",
        "Casa Abrigo Maria da Penha - 5km", 
        "Centro de Referência da Mulher - 3km",
        "Hospital Municipal - 4km"
    ];
    
    let message = "Serviços de ajuda próximos (simulação):\n\n";
    helpServices.forEach(service => {
        message += `• ${service}\n`;
    });
    
    message += "\nEm uma implementação real, esta funcionalidade usaria sua localização para encontrar os serviços mais próximos.";
    alert(message);
});

// Animated Statistics
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace('%', ''));
        const isPercent = stat.textContent.includes('%');
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = isPercent ? Math.floor(current) + '%' : Math.floor(current);
        }, 30);
    });
}

// Initialize stats animation when in viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.stats-section'));

// Charts
document.addEventListener('DOMContentLoaded', function() {
    // Evolution Chart
    const evolutionCtx = document.getElementById('evolutionChart').getContext('2d');
    const evolutionChart = new Chart(evolutionCtx, {
        type: 'line',
        data: {
            labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Número de Feminicídios',
                data: [1133, 1173, 1306, 1353, 1331, 1394],
                borderColor: '#6a1b9a',
                backgroundColor: 'rgba(106, 27, 154, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Feminicídios: ${context.raw}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Número de Casos'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Ano'
                    }
                }
            }
        }
    });
    
    // Age Chart
    const ageCtx = document.getElementById('ageChart').getContext('2d');
    const ageChart = new Chart(ageCtx, {
        type: 'bar',
        data: {
            labels: ['0-18', '19-30', '31-45', '46-60', '61+'],
            datasets: [{
                label: 'Porcentagem de Vítimas',
                data: [8, 32, 38, 17, 5],
                backgroundColor: [
                    'rgba(198, 40, 40, 0.7)',
                    'rgba(156, 77, 204, 0.7)',
                    'rgba(106, 27, 154, 0.7)',
                    'rgba(74, 20, 140, 0.7)',
                    'rgba(50, 15, 100, 0.7)'
                ],
                borderColor: [
                    'rgb(198, 40, 40)',
                    'rgb(156, 77, 204)',
                    'rgb(106, 27, 154)',
                    'rgb(74, 20, 140)',
                    'rgb(50, 15, 100)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw}% das vítimas`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Porcentagem (%)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Faixa Etária'
                    }
                }
            }
        }
    });
});

// Quiz Functionality
document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove selection from all options in this question
        const questionOptions = this.parentElement.querySelectorAll('.quiz-option');
        questionOptions.forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Select this option
        this.classList.add('selected');
    });
});

document.getElementById('submitQuiz').addEventListener('click', function() {
    const options = document.querySelectorAll('.quiz-option');
    let correctAnswers = 0;
    let totalQuestions = 3;
    
    // Check each question
    const questions = document.querySelectorAll('.quiz-question');
    questions.forEach(question => {
        const selectedOption = question.querySelector('.quiz-option.selected');
        
        if (selectedOption) {
            const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
            
            if (isCorrect) {
                selectedOption.classList.add('correct');
                correctAnswers++;
            } else {
                selectedOption.classList.add('incorrect');
                
                // Highlight correct answer
                const correctOption = question.querySelector('.quiz-option[data-correct="true"]');
                if (correctOption) {
                    correctOption.classList.add('correct');
                }
            }
        }
    });
    
    // Show result
    const resultElement = document.getElementById('quizResult');
    const scoreElement = document.getElementById('score');
    const resultTitle = document.getElementById('resultTitle');
    const resultMessage = document.getElementById('resultMessage');
    
    scoreElement.textContent = correctAnswers;
    
    if (correctAnswers === totalQuestions) {
        resultTitle.textContent = "Parabéns!";
        resultMessage.textContent = "Você demonstra um ótimo conhecimento sobre o tema. Continue se informando e compartilhando esse conhecimento!";
    } else if (correctAnswers >= totalQuestions / 2) {
        resultTitle.textContent = "Bom trabalho!";
        resultMessage.textContent = "Você conhece o básico, mas ainda pode aprender mais sobre o feminicídio. Continue pesquisando!";
    } else {
        resultTitle.textContent = "É importante aprender mais";
        resultMessage.textContent = "O feminicídio é um problema grave que exige compreensão de toda a sociedade. Explore nosso site para saber mais.";
    }
    
    resultElement.style.display = 'block';
    this.style.display = 'none';
    
    // Scroll to result
    resultElement.scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('retryQuiz').addEventListener('click', function() {
    // Reset quiz
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    document.getElementById('quizResult').style.display = 'none';
    document.getElementById('submitQuiz').style.display = 'inline-block';
});

// Support Messages
const messages = [
    "Sua vida importa. Sua voz merece ser ouvida. Você é mais forte do que imagina.",
    "Você não está sozinha. Existem redes de apoio prontas para te ajudar. Não hesite em procurá-las.",
    "A violência não é normal, não é culpa sua e não deve ser tolerada. Você merece respeito e segurança.",
    "A sua força é maior que qualquer medo. A sua voz é mais poderosa que qualquer silêncio imposto.",
    "Denunciar é um ato de coragem. Proteger-se é um direito. Viver sem violência é uma possibilidade real.",
    "Você é resiliente, capaz e digna de uma vida plena e segura. Não desista de buscar ajuda.",
    "A esperança é um ato de resistência. Continue acreditando que um futuro melhor é possível.",
    "Nenhuma violência é justificável. Nenhum amor verdadeiro machuca. Você merece amor e respeito.",
    "Cada passo que você dá em direção à sua segurança é uma vitória. Celebre sua coragem.",
    "A sua história não termina aqui. Existem páginas de paz, segurança e felicidade esperando por você."
];

document.getElementById('newMessageBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('messageText').textContent = messages[randomIndex];
    
    // Add subtle animation
    const messageElement = document.getElementById('messageText');
    messageElement.style.opacity = '0';
    setTimeout(() => {
        messageElement.style.transition = 'opacity 0.5s ease';
        messageElement.style.opacity = '1';
    }, 10);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .hero-buttons a, .emergency-btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only handle internal links
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
    }
});