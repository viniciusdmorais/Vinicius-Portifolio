const homeLink = document.getElementById('nav-home');
const aboutLink = document.getElementById('nav-sobre');
const experienceLink = document.getElementById('nav-experiencias');
const skillsLink = document.getElementById('nav-conhecimentos');

const aboutSection = document.getElementById('sobre');
const experienceSection = document.getElementById('experiencias');
const skillsSection = document.getElementById('conhecimentos');

const linkInsta = document.getElementById('img-instagram')
const linkLinkedin = document.getElementById('img-linkedin')

homeLink.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

aboutLink.addEventListener('click', () => {
    /*aboutSection.scrollIntoView({*/
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

experienceLink.addEventListener('click', () => {
    experienceSection.scrollIntoView({
        behavior: 'smooth'
    });
});

skillsLink.addEventListener('click', () => {
    skillsSection.scrollIntoView({
        behavior: 'smooth'
    });
});

linkInsta.addEventListener("click", function () {
    window.open("https://www.instagram.com/_vinymorais_/", "_blank");
});

linkLinkedin.addEventListener("click", function () {
    window.open("https://www.linkedin.com/in/viniciusdemoraismendes", "_blank");
});
