// Get the sequence
const sequenceInput = document.getElementById('sequence');
const sequence = sequenceInput.value;

// print the sequence
console.log(sequence);

//get the subsequence
const subsequenceInput = document.getElementById('subsequence');
const subsequence = subsequenceInput.value;

// print the subsequence
console.log(subsequence);

// function of search
const search = (sequence, subsequence) => {
    const position = sequence.search(/subsequence/);
}