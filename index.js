// Get references to HTML elements
const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');
const generateButton = document.getElementById('generateButton');
const output = document.getElementById('output');

// Define an array of random words
const verbsList = {
    gaan: 'ging',
    geven: 'gaf',
    halen: 'haalde',
    hebben: 'had',
    beginnen: 'begon',
    begrijpen: 'begreep',
    bestellen: 'bestelde',
    lopen: 'liep',
    maken: 'maakte',
    ontvangen: 'ontving'
};

// Function to generate a random word (select a random key)
function generateRandomWord() {
    const keysArray = Object.keys(verbsList);
    const randomIndex = Math.floor(Math.random() * keysArray.length);
    return keysArray[randomIndex];
}

// Add an event listener to the "Generate Random Word" button
generateButton.addEventListener('click', () => {
    const randomWord = generateRandomWord();
    output.textContent = `Infinitive: ${randomWord}`;
});

// Add an event listener to the "Submit" button
submitButton.addEventListener('click', () => {
    const inputText = textInput.value;
    const randomWord = output.textContent.split(': ')[1]; // Extract the random word from the output text
    
    if (randomWord === undefined) {
        output.textContent = "You must generate a random verb first"
    } else if (inputText === verbsList[randomWord]) {
        output.textContent = 'Correct! Try another...';
    } else {
        output.textContent = 'FAIL! Answer is ' + verbsList[randomWord] + '.';
    }

    textInput.value = '';
});