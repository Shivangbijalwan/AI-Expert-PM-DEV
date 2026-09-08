// string in JS

let a = "DOREMON";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

console.log(a.length);

let Name = "HATHODI";
let Friend = "sinzo";
console.log("his name is " + Name + " and his friend name is " + Friend);
console.log(`his name is ${Name} and his friend name is ${Friend}`);

console.log(Name.toLocaleLowerCase());
console.log(Friend.toUpperCase());
console.log(Name.slice(0, 4));


console.log(Name.replace("HATHODI" , "NINZA HATHODI"));

console.log(Friend.concat(Name  , "SISIMANUU"))


let newString = "        hello world         ";
console.log(newString.length);
console.log(newString.trim().length);