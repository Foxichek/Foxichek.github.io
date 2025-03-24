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

// Плавная прокрутка
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", (e) => {
        if (button.getAttribute("href")) {
            e.preventDefault();
            document.querySelector(button.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Авторизация
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.querySelector(".close");
const submitLogin = document.getElementById("submitLogin");
const commentForm = document.getElementById("commentForm");
const adminWorks = document.getElementById("adminWorks");

let currentUser = null;

const users = {
    "FXCHK": "US42982557"
};

loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});

submitLogin.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        currentUser = username;
        loginModal.style.display = "none";
        loginBtn.style.display = "none";
        logoutBtn.style.display = "inline-block";
        commentForm.style.display = "block";
        if (username === "FXCHK") {
            adminWorks.style.display = "block";
        }
    } else {
        alert("Неверный ник или пароль");
    }
});

logoutBtn.addEventListener("click", () => {
    currentUser = null;
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    commentForm.style.display = "none";
    adminWorks.style.display = "none";
});

// Комментарии
const submitComment = document.getElementById("submitComment");
const commentsDiv = document.getElementById("comments");

submitComment.addEventListener("click", () => {
    const commentText = document.getElementById("commentText").value;
    if (commentText && currentUser) {
        const comment = document.createElement("div");
        comment.className = "comment";
        comment.innerHTML = `<strong>${currentUser}:</strong> ${commentText}`;
        if (currentUser === "FXCHK") {
            const deleteBtn = document.createElement("span");
            deleteBtn.className = "delete-comment";
            deleteBtn.innerHTML = "✖";
            deleteBtn.onclick = () => comment.remove();
            comment.appendChild(deleteBtn);
        }
        commentsDiv.appendChild(comment);
        document.getElementById("commentText").value = "";
    }
});

// Добавление работ
const addWork = document.getElementById("addWork");
const worksGrid = document.getElementById("worksGrid");

addWork.addEventListener("click", () => {
    if (currentUser !== "FXCHK") return;
    const link = document.getElementById("telegraphLink").value;
    if (link.includes("telegra.ph")) {
        const workCard = document.createElement("div");
        workCard.className = "work-card";
        workCard.innerHTML = `
            <h3>Новая работа</h3>
            <a href="${link}" target="_blank">Глава 1</a>
            <p>Содержимое будет разбито по главам позже.</p>
        `;
        worksGrid.appendChild(workCard);
        document.getElementById("telegraphLink").value = "";
    } else {
        alert("Введите корректную ссылку на Telegraph");
    }
});
