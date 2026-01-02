const allTab = Array.from(document.querySelectorAll('.tab'));
let choiceTab = document.querySelector('.tab_active');
const allContents = Array.from(document.querySelectorAll('.tab__content'));
let choiceContent = document.querySelector('.tab__content_active');
 
allTab.forEach((element, index) => {
    element.onclick = () => {

        choiceTab.classList.remove('tab_active');
        choiceTab = element;
        choiceTab.classList.add('tab_active');

        choiceContent.classList.remove('tab__content_active');
        choiceContent = allContents[index];
        choiceContent.classList.add('tab__content_active');
    };
});