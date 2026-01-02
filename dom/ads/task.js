const allElements = Array.from(document.querySelectorAll('.rotator__case'))
let index = 0;
let speed = 1000;
setInterval(() => {
    allElements[index].classList.remove('rotator__case_active');
    if (index < allElements.length - 1) {
        allElements[index + 1].classList.add('rotator__case_active')
        allElements[index + 1].style.color = allElements[index + 1].getAttribute('data-color');
        speed = allElements[index + 1].getAttribute('data-speed');
        index += 1;
    }
    else {
        allElements[0].classList.add('rotator__case_active')
        allElements[0].style.color = allElements[0].getAttribute('data-color');
        speed = allElements[0].getAttribute('data-speed');
        index = 0
    }
}, speed);