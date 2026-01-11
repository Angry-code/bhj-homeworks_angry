const xhr = new XMLHttpRequest();
const title = document.getElementById('poll__title');
const allAnswers = document.getElementById('poll__answers');

xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === xhr.DONE) {
        const responses = JSON.parse(xhr.response);

        const question = responses['data']['title'];
        const answers = responses['data']['answers'];

        title.insertAdjacentHTML("beforeEnd", question);



        answers.forEach(el => {
            const answer = `
            <button class="poll__answer">
            ${el}
            </button>`;


            allAnswers.insertAdjacentHTML('beforeEnd', answer);
        })
        allAnswers.addEventListener('click', () => {
            alert('«Спасибо, ваш голос засчитан!»');

        })
       

    };


})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
