// onpage load each question is taken as question var to display the answer for user clicks.
document.addEventListener('DOMContentLoaded', function () {
    const question = document.querySelectorAll('.question');

    question.forEach((question, i) => {
        question.addEventListener('click', () => {

            // Taking answer & Icon from the closest question section (i.e) from own div.
            const answer = question.closest('.question-section').querySelector('.answer');

            const Icon = question.closest('.question-section').querySelector('.icon');

            let display = answer.style.display;

            if (display == 'none' || display == ``) {
                Icon.src = '/FAQ-Accordion/assets/images/icon-minus.svg';
                answer.style.display = `block`;
            } else {
                Icon.src = `/FAQ-Accordion/assets/images/icon-plus.svg`;
                answer.style.display = `none`;
            }
        })
    })
})
