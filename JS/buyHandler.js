console.log("buyHandler.js loaded");


function handleBuy() {
    let amount = prompt("How much are you willing to pay?");
    if (amount !== null) { // Check if prompt was not cancelled
        amount = parseFloat(amount.replace(/,/g, '')); // Convert to a number and remove any commas
        if (!isNaN(amount)) {
            if (amount > 10000000) {
                alert("You may enter negotiations");
            } else {
                alert("Cheapskate");
            }
        } else {
            alert("Please enter a valid number.");
        }
    }
}



