const nameMenu = document.querySelector('.dropdown__value');
const listMenu = document.querySelector('.dropdown__list');
const choiceLink = Array.from(document.querySelectorAll('.dropdown__item'));

function menuClick() {
    listMenu.classList.add('dropdown__list_active');
}

function listClick() {
    listMenu.classList.remove('dropdown__list_active');
}

nameMenu.addEventListener('click', menuClick);

choiceLink.forEach((el, index) => {
    el.onclick = () => {
        listClick()
        nameMenu.textContent = choiceLink[index].textContent;
        return false;
    };
})