const longest = function(){

    // Get the info
    const firstWordInput = document.getElementById("firstWord");
    const secondWordInput = document.getElementById("secondWord");

    // Get value
    const firstWord = firstWordInput.value;
    const secondWord = secondWordInput.value;

    // Check if both inputs are empty
    if (!firstWordInput.value || !secondWordInput.value) {
        document.getElementById("winnerWord").innerHTML = "Please fill in both fields.";
        return; // Exit the function early
    }

    let longestWord = "";
let lenFirst = firstWord.length;
let lenSecond = secondWord.length;

if (lenFirst == lenSecond) {
    longestWord = "The words are the same size.";
} else if (lenFirst > lenSecond) {
    longestWord = "The longest word is " + firstWord + " with a length of " + lenFirst + ". Difference: " + (lenFirst - lenSecond);
} else {
    longestWord = "The longest word is " + secondWord + " with a length of " + lenSecond + ". Difference: " + (lenSecond - lenFirst);
}

document.getElementById("winnerWord").innerHTML = longestWord;
}