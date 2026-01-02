const activeFont = document.querySelector('.font-size_active');
const allFonts = Array.from(document.querySelectorAll('.font-size'));
const allText = document.getElementById('book');

allFonts.forEach((el) => {
    el.addEventListener('click', (item) => {
        item.preventDefault();

        allFonts.forEach((e) => {
            e.classList.remove('font-size_active');
        });
        el.classList.add('font-size_active');
        allText.classList.remove('book_fs-small');
        allText.classList.remove('book_fs-big');
        if (el.getAttribute('data-size') === 'small') {
            allText.classList.add('book_fs-small');

        }
        if (el.getAttribute('data-size') === 'big') {
            allText.classList.add('book_fs-big');
            allText.classList.remove('book_fs-small');
        }
    })
})

