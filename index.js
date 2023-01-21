"use strict"

const userChoiceResult = document.querySelector('#userChoiceResult');
const computerChoiceResult = document.querySelector('#computerChoiceResult');
const winner = document.querySelector('#winner');
const button = document.createElement('button');
const playAgain = document.querySelector('#playAgain');
const buttons = document.querySelectorAll('button');
const userScoreDisplay = document.querySelector('#userScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const announcementDisplay = document.querySelector('#announcement');

//getComputerSelection function to return randomly either 
//‘Rock’, ‘Paper’ or ‘Scissors’.

const getComputerSelection = () => {
    
    const randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNumber === 0){
        computerChoice = "rock";
        return computerChoice;
    }else if(randomNumber === 1){
        computerChoice = "paper";
        return computerChoice;
    }else{
        computerChoice = "scissors";
        return computerChoice;
    };
};

const playRound = (getComputerSelection, getPlayerSelection) => {

    //rock beats scissors
    //paper covers rock
    //scissors cuts paper
  
    if (getPlayerSelection === "rock"){

        if (getComputerSelection === "scissors"){
            userChoiceResult.innerText = `You: ✊`;
            computerChoiceResult.innerText = `Computer: ✌`;
            winner.innerText = 'You win!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;") 
        }else if (getPlayerSelection === getComputerSelection){
            userChoiceResult.innerText = `You: ✊`;
            computerChoiceResult.innerText = `Computer: ✊`;
            winner.innerText = 'Drawn!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;")
        }else{
            userChoiceResult.innerText = `You: ✊`;
            computerChoiceResult.innerText = `Computer: ✋`;
            winner.innerText = 'You lose!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;")
        }

    }else if(getPlayerSelection === "paper"){
        if (getComputerSelection === "rock"){
            userChoiceResult.innerText = `You: ✋`;
            computerChoiceResult.innerText = `Computer: ✊`;
            winner.innerText = 'You win!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;")
        }else if (getPlayerSelection === getComputerSelection){
            userChoiceResult.innerText = `You: ✋`;
            computerChoiceResult.innerText = `Computer: ✋`;
            winner.innerText = 'Drawn!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;")
        }else{
            userChoiceResult.innerText = `You: ✋`;
            computerChoiceResult.innerText = `Computer: ✌`;
            winner.innerText = 'You lose!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;")
        }

    }else if(getPlayerSelection === "scissors"){
        if (getComputerSelection === "paper"){
            userChoiceResult.innerText = `You: ✌`;
            computerChoiceResult.innerText = `Computer: ✋`;
            winner.innerText = 'You win!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;")
        }else if (getPlayerSelection === getComputerSelection){
            userChoiceResult.innerText = `You: ✌`;
            computerChoiceResult.innerText = `Computer: ✌`;
            winner.innerText = 'Drawn!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;")
        }else{
            userChoiceResult.innerText = `You: ✌`;
            computerChoiceResult.innerText = `Computer: ✊`;
            winner.innerText = 'You lose!';
            winner.setAttribute("style", "font-style: italic; font-weight: bold;")
        }
        
    }else{
       return `${getPlayerSelection} is not valid`;
    }

};

const reset = () => {

    button.innerText = 'Play Again';
    playAgain.appendChild(button);

    button.addEventListener('click', () => {
        userScoreDisplay.innerText = "You:";
        userScoreDisplay.setAttribute("style", "font-weight: bold;");
        computerScoreDisplay.innerText = "Computer:";
        computerScoreDisplay.setAttribute("style", "font-weight: bold;");
        announcementDisplay.innerText = '';
        userChoiceResult.innerText = 'You: ?';
        computerChoiceResult.innerText = 'Computer: ?';
        winner.innerText = '';
        button.remove();
    })
};

const game = () => {

    let userScore = 0;
    let computerScore = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            let btnVal = '';
            const chosenButton = button.innerText;
            if (chosenButton === "✌") btnVal = "scissors";
            else if (chosenButton === "✋") btnVal = "paper";
            else btnVal = "rock";
            playRound(getComputerSelection(), btnVal);

            const userTicks = document.createElement('span');
            userTicks.classList.add("material-icons");
            userScoreDisplay.appendChild(userTicks);

            const computerTicks = document.createElement('span');
            computerTicks.classList.add("material-icons");
            computerScoreDisplay.appendChild(computerTicks);

            if (winner.innerText.includes('win')){
                ++userScore;
                for (let i = 0; i < userScore; i++){
                    userTicks.innerText = "done";
                    computerTicks.innerText = "close";
                };
            }
            else if (winner.innerText.includes('lose')) {
                ++computerScore;
                for (let i = 0; i < computerScore; i++){
                    computerTicks.innerText = "done";
                    userTicks.innerText = "close";
                };
            }else {
                computerTicks.innerText = "-";
                userTicks.innerText = "-";
            }

            if (userScore === 5) {
                userScore = 0;
                computerScore = 0;
                announcementDisplay.innerText = "You won!";
                reset();
            }else if (computerScore === 5) {
                userScore = 0;
                computerScore = 0;
                announcementDisplay.innerText = "Computer won!";
                reset();
            }
        })
    })
};

game()


