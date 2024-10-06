let clickonbox = document.getElementById("boxes");
let dash = document.getElementById("dashboard");
let turn = 'x';
let index = [];

function end(num1, num2, num3) {
    dash.innerHTML = `${index[num1]} is the winner`;
    document.getElementById("box" + num1).style.backgroundColor = "black";
    document.getElementById("box" + num2).style.backgroundColor = "black";
    document.getElementById("box" + num3).style.backgroundColor = "black";
    setInterval(() => {
        dash.innerHTML += `.`;
    }, 1000);

    setTimeout(() => {
        window.location.reload();
    }, 5000);
}

function checkDraw() {
    if (!index.includes("")) {
        dash.innerHTML = "It's a draw!";
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    }
}

function game(id) {
    let ele = document.getElementById(id);
    if (turn === 'x' && ele.innerHTML == "") {
        ele.innerHTML = 'x';
        turn = 'o';
        dash.innerHTML = `${turn} will play`;
    } else if (turn === 'o' && ele.innerHTML == "") {
        ele.innerHTML = 'o';
        turn = 'x';
        dash.innerHTML = `${turn} will play`;
    }
    winner();
}

function winner() {
    for (let i = 1; i < 10; i++) {
        index[i] = document.getElementById("box" + i).innerHTML;
    }

    const winningCombinations = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (index[a] && index[a] === index[b] && index[a] === index[c]) {
            end(a, b, c);
            return; // Stop checking once we found a winner
        }
    }

    checkDraw(); // Check for a draw after checking for a winner
}