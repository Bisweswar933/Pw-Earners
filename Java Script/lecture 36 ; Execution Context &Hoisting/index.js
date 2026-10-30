
// console.log(a);
// var a = 5;


// console.log(b);
// let b = 5;

// var a = 5;
// let b = 10;
// console.log(a + b);

function outer() {
  let num1 = 10;
  let num2 = 20;
  

  function inner(){
    let num1 = 50;
    let num2 = 60;
    return num1 +num2;
  }
  const result = inner() +num1 +num2;

  return result;
}

const result = outer()
console.log(result);


// function recurse(){
//   recurse()
// }
// recurse()