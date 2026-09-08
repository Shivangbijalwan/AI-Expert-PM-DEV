// synchronous - one bye one doing a group of work till the 1st 
//                  work is not completed it dose not start another .

// asynchronous - starting a group of work in one time but response giving to user 
//                  is depend on completion  of the particular work . 


// this is ASYNC / AWAIT and fetching API's
console.log("this is async");

async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(445);
    }, 5000);
  });
}
async function main() {
  console.log("loading modules");

  console.log("fetching the data");

  let data = await getData();

  console.log(data);

  console.log("processing data");
  console.log("re-fetching the data");
}

main()

//fetching the data

// fetch(url, options)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));




// data.then((v)=> {
//        console.log("processing data");
//           console.log(data);
//             console.log("re-fetching the data");
// })
