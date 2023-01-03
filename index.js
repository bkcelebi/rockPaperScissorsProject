"use strict"

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


//playerSelection parameter case-insensitive
const playerSelection = () => {
    
    const userChoice = prompt("Rock? Paper? Scissors?");
    return userChoice.toLowerCase();
};

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and 
//computerSelection - and then return a string that declares 
//the winner of the round like so: "You Lose! Paper beats Rock"

const playRound = (getComputerSelection, playerSelection) => {

    //rock beats scissors
    //paper covers rock
    //scissors cuts paper
  
    if (playerSelection === "rock"){
        if (getComputerSelection === "scissors"){
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nYou win!`;
        }else if (playerSelection === getComputerSelection){
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nNo one win`;
        }else{
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nYou lose!`;
        }

    }else if(playerSelection === "paper"){
        if (getComputerSelection === "rock"){
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nYou win!`;
        }else if (playerSelection === getComputerSelection){
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nNo one win`;
        }else{
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nYou lose!`;
        }

    }else if(playerSelection === "scissors"){
        if (getComputerSelection === "paper"){
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nYou win!`;
        }else if (playerSelection === getComputerSelection){
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nNo one win`;
        }else{
            return `Computer: ${getComputerSelection}\nPlayer: ${playerSelection}\nYou lose!`;
        }
        
    }else{
       return `${playerSelection} is not valid`;
    }

};


//Write a NEW function called game(). 
//Call the playRound function inside of this one to play a 5 round game 
//that keeps score and reports a winner or loser at the end.

const game = () => {

    for (let i = 0; i < 5; i++){

        const compt = getComputerSelection();
        const usr = playerSelection();  

        console.log(playRound(compt, usr));

    }
};

game()
