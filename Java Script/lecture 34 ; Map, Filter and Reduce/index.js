
let student = {
    name: "banty",
    rollno: 25,
    subjects: ["maths ", "science", "english"],
    totalmarks: 500,
}

// let {subjects,name,rollno}=student
// console.log(subjects);

// let{...b}=student
// console.log(b);

// let{ ...variable, subjects} = student //error ayega kyunki rest operator last me hona chahiye
// let{subjects, ...variable} = student
// console.log(variable);

//HOW to rename key in destructuring 

// let{subjects : chiku , totalmarks = 100 ,...variable} = student
// console.log(totalmarks); 


// let object1 = {
//     name: "banty",
//     phone: 9625416
// }


// let object2 = {
//     adress: "india",
//     adharcard: 455464613232,
//     name: "chiku"
// }

// let object3 = {...object1, ...object2}

// console.log(object3);

//array and object update

// const arr = [1, 2, 3, 4]

// arr[1] = "9"
// console.log(arr);

// let obj = {

//     name: "banty",
//     rollno: 25
// }

// obj={
//     add:"ssdf"
// }

// const obj = {

//     name: "banty",
//     rollno: 25,
//     adress: null
// }

// obj["name"] = "chiku"
// obj.name = "kanha"

// delete obj.rollno//property deleted

// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5, 6]

// arr1.splice(2,1)
// arr1.splice(2,3)
// arr1.splice(1,3)//delete
// arr1.splice(3,0,25)//add
// arr1.splice(3,0,"hello")
// arr1.splice(3,1,["hello"])//replace

// console.log(arr1);

//  let trimArr = arr1.slice(0,3 ) //slice method is used to trim the array and it does not change the original array  
//    let trimArr = arr1.slice(1,3 ) 
//  console.log(trimArr);


// console.log(arr1.indexOf(5)); //indexOf method is used to find the index of an element in an array and it returns -1 if the element is not found 

// console.log(arr1.indexOf(55254));

// let res = arr1.find((value) => {
//     return value === 3
// })

// console.log(res);


// let arr3 = [1,2,3,4,5,6,[7,8,9,[10,11,12]]]    


// console.log(arr3.flat(Infinity));
// console.log(arr3.flat(0));

let arr4 =[4,5,9,56,897]

let arrCopy = arr4;
let arrCopy2 = [...arr4];
arrCopy2.pop()

console.log("arr4",arr4);
console.log("arrCopy2",arrCopy2);