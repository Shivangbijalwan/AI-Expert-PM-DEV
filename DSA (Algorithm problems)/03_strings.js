let s = "shivang";
console.log(s[3]);

// string is a group of characters , sequence of charactor, but its not a array of a chractor , its behave like array because work with indexing.. 


//methods of string 

console.log(s.length);

console.log(s.slice(0 , 5));

console.log(s.concat(" ","world"));

console.log(s.trim("     erererercc           "))
console.log(s.concat("hello"))

console.log(s.charAt(2));
console.log(s.charCodeAt(3));
//asciicode


//this is printing the string
let k = "sbikk";
for(let i=0 ; i<s.length ; i++){
    console.log(s[i]);


}


// this is printing in reverse order
let d = "sbikk";
let rev = "";
for(let i=d.length-1 ; i>=0 ; i--){
    rev = rev+d.charAt();
}


// check the pelendrome
let p = "mumum";
let revs = "";
for(let i=p.length-1 ; i>=0 ; i--){
    revs = revs+p.charAt(i);
}
if(revs==p)console.log("this is pelendrome");
    else console.log("its not an pelendrome");

