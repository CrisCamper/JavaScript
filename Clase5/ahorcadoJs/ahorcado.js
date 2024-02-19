// !GET THE WORD

var wordToGuess;

while (!wordToGuess || wordToGuess.length === 0) {
    wordToGuess = prompt("Input the word to guess");
    wordToGuess = wordToGuess.toUpperCase(); // Assign the result back to the variable
}

var myWord = [];

for (let i = 0; i < wordToGuess.length; i++) {
    myWord.push("_");
}

// !FUNCTION TO GUESS THE WORD

function guessWord() {
    const maxTry = 6;
    let count = 0;

    while (count < maxTry) {
        let attemptInput = document.getElementById("letter");
        let attempt = attemptInput.value.toUpperCase();

        let message = ""; // Initialize message variable

        if (wordToGuess.includes(attempt)) {
            let indices = [];
            let currentIndex = wordToGuess.indexOf(attempt);
        
            while (currentIndex !== -1) {
                indices.push(currentIndex);
                currentIndex = wordToGuess.indexOf(attempt, currentIndex + 1);
            }

            indices.forEach(index => {
                myWord[index] = attempt;
            });

            document.getElementById("indexWords").innerHTML = myWord.join(" ");

            // Check if word is completely guessed
            if (!myWord.includes("_")) {
                // Word completely guessed, provide feedback and exit loop
                message = alert("Congratulations! You guessed the word.");
                break;
            }
        } else {
            count++;
        }
        
        // Update message feedback
        document.getElementById("message").textContent = message;

        // Check if maximum attempts reached
        if (count === maxTry) {
            document.getElementById("message").textContent = "You have reached the maximum number of attempts.";
            break;
        }
    }
}


document.getElementById("indexWords").innerHTML = myWord.join(" ");