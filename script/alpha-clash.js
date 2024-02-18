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

function continueGame() {
    //step-1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet is: ', alphabet)
    
    //set randomly generated alphabet to the screen

    const currentElement = document.getElementById('current-alphabet');
    currentElement.innerText = alphabet;

    //set background color 
    setBackgroundColorById(alphabet)
}

function play () {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}