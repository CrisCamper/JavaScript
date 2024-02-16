// function of search
const search = () => {
    // Get the sequence
    const sequenceInput = document.getElementById('sequence');
    const sequence = sequenceInput.value;

    // Get the subsequence
    const subsequenceInput = document.getElementById('subsequence');
    const subsequence = subsequenceInput.value;

    // Search for the subsequence in the sequence
    const index = sequence.indexOf(subsequence);
    if (index !== -1) {
        // Highlight the found subsequence
        const highlightedSequence = sequence.substring(0, index) +
                                    '<span class="highlight">' + sequence.substring(index, index + subsequence.length) + '</span>' +
                                    sequence.substring(index + subsequence.length);
        document.getElementById('result').innerHTML = highlightedSequence;
    } else {
        alert(`Subsequence not found`);
    }
};