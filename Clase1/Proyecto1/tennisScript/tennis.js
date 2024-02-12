const winner = function() {
    console.log("Executing...");
    const playerAInput = document.getElementById("playerA");
    const playerBInput = document.getElementById("playerB");

    // Get the values entered by the user
    const playerA = parseInt(playerAInput.value);
    const playerB = parseInt(playerBInput.value);

    // Check if both inputs are empty
    if (!playerAInput.value || !playerBInput.value) {
        document.getElementById("winner").innerHTML = "Please fill in both fields.";
        return; // Exit the function early
    }

    let result = "";

    if ((playerA > 7 || playerA < 0) || (playerB > 7 || playerB < 0)) {
        result = "Invalid";
    } else if ((playerA == playerB) && (playerA != 7 && playerB != 7)) {
        result = "This is not over.";
    } else if ((playerA >= 6 || playerB >= 6) && (playerA - playerB) >= 2) {
        if (playerA > playerB) {
            result = "The winner is player 1";
        } else {
            result = "The winner is player 2";
        }
    } else if ((playerA == 5 && playerB == 5) || (playerA == 6 && playerB == 6) ||)  {
        result = "This is not over.";
    } else {
        result = "Invalid";
    }

    document.getElementById("winner").innerHTML = " Result: " + result;
};
