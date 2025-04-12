const choices = document.querySelectorAll('.choice');
const option = ['rock','paper','Scissors'];
let msg = document.querySelector('#msg');
let userScore = document.querySelector('#user-score')
let compScore = document.querySelector('#comp-score')
let userCount = 0;
let compCount = 0;
const winner = (userChoice,compChoice)=>{
    if(userChoice===compChoice){
        msg.innerText = `Draw both chooses ${userChoice}`;
        msg.style.backgroundColor = 'black';
    }else{
        let win = true;
        if(userChoice==='rock'){
            win = compChoice =='paper' ? false:true;
        }else if(userChoice=='paper'){
            win = compChoice=='rock' ? true:false;
        }else if(userChoice =='Scissors'){
            win = compChoice == 'rock' ? false:true;
        }
        if(win){
            msg.innerText=`You Win , your ${userChoice} Beats ${compChoice}`;
            msg.style.backgroundColor = 'rgba(56, 251, 2, 0.949)';
            userCount = userCount + 1;
            userScore.innerText = userCount;
            
        }else{
            msg.innerText=`You Lose , ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = 'rgba(234, 8, 8, 0.949)';
            compCount = compCount + 1;
            compScore.innerText = compCount;
        }
    }
}

const game = (userChoice)=>{
    var idx = Math.floor(Math.random()*3);
    compChoice = option[idx];
    winner(userChoice,compChoice);
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        game(userChoice);
    })
})