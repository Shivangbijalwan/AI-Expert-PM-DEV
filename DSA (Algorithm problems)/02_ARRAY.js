// array is a collection of different datatypes and elements It should be inside [] square brackets.
let arr=[];
arr.push(100);
arr.push(200);
arr.push(300);
arr.push(400);
arr.push("shivang");
arr.push(false);

console.log(arr);
console.log(arr[1]);
arr.pop();
console.log(arr);  

arr[6] = 900;
console.log(arr);

// array element taken with different prompt from the user

let arr = new Array();
for (let i=0;i<arr.length;i++){
arr[i] = Number(prompt("Enter a number for a array: "))
};
console.log(arr);

