const question1 = document.querySelectorAll('.question')[0];
const arrow1 = document.querySelectorAll('.arrow')[0];
const answer1 = document.querySelectorAll('.answer')[0];

question1.addEventListener('click', () => {
    question1.classList.toggle('clicked');
    arrow1.classList.toggle('flip');
    answer1.classList.toggle('expand');
})