// loops in Array 

let arr = [1,22,1,14,5,36,7];

let new_arr = arr.map((e) => {
   return e ** 2;
});

console.log(new_arr);


const greater_than_7 = () => {
   return arr.filter((e) => e > 7);
};
console.log(greater_than_7());



let arr2 = [1,2,3,4,5,6];

const redu = (a, b) => {
    return(a + b);
}

   console.log(arr2.reduce(redu));


let arr3 = Array.from("hello");
console.log(arr3);

