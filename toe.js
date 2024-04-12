let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")


let turn0= true  //playerX,playerY

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame=()=>
{
    turn0=true;
    enableboxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if (turn0===true)
        {
            //player O
            box.innerHTML="O";
            turn0=false;
        }
        else
        {
            //player X
            box.innerHTML="X";
            turn0=true;
        }
     box.disabled=true;
     checkwinner();
    })
})
const disableboxes=()=>
{
    for(let box in boxes)
    {
        box.disabled=true;
    }
}


const enableboxes=()=>
{
    for(let box in boxes)
    {
        box.disabled=false;
        box.innerHTML="";
    }
}

const showwinner=(winner)=>
{
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  

}
const checkwinner=()=>{
    for(let pattern of winpatterns)
    {
            let pos1val=boxes[pattern[0]].innerHTML;
            let pos2val=boxes[pattern[1]].innerHTML;
            let pos3val=boxes[pattern[2]].innerHTML;

            if (pos1val!="" && pos2val!="" && pos3val!=""){
                if (pos1val===pos2val && pos2val===pos3val)
                {
                    console.log("winner",pos1val)

                    
                    showwinner(pos1val);
                }
            }
    }
};


newgamebtn.addEventListener("click",resetgame)
resetbtn.addEventListener("click",resetgame)

