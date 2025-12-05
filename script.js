/* ===========================================
   PAINEL SOS
=========================================== */
const sosBtn = document.getElementById("sos-btn");
const sosPanel = document.getElementById("sos-panel");
const closeSos = document.getElementById("close-sos");

sosBtn.addEventListener("click", () => {
    sosPanel.style.display = "flex";
});

closeSos.addEventListener("click", () => {
    sosPanel.style.display = "none";
});


/* ===========================================
   CONTADORES ANIMADOS
=========================================== */
function animarContador(id, final, duracao) {
    const elemento = document.getElementById(id);
    let inicio = 0;
    const passo = final / (duracao / 20);

    const intervalo = setInterval(() => {
        inicio += passo;
        if (inicio >= final) {
            inicio = final;
            clearInterval(intervalo);
        }
        elemento.textContent = Math.floor(inicio);
    }, 20);
}

window.onload = () => {
    animarContador("num1", 7, 2000);
    animarContador("num2", 65, 2000);
    animarContador("num3", 80, 2000);
};


/* ===========================================
   FADE IN AO ROLAR
=========================================== */
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    fades.forEach(el => {
        const topo = el.getBoundingClientRect().top;
        if (topo < window.innerHeight - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0px)";
        }
    });
});


/* ===========================================
   BOTÃO VOLTAR AO TOPO
=========================================== */
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


/* ===========================================
   MENSAGENS MOTIVACIONAIS
=========================================== */
const motivarBtn = document.getElementById("motivarBtn");
const fraseApoio = document.getElementById("fraseApoio");

const frases = [
    "Você é mais forte do que imagina.",
    "Sua vida importa. Você não está sozinha.",
    "Existe saída. Existe esperança.",
    "Você merece segurança, amor e respeito.",
    "Pedir ajuda é um ato de coragem."
];

motivarBtn.addEventListener("click", () => {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    fraseApoio.textContent = aleatoria;
});


/* ===========================================
   QUIZ INTERATIVO
=========================================== */
const quizBtn = document.getElementById("startQuiz");
const quizBox = document.getElementById("quizBox");
const quizQuestion = document.getElementById("quizQuestion");
const quizAnswers = document.getElementById("quizAnswers");

let indice = 0;

const perguntas = [
    {
        q: "O que é feminicídio?",
        alternativas: [
            "Crime contra mulheres por serem mulheres.",
            "Crime aleatório.",
            "Roubo seguido de morte."
        ],
        correta: 0
    },
    {
        q: "Qual número ligar em caso de violência?",
        alternativas: ["150", "180", "100"],
        correta: 1
    },
    {
        q: "Qual tipo representa a maioria dos casos?",
        alternativas: ["Violência doméstica", "Assalto", "Acidente"],
        correta: 0
    }
];

quizBtn.addEventListener("click", () => {
    quizBtn.style.display = "none";
    quizBox.classList.remove("hidden");
    mostrarPergunta();
});

function mostrarPergunta() {
    const atual = perguntas[indice];
    quizQuestion.textContent = atual.q;
    quizAnswers.innerHTML = "";

    atual.alternativas.forEach((alt, i) => {
        const btn = document.createElement("button");
        btn.textContent = alt;
        btn.classList.add("quiz-option");

        btn.onclick = () => {
            if (i === atual.correta) {
                alert("✔ Resposta correta!");
            } else {
                alert("✘ Resposta incorreta.");
            }

            indice++;
            if (indice < perguntas.length) {
                mostrarPergunta();
            } else {
                quizBox.innerHTML = "<h3>Quiz finalizado! Obrigado por participar 💗</h3>";
            }
        };

        quizAnswers.appendChild(btn);
    });
}


/* ===========================================
   GRÁFICOS CHART.JS
=========================================== */
new Chart(document.getElementById("grafico1"), {
    type: "line",
    data: {
        labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
        datasets: [{
            label: "Casos no ano",
            data: [1200, 1390, 1530, 1600, 1700, 1880],
            borderColor: "#a30052",
            fill: false,
            tension: 0.4
        }]
    }
});

new Chart(document.getElementById("grafico2"), {
    type: "bar",
    data: {
        labels: ["Menores de 18", "18-30", "31-50", "Acima de 50"],
        datasets: [{
            label: "Vítimas",
            data: [200, 900, 1100, 300],
            backgroundColor: ["#ff5a9c", "#ff80b3", "#d94f88", "#b30052"]
        }]
    }
});