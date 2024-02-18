function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    //creat an alphabet array
    const alphabetString = 'qwertyuiopasdfghjklzxcvbnm';
    const alphabets = alphabetString.split('');
    //console.log(alphabets);

    //get a random alphabet
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    //console.log(index, alphabet);
    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}