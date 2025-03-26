const num1 = 10;
const num2 = 5;
const op = "add";

// the words after the declaration words are variables
// the declaration tells us what will happen to the
// variable (const vs let vs var)

switch(op) {  
    case 'add':
        console.log(num1 + num2);  // Output: 15
        break;
    case 'sub':
        console.log(num1 - num2);  // Output: 5
        break;
    case 'mult':
        console.log(num1 * num2);  // Output: 50
        break;
    case 'div':
        console.log(num1 / num2); 
        break;
    default:
        console.log("Invalid operator");  
        // incase we added square to pickle
}

// if (op == "add") {
//     let sum = num1 + num2;
//     console.log(sum);
// } else if (op =="sub") {
//     let sum = num1 - num2;
//     console.log(sum);
// } else if (op == "")

// else {
//     let sub = num1 - num2;
//     console.log(sub);
// }

// if is comparing to see if the value of the variable is
// equal to the value of the string