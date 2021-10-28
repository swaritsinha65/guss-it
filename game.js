// Declaring variables
const $sumitButton = document.getElementById("submit");
const $message =document.getElementById("message");
const $lives =document.getElementById("lives");
var message;
var lives = 10;

var guessNumber = Math.round(Math.random() * 100);

// Game function

$sumitButton.onclick=()=>{
    console.log(guessNumber);

    let userInput = document.getElementById("number-input").value;

    lives--;

    if(userInput == guessNumber){
        location.herf="./win.html";
    }
    else if(lives == 0){
        location.href="./lose.html";
    }
    else if(userInput > guessNumber){
        message = `Oops 😶! Your guess is too high. You have  ${lives} lives remaining.`
    }
    
    else if(userInput < guessNumber){
        message = `Oops 😶! Your guess is too low. You have  ${lives} lives remaining.`
    }

$message.style.display = "inherit";
$message.innerHTML = message;
$lives.innerHTML = lives;
}