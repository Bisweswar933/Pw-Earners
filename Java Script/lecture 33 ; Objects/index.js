
let product1 =["iphone" , 56542,4.5,75,10]
// console.log(product1[0]);

// let product2 = {
//     'first_name': 5264,
//     price:56542,
//     avgRating:4.5,
//     totalRevies:75,
//     discount:10,
//     productName :"iphone 22 pro max",
//    printProductName :function(){
//     console.log("iphone 18 pro max");
//     console.log(this.productName);
// },
//    printDiscount(){
//     console.log(this.discount);
//    }
// }

// product2.printProductName()
// product2.printDiscount()

// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));


// for(value of product1){
//     console.log(value);
// }
// for(let i = 0; i<product1.length; i++){
//     console.log(product1[i]);
// }

product1.forEach(function(value ,index){
    console.log(value,index);
})

// let Math2 ={
//     abs(){

//     },
//     ceil(){

//     },
//     floor(){

//     }
// }

// Math2.abs()
// console.log(product2); 
// console.log(product2[222]);
// console.log(product2["first_name"]);
// console.log(product2);

// function b(num){
//     console.log(num);
//     // num()
//     console.log("b");
// }

// b(function a(){
//     console.log("a");
// })

// for (value in product2){
//     console.log(product2[value]); 
// }


//destructring


// let product1 =["iphone" , 56542,4.5,75,10]
// 
// const [name ,price , rating, stock, dsicount,g] =["iphone" , 56542,4.5,75,10]
// console.log(g);//undefined ayega
// console.log(name);



// let product2 = {
//     'first_name': 5264,
//     price:56542,
//     avgRating:4.5,
//     totalRevies:75,
//     discount:10,
//     productName :"iphone 25",
//     variants :["pro","base","pro max"],
//     manufacturerDetail:{
//         city:"Balasore",
//         state :"Odisha",
//         country :"India"
//     },
//    printProductName :function(){
//     // console.log("iphone 18 pro max");
//     // console.log(this.productName);
// },
//    printDiscount(){
//     // console.log(this.discount);
//    }
// }

// let{price,printDiscount,printProductName,avgRating} = product2
// console.log(price,avgRating);


// for( [key,value] of Object.entries(product2)){
//     console.log(key,value);
// }



// let product1 = ["iphone", 56542, 4.5, 75, 10]
// const [name, price] = ["iphone", 56542, 4.5, 75, 10]

// let arr = [53, 12, 525, 56, 6, 15, 5, 22]

// console.log(arr);
// console.log(...arr);

// console.log(Math.min(...arr));

// let a =[1,2]
// let b =[3,4]

// let c = [...a,...b]
// // let c = [a,b]
// console.log(...c);
// console.log(c);
// Math.max()

//  let product1 = ["iphone", 56542, 4.5, 75, 10]
// const [name, price, ...hello] = ["iphone", 56542, 4.5, 75, 10]
// console.log(hello);


// function add(num1, ...numbers) {
//     console.log(num1);
//     console.log(numbers);
// }


// console.log(add(2, 5, 52, 12, 3556));

// function add(...numbers){
//     let total = 0;
//     for(value of numbers){
//         total +=value
//     }
//     return total;
// }


// console.log(add(4,523,58,123,525));


// let { manufacturerDetail, ...userkeliyaDetail}=product2

// console.log(manufacturerDetail,userkeliyaDetail);
// console.log(userkeliyaDetail);