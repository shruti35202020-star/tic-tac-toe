let  boxes = document.querySelectorAll(".box");
let  rstbtn = document.querySelector("#reset-btn");
let  newbtn = document.querySelector("#new-btn");
let  newsmsg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turnO = true;// tells the player
let count = 0;//  counts nymber of move

// win pattern

const win =[
     [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        
        if( turnO == true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO =true;
        }
        box.disabled=true;
       let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }

    });
});
const checkWinner = () => {
  for (let pattern of win) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

    newbtn.addEventListener("click",resetGame);     

  rstbtn.addEventListener("click",resetGame);



