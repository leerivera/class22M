// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = " coconut water "
favDrink.trim()

console.log(favDrink)
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let string = "rock paper sissors apple"
console.log( string.search('apple') )


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function paperRock(){
    let random = Math.random()

    if(random < .33){
        return 'rock'
    } else if( random < .66){
        return 'paper'
    } else{
        return 'scissors'
    }
}
// *Conditionals*
//Create a function that takes in a choice (r++k, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(pChoice){
  


    let botChoice = paperRock()
    if ( (pChoice === 'rock' && botChoice === 'scissors') || (pChoice === "paper" && botChoice ==='rock') || (pChoice ==='scissors' && botChoice === 'paper')){
                   console.log("win!")
    } else if ( pChoice === botChoice ){
                   console.log('lose')
    }
}
checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
