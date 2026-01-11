
const xhr = new XMLHttpRequest();
const itemLoader = document.getElementById('loader');
const allItems = document.getElementById('items');

xhr.addEventListener('readystatechange', () => {

    if (xhr.readyState === xhr.DONE) {
        const responses = JSON.parse(xhr.responseText);

        const responseCourses = Object.values(responses.response.Valute);;
        responseCourses.forEach(element => {

            const newCourse = `
            <div class="item">
                <div class="item__code">
                    ${element.CharCode}
                </div>
                <div class="item__value">
                    ${element.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>    
            </div>`;


            allItems.insertAdjacentHTML('beforeEnd', newCourse);


        });
        itemLoader.classList.remove('loader_active')
    }

})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
