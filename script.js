let boxs = document.querySelectorAll(".box");
let Resetbtn =document.querySelector(".Reset-button");
let result =document.querySelector(".result")
let newgame =document.querySelector(".new-game")

let turn0 = true;
let winPatterns = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6]
]

const resetbtn=()=>{
    Enableboxes();
    newgame.style.display="none";
    result.innerHTML="";
}


const disabledboxes=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
const Enableboxes=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerHTML="";   // Intersting kura
    }
}



boxs.forEach((box)=>{
box.addEventListener("click",()=>{
        console.log("you clicked the box")
        if(turn0){ // player 1 turn
            box.innerHTML="O"
            turn0=false;
        }
        else{     // player 2 turn
            box.innerHTML="X"
            turn0=true;
        }
        box.disabled = true;
        checkwinner();
})
})
const checkwinner=() =>{
for(let pattern of winPatterns){
    console.log(pattern[0],pattern[1],pattern[2])

    let position1 = boxs[pattern[0]].innerHTML;
    let position2 = boxs[pattern[1]].innerHTML;
    let position3 = boxs[pattern[2]].innerHTML;
    if(position1 !="" && position2 !="" && position3 !=""){
        if(position1===position2 && position2===position3){



            if(position1==='O'){
                result.innerHTML="player1 is Winner";
                disabledboxes();
                
            }
            
            else{
            result.innerHTML="player2 is winner";
            disabledboxes();
            }

           newgame.style.display="inline";
     
        }
    }
}
}

Resetbtn.addEventListener("click",resetbtn)
newgame.addEventListener('click',resetbtn)
