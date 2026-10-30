
//callback function

// const { startTransition } = require("react");

// let nam = " banty"
// let b = " banty"

// function hello(naa){
//     console.log(naa);
// }

// hello(b)
// hello(nam)




// function fun1(callbac){
//     console.log("hii");
//     callbac()
// }

// function cb(){
//     console.log("This is callback function");
// }
// fun1(cb)


// let arr = ["a", "b", "c", "c", "d"]


// function a() {

//     function b() {

//     }
//     return b

// }


// function searchPizza(cb1) {
//     console.log("Pizza searching.,..");
//     setTimeout(function fun1() {
//         console.log("Here is the pizza menu's");
//         let price = 500;
//         cb1(price)
//     }, 2000)

// }

// function addToCart(cb2) {
//     console.log("Pizza adding to Cart");
//     setTimeout(function fun2() {
//         console.log("Pizza added to cart ");
//         cb2()
//     }, 3000)
// }

// function payment(price, cb3) {
//     console.log(`Payment Initiated , Amount : ${price}`);
//     setTimeout(function fun3() {
//         console.log(`Payment completed, Amount : ${price}`);
//         cb3()
//     }, 5000)
// }

// searchPizza(function a(price) {
//     // console.log(p);
//     addToCart(function b() {
//         payment(price, function c() {
//             console.log("Bass aa hi geya Pizza..");
//         })
//     })
// })




//pratice

function getMarks(callback) {
    setTimeout(() => {
        const marks = 80;
        console.log("Marks recieved");
        callback(marks)
    }, 1000)

}

function calcuteResult(marks, callback) {
    setTimeout(() => {
        const result = marks >= 35 ? "pass" : "fail";
        callback(result)
    }, 1000)
}

function displayresult(result) {
    console.log("final result:", result);

}

getMarks((marks) => {
    calcuteResult(marks, (result) => {
        displayresult(result);
    })
})