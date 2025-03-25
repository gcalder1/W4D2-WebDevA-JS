const num1 = 10;
const num2 = 5;
const op = "add";
// the words after the declaration words are variables
// the declaration tells us what will happen to the
// variable (const vs let vs var)

if (op == "add") {
    let sum = num1 + num2;
    console.log(sum);
} else {
    let sub = num1 - num2;
    console.log(sub)
}

// if is comparing to see if the value of the variable is
// equal to the value of the string