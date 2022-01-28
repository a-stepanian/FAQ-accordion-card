for (let i = 0; i < 5; i++) {
    const question = document.querySelectorAll('.question')[i];
    const arrow = document.querySelectorAll('.arrow')[i];
    const answer = document.querySelectorAll('.answer')[i];
    
    question.addEventListener('click', () => {
        question.classList.toggle('clicked');
        arrow.classList.toggle('flip');
        answer.classList.toggle('expand');
    })  
}