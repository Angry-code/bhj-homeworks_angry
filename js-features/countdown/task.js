
const timer = document.getElementById("timer");
function countDown() {
    timer.textContent--;
    if (timer.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(id);
    };
};

const id = setInterval(countDown, 100);