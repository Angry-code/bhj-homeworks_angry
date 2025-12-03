document.addEventListener('DOMContentLoaded', function () {
    let points = 0;
    let pass = 0;
    const deadHole = document.getElementById('dead');
    const lostHole = document.getElementById('lost');
    const holes = document.querySelectorAll('.hole');

    function getHole(index) {
        return document.getElementById('hole${index}');
    }

    function killMole(e) {
        if (e.target.classList.contains('hole_has-mole')) {
            deadHole.textContent = ++points;
        } else {
            lostHole.textContent = ++pass;
        }

        if (points === 10) {
            endGame('Victory!');
        } else if (pass === 5) {
            endGame('Game Over!');
        }
    }

    function endGame(text) {
        alert(text);
        points = 0;
        pass = 0;
        deadHole.textContent = points;
        lostHole.textContent = pass;
    }

    holes.forEach((hole, index) => {
        hole.addEventListener('click', killMole);
    });
});