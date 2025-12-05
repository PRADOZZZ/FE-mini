// MODO ESCURO
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// BOTÃO VOLTAR AO TOPO
window.addEventListener("scroll", function () {
    const topBtn = document.querySelector(".top-btn");
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}