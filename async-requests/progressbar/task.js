const form = document.getElementById('form');
const progress = document.getElementById('progress')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    const formData = new FormData();

    xhr.upload.onprogress = event => {
        progress.value = event.loaded / event.total;
    }

    xhr.send(formData);
})