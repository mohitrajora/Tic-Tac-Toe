console.log("Welcome to Tic Tac Toe");
let turnAudio = new Audio("beep.mp3");

let turn = 'X';
// function to change the turn
let changeTurn = () => {
    return turn === 'X'?'O' : 'X';
}

let gameover = false;

// function to check winner
let checkWinner = () =>{
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
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText)
            && boxtexts[e[0]].innerText !==''){
                document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won!";
                gameover = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
            }
    })
}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () =>{
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWinner();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText = "Turn For " + turn;
            }
        }
    })
})