
// console.log("Task 1");

// console.log("Task 2");

// console.log("Task 3");

// console.log("Task 1");

// console.log("Task 2");

// for(let i = 0 ; i < 10000000000 ; i++){

// }

// let startTime = Date.now() // ms

// while(Date.now() - startTime < 10000){

// }


// console.log("Task 3");

// console.log(globalThis);
// console.log(document);





// console.log("task 1");

// setTimeout(()=>{
//     console.log("task 2");
// }, 4000)

// let startTime = Date.now() // ms

// while(Date.now() - startTime < 3000){

// }

// setTimeout(()=>{
//     console.log("task 5");
// }, 1000)

// setTimeout(()=>{
//     console.log("task 4");
// }, 2000)

// console.log("task 3");



// let count = 0

// let id = setInterval(function () {
//     count++;
//     if (count >= 5) {
//         clearInterval(id)
//     }
//     console.log("hi");

// }, 2000)



const body = document.querySelector("body")


let colorStr = "0123456789abcdef"



setInterval(() => {
    let color = ""
    for (let i = 0; i < 6; i++) {
        let randomValue = Math.floor(Math.random() * colorStr.length)
        color = color + colorStr[randomValue]

    }
    body.style.backgroundColor = `#${color}`

},0)




//pratice

// const timer = setTimeout(() =>{
//     console.log("MESSAGE SENT");
// }, 3000)

// clearTimeout(timer);

// console.log("cancelled");


// setInterval( ()=>{
//     console.log("hi");
// },6000) 

// let count = 1;

// const id = setInterval(() => {
//     console.log(count);
//     count++;

//     if (count>3){
//         clearInterval(id);
//     }

// }, 1000)


//Q-1

// console.log("Timer Started");

// setTimeout(()=>{
//     console.log("Hello Banty");
// },3000)

// console.log("Program End");

//Q-2

// let count = 1;

// const id = setInterval(() => {
//     console.log("count :", count);
//     count++;

//     if (count === 3) {
//         clearInterval(id);
//          console.log("Counting Finished!")
//     }

// }, 1000)


//Q-3

// console.log("Download Started");

// const id = setTimeout(()=>{
//     console.log("Download Complete");
// },5000)

// setTimeout(()=>{
//     clearTimeout(id);
//     console.log("Download Cancelled");
// },2000)



//Q-4

// let count = 5;
// const id = setInterval(()=>{
//     console.log(count);
//     count--;

//     if(count===0){
//         clearInterval(id);
//         console.log("Time's up");
//     }
// },1000)


//Q-5
// let count = 1;

// const id = setInterval(() => {
//     console.log("count :", count);
//     count++;

//     if (count === 3) {
//         setTimeout(() => {
//             console.log("Stopping timer....");
//             clearInterval(id);
//         })
//     }
// }, 1000)