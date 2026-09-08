// this will bubble up the code and if we clicked on child all the parents will also clicked

// this is known as event bubbling

// document.querySelector(".child").addEventListener("click", () =>{
//     alert ("child was clicked")
// })

// document.querySelector(".childcontainer ").addEventListener("click", () =>{
//     alert ("child container was clicked")
// })


// document.querySelector(".container ").addEventListener("click", () =>{
//     alert ("container was clicked")
// })


// to get rid of this we can use (( "PROPOGATION" ))


document.querySelector(".child").addEventListener("click", (e) =>{
    e.stopPropagation() //now it will not propogate to its parent
    alert ("child was clicked")
})

document.querySelector(".childcontainer ").addEventListener("click", (e) =>{
     e.stopPropagation() //now it will not propogate to its parent
    alert ("child container was clicked")
})


document.querySelector(".container ").addEventListener("click", (e) =>{
    alert ("container was clicked")
})


