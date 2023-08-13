const button1 = document.querySelector('#p1button')
const button2 = document.querySelector('#p2button')
const reset = document.querySelector('#reseti')
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const select = document.querySelector("#playto")

let p1Score = 0;
let p2Score=0;
let winningScore=3;
let isgameOver=false;

button1.addEventListener('click',function(){
    if(!isgameOver){
        p1Score++;
        if(p1Score===winningScore){
            isgameOver=true;
            player1.classList.add('winner')
            player2.classList.add('loser')
            button1.style.backgroundColor="green"
            button2.style.backgroundColor="red"
        }
    }
    player1.innerText=p1Score;
    
})

button2.addEventListener('click',function(){
    if(!isgameOver){
        p2Score++;
        if(p2Score===winningScore){
            isgameOver=true;
            player2.classList.add('winner')
            player1.classList.add('loser')
            button1.style.backgroundColor="red"
            button2.style.backgroundColor="green"
        }
       
    }
    player2.innerText=p2Score;
})

select.addEventListener('change',function(){
    winningScore = parseInt(this.value)
})

reset.addEventListener('click',resetf)

function resetf(){
    isgameOver=false;
    p1Score=0;
    p2Score=0;
    player1.innerText=0;
    player2.innerText=0;
    player1.classList.remove('winner','loser')
    player2.classList.remove('winner','loser')
}