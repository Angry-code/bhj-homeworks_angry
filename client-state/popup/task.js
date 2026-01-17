const modalContent = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if (!(document.cookie === 'modalContent=close')) {
    modalContent.classList.add('modal_active');

}

modalClose.addEventListener('click', () => {
    modalContent.classList.remove('modal_active');
    document.cookie = 'modalContent' + '=' + encodeURIComponent('close');
})

