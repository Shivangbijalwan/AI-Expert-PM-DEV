//set intervals


// setInterval(() => {
//   document.querySelector(".childcontainer").style.backgroundColor = "red";
// }, 2000);

//disco light using set interval




// setInterval(() => {
//   document.querySelector(".childcontainer").style.backgroundColor = getRandomColor() ;
// }, 600);


// set time out  
// this will run only one time 

function getRandomColor() {
  let val1 = Math.ceil(Math.random() * 256); // multiplying 256 gives you range for 0 to 255
  let val2 = Math.ceil(Math.random() * 256);
  let val3 = Math.ceil(Math.random() * 256);
  return `rgb(${val1}, ${val2}, ${val3})`;
}
setTimeout(() => {
    
  document.querySelector(".childcontainer").style.backgroundColor = getRandomColor() ;
}, 1000);