let num = Math.round(Math.random()*100)+1;

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    //btw 1 to 100 or not
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${num}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //equal to random no. low or high

    if(guess === num){
        displayMessage(`You guessed it right!`);
        endGame();
    }else if(guess < num){
        displayMessage(`Number is lowwww`)
    }else if(guess > num){
        displayMessage(`Number is highhhh`)
    }
}

function displayGuess(guess){
    
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame" >Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}


function newGame(){
    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click', function(e){
        num = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = ''
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)

        playGame = true;
    })
}
