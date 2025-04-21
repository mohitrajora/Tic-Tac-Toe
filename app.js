console.log("Welcome to Tic Tac Toe");
let turnAudio = new Audio("beep.mp3");

let turn = 'X';
// function to change the turn
let changeTurn = () => {
    return turn === 'X' ? 'O' : 'X';
}

let gameover = false;

// function to check winner
let checkWinner = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) &&
            boxtexts[e[0]].innerText !== '') {

            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";

            // Highlight the winning boxes
            e.forEach(index => {
                boxtexts[index].parentElement.classList.add('winner-box');
            });
        }
    });
}

// function to check draw
let checkDraw = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let isDraw = true;

    Array.from(boxtexts).forEach(element => {
        if (element.innerText === '') {
            isDraw = false;
        }
    });

    if (isDraw && !gameover) {
        document.querySelector('.info').innerText = "It's a Draw!";
        gameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[1].style.width = "150px";
    }
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameover) {
            boxtext.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWinner();
            checkDraw();
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
            }
        }
    });
});

// Reset button logic
let reset = document.getElementsByClassName('reset')[0];
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = '';
    });

    Array.from(document.getElementsByClassName('box')).forEach(element => {
        element.classList.remove('winner-box');
    });

    turn = 'X';
    gameover = false;
    isDraw = false;
    document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.imgbox').getElementsByTagName('img')[1].style.width = "0px";
});
