
const text = document.getElementById('editor')
text.value = localStorage.getItem('text');


text.addEventListener('input', () => {
    if (text.value.trim() !== '') {
        localStorage.setItem('text', text.value);
    } else {
        localStorage.removeItem('text');
    }
})