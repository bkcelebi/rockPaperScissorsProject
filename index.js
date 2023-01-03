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


//getPlayerSelection parameter case-insensitive
const getPlayerSelection = () => {
    
    const userChoice = prompt("Rock? Paper? Scissors?");
    return userChoice.toLowerCase();
};

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the getPlayerSelection and 
//computerSelection - and then return a string that declares 
//the winner of the round like so: "You Lose! Paper beats Rock"

const playRound = (getComputerSelection, getPlayerSelection) => {

    //rock beats scissors
    //paper covers rock
    //scissors cuts paper
  
    if (getPlayerSelection === "rock"){

        if (getComputerSelection === "scissors"){
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nYou win!"
                );
            
        }else if (getPlayerSelection === getComputerSelection){
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nNo one win"
                );
        }else{
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nYou lose!"
                );
        }

    }else if(getPlayerSelection === "paper"){
        if (getComputerSelection === "rock"){
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nYou win!"
                );
        }else if (getPlayerSelection === getComputerSelection){
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nNo one win"
                );
        }else{
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nYou lose!"
                );
        }

    }else if(getPlayerSelection === "scissors"){
        if (getComputerSelection === "paper"){
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nYou win!"
                );
        }else if (getPlayerSelection === getComputerSelection){
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nNo one win"
                );
        }else{
            return ( 
                "Computer: " + getComputerSelection +
                "\nPlayer: " + getPlayerSelection + "\nYou lose!"
                );
        }
        
    }else{
       return `${getPlayerSelection} is not valid`;
    }

};


//Write a NEW function called game(). 
//Call the playRound function inside of this one to play a 5 round game 
//that keeps score and reports a winner or loser at the end.

const game = () => {

    for (let i = 0; i < 5; i++){

        const compt = getComputerSelection();
        const usr = getPlayerSelection();  

        console.log(playRound(compt, usr));

    }
};

game()
