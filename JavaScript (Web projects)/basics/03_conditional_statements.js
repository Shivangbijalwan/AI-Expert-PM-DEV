// Conditional Statements and Operators
let a = 17;
let b = 22;

if (a > b){
    console.log("a is greater than b");
}
else if (a < b){
    console.log("a is less than b");
}

else {
    console.log("a is equal to b");
}   


console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Logical Operators
let x = true;
let y = false;  
console.log(x && y); // Logical AND
console.log(x || y); // Logical OR
console.log(!x); // Logical NOT


// Ternary Operator

let n = 10;
let m = 12;
console.log( (n>m) ? n+m : n-m );