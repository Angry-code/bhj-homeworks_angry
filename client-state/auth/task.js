const formAuth = document.getElementById('signin');
const userTrue = document.getElementById('welcome');
const 

formAuth.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');

    const formData = new FormData();



    xhr.onload = () => {
        const responses = xhr.response;
        ;
        if (responses.succes) {
            formAuth.classList.remove('signin_active');
            userTrue.classList.add('welcome_active');
            userTrue.innerHTML = `Добро пожаловать, пользователь #<span id="user_id">${id}</span>`;
            localStorage.user = responses.user_id;
        } else {
            alert("Неверный логин/пароль")
        };
    };
    xhr.send(formData);
    formAuth.reset();
})






