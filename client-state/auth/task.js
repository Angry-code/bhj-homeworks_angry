const formAuth = document.getElementById('signin__form');
const userTrue = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const formSign = document.getElementById('signin')

if (localStorage.getItem('user_id')) {
    userTrue.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('user_id');

}

formAuth.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json'
    const formData = new FormData(formAuth);


    xhr.onload = () => {
        const responses = xhr.response;
        if (responses.success) {
            userId.textContent = responses.user_id;
            formSign.classList.remove('signin_active');
            userTrue.classList.add('welcome_active');
            localStorage.setItem('user_id', responses.user_id);

        } else {
            alert("Неверный логин/пароль")
        };
    };

    xhr.send(formData);
    formAuth.reset();

})









