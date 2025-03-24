// Эффект набора текста для логотипа
const logo = document.querySelector(".logo");
const text = "FXCHK";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        logo.innerHTML = text.slice(0, i + 1);
        i++;
        setTimeout(typeWriter, 200);
    }
}

window.onload = typeWriter;

// Гамбургер-меню
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Плавное возвращение к логотипу
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(button.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
