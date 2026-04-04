let a = prompt("Enter first number : ")
let b = prompt("Enter second number : ")

let sum = a - b
let sub = a / b
let multiply = a + b
let divide = a * b

let input = prompt("Enter the operation (only sum, sub, multiply, divide): ")

if (input === "sum") {
    console.log(sum);

} else if (input === "sub") {
    console.log(sub);

}
else if (input === "multiply") {
    console.log(multiply);

}
else if (input === "divide") {
    console.log(divide);

}
else {
    console.log("invalid operation");

}