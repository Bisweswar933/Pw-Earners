
// let originalPrice = [463, 654, 2346]

// let discountPrice = []

// for (value of originalPrice) {
//     // let discount = value * 10 / 100
//     // discountPrice.push(value - discount)// 10% discount

//     discountPrice.push(value * 0.9)// 10% discount
// }

// originalPrice.forEach((value)=>{
//     discountPrice.push(value *0.9)//10% discount
// })

// console.log(originalPrice);
// console.log(discountPrice);

// const discountPrice2 = originalPrice.map((value) =>value * 0.9 )


// console.log(discountPrice2);


let student =[
    {
        name :"banty",
        marks: 23
    },
    {
        name : "chiku",
        marks :69
    },{
        name: "kahnha",
        marks :89
    },{
        name: "srabani",
        marks: 89
    },
    {
        name: "prasant",
        marks: 30
    },
]

// let studentNames = []
// student.forEach((value)=>{
//     studentNames.push(value.name)
// })


// const studentNames = student.map((student)=>student.name)
// const studentMarks = student.map((student)=>student.marks)

// console.log(studentNames)
// console.log(studentMarks)

// let bossteMarks = student.map((student)=>{
//     return{...student, marks :student.marks +10}
// })


// let bossteMarks = student.map((student)=>({...student, marks :student.marks +10}))


// console.log(bossteMarks)


// let failedStudent =[]
// student.forEach((student)=>{
//     if(student.marks < 33){
//         failedStudent.push(student)
//     }
// })


// const failedStudent = student.filter((student)=>student.marks < 33).map((student)=> student.name)

// console.log(failedStudent)



// let marks =[56,23,86,56]

// let totalMarks = 0

// marks.forEach((mark)=>totalMarks += mark)


//   const totalMarks = marks.reduce((totalMarks, marks)=>{
//     return totalMarks + marks
//   } , 0) 


//   const totalMarks = marks.reduce((totalMarks, marks)=>totalMarks + marks, 0)

// console.log(totalMarks);




const attendance =["present", "absent", "present", "absent"]

// let obj ={}

// attendance.forEach((value)=>{
//     if(obj[value]){
//         obj[value ]= obj[value] + 1
//     } else{
//         obj[value]= 1
//     }
// })
// console.log(obj);


// by reduce

const obj = attendance.reduce((acc, value)=>{
    acc[value] = (acc[value] || 0) + 1;
    return acc;
},{});

console.log(obj);