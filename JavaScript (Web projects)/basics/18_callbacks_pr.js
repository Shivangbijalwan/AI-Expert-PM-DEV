// this is ASYNC in JS
console.log("I am learning JS")
console.log("WE are learning WEBDEV ")

 setTimeout(() =>{
    console.log("I am set timeout")
 }, 2000 );

 console.log("ending") // due to the Async nature of js this line will print and the timeout will run when time will end ...... in this case the timeout fun will run after 2 sec and will shown at the last 
 

 // callbacks in js

 const callbacks =(arg)=>{
    console.log(arg);
 }

 const loadScript = (src , callbacks ) => {
    let sc = document.createElement("Script");
    sc.src = src;
    sc.onload = callbacks("START");
    document.head.append(sc)
    
 }

 // promises 

 let prom1 = new Promise((resolve , reject)=>{
    let a  = Math.random();
    if (a<0.5){
      reject("no random number was not supported here")
    }
    else{
       setTimeout(() => {
       console.log("yes I am using promises")
       resolve("DONE");
   }, 3000);
 }
})


 prom1.then((a)=>{
   console.log(a);
 }).catch((err)=> {
   console.log(err);
 })


  