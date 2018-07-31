function main() {
    var favNumber = parseInt(prompt("Enter your favorite number: "));
    alert("Your favorite number is: " + favNumber);

    if (favNumber < 100) {
        alert("number is below 100");
    }
    else if (favNumber > 100) {
        alert("Your number is more than 100");
    }
    else if (favNumber == 100) {
        alert("Your number is equal to 100");
    }
    else {
        alert("Error")
    }
}
main();