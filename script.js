let firstNumber = parseFloat(prompt("Ange första talet"));

let secondNumber = parseFloat(prompt("Ange andra talet"));

let operator = prompt("Välj mellan addition (+), subtraktion (-), multiplikation (*) eller division (/)");

if (operator === "+") {
    let result = firstNumber + secondNumber;
    alert("Svaret är " + result);
} else if (operator === "-") {
    let result = firstNumber - secondNumber;
    alert("Svaret är " + result);
} else if (operator === "*") {
    let result = firstNumber * secondNumber;
    alert("Svaret är " + result);
} else if (operator === "/") {
    if (secondNumber !== 0) {
        let result = firstNumber / secondNumber;
        alert("Svaret är " + result);
    } else {
        alert("Aj, det går inte att dela med noll");
    }
} else {
    alert("Det går bara att använda +, -, *, eller /.");
}
