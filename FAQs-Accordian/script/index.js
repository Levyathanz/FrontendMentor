document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach((question, i) => {
        question.addEventListener('click', () => {

            // Use querySelector directly
            const accordianItem = question.closest('.question-section');
            const answer = accordianItem.querySelector('.answer');
            const Icon = accordianItem.querySelector('.icon');

            // Toggle the 'open' class
            accordianItem.classList.toggle('open');

            // Toggle the icon and answer visibility based on the presence of 'open' class
            if (accordianItem.classList.contains('open')) {
                Icon.src = './assets/images/icon-minus.svg';
            } else {
                Icon.src = './assets/images/icon-plus.svg';
            }
        })
    })
});
