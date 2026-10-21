let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")

let msgContainer = document.querySelector(".msgCont");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newGame");

let turn0 = true;

let winptrn = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turn0 === true) {
            box.innerHTML = "O";
            turn0 = false;
        } else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });

});

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enaleBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const checkwinner = () => {
    for (let pattern of winptrn) {

        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;


        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                msg.innerText = `${pos1value} Wins!`;
                msgContainer.classList.remove("hide");
                disableBox();
            }
        }

    }

    if ([...boxes].every(box => box.innerText !== "")) {
        msg.innerText = "It's a Tie!";
        msgContainer.classList.remove("hide");
        disablebox();
    }
}

const resetGame = () => {
    turn0 = true;
    enaleBox();
    msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);