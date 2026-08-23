
/*
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


//mastering questions of array
// move all zero to left side and one to right
let arr =[1,1,0,1,0,1,1,0,0];
let i=0 , j=0;
 while(i<arr.length){
   if(arr[i]==0){
    let temp=arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++
   }
   i++
 }
 console.log(arr);


 //ADVANCE ARRAY QUESTIONS

   //left rotation by 1 element
   
arr=[1,2,3,4,5]
for (let i=0; i<arr.length-1 ;i++){
let temp = arr[i];
arr[i] = arr[i+1];
arr[i+1] = temp;
};
 
console.log(arr)
*/


//right rotation by 1 element

let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    arr[i] = arr[i - 1];
    arr[i - 1] = temp;
}

console.log(arr);