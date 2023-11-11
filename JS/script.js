console.log("Welcome to Tic Tac Toe")

let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let turn = "X"
let isgameover = false;

// Function to change the turn 

const changeTurn = ()=>{
    return turn ==="X"? "0":"X";
}

// Function to check for a win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext")
    wins = [
        [0, 1,2,3,10,0],
        [3,4,5,3,32,0],
        [6,7,8,3,54,0],
        [0,3,6,-19,32,90],
        [1,4,7,3,32,90],
        [2,5,8,24,32,90],
        [0,4,8,3,32,45],
        [2,4,6,3,32,-45]
    ]


    wins.forEach(e=>{
        if( (boxtext[e[0]].innerText ===  boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "" ))
        {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            // document.querySelector(".imgbox").style.display = "block"; 
            document.querySelector(".imgbox").style.scale = "1"; 
            document.querySelector(".line").style.transform = `translate(${e[3]}vh,${e[4]}vh) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "90%"
            gameover.play();
        }
    })
}

// Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})


// Add Onclick listener to reset button

// reset = document.querySelector("#reset")
reset.addEventListener("click", ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    })
    turn = "X";
    isgameover = false ;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector(".imgbox").style.scale = "0";
    document.querySelector(".line").style.width = "0"
})