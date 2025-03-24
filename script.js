const logo = document.querySelector('.logo');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');
const buttons = document.querySelectorAll('.menu-button');
const sections = document.querySelectorAll('.section');

let isLogoClicked = false;

logo.addEventListener('click', () => {
    if (!isLogoClicked) {
        // Первый клик: лого в угол, показываем меню и контент
        logo.classList.add('clicked');
        menu.style.display = 'flex';
        content.style.display = 'block';
        isLogoClicked = true;
    } else {
        // Повторный клик: лого в центр, скрываем меню и контент
        logo.classList.remove('clicked');
        menu.style.display = 'none';
        content.style.display = 'none';
        sections.forEach(section => section.classList.remove('active'));
        isLogoClicked = false;
    }
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.dataset.section;
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    });
});

// Показываем первую секцию по умолчанию (например, "Обо мне")
document.getElementById('about').classList.add('active');
