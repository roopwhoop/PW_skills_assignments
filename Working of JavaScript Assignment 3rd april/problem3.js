// 03. Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.

function addNumbers(num1, num2){
    console.log(sum); //undefined
    var sum;
    sum= num1+num2;
    return sum;
}
console.log(addNumbers(7,8)); // 15