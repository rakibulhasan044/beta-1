// function play() {
//     //hide hom show playground
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     //console.log(homeSection.classList);

//     //show playground section

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     //console.log(playgroundSection.classList)

// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player pressed:', playerPressed);

    //stop game if pressed esc

    if(playerPressed === 'Escape') {
        gameOver();
    }

    //get the expected to pressed

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //checked match or not

    if(playerPressed === expectedAlphabet) {
        console.log('got a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        //---------------------------
        //update score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        //start a neew round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0) {
            gameOver();
        }
        
        //get the current life numbere
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //reduce the life count
        // const newLife = currentLife - 1;

        // //update display
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    //step-1 generate a random alphabet

    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is: ', alphabet)
    
    //set randomly generated alphabet to the screen

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color 
    setBackgroundColorById(alphabet)
}

function play () {
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    //reset score
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}