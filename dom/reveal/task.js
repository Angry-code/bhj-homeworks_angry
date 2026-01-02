const allElements = Array.from(document.querySelectorAll('.reveal'))


document.addEventListener('scroll', function () {
    allElements.forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect()
        if (bottom < window.innerHeight && top > 0) {
            el.classList.add('reveal_active')
        }
        else {
            el.classList.remove('reveal_active')
        };
    })
})