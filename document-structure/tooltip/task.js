const allTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

for (let i = 0; i < allTooltip.length; i++) {
    allTooltip[i].insertAdjacentHTML("afterEnd", "<div class='tooltip' style='left: 0; top: 0'></div>");
}
const divTooltips = document.querySelectorAll('.tooltip');
function toggleClass() {
    for (let i = 0; i < divTooltips.length; i++) {
        divTooltips[i].classList.remove('tooltip_active');
        divTooltips[i].classList.add('tooltip');
    }
}
allTooltip.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const nextItem = item.nextElementSibling;

        if (item.title) {
            nextItem.textContent = item.title;
        }
        if (nextItem.classList.contains('tooltip_active')) {
            toggleClass();
        } else {
            toggleClass();
            nextItem.classList.add('tooltip_active');
            item.title = nextItem.textContent;
        }
        let { x, bottom } = item.getBoundingClientRect();

        nextItem.style.left = `${x}px`;
        nextItem.style.top = `${bottom + 10}px`
    })



})

