// pratice

//Q1

// let name = "banty";
// let city = "balsore";
// let age = 22;
// console.log(age);
// console.log(city);
// console.log(name);

//Q2

// let price = 500;
// let quantity = 4;
// let total = price*quantity;
// console.log(total);

//Q3

// let name = "banty";
// let age = 22;
// let math = 90;
// let science = 85;
// let english = 95;
// let totalMarks = math+science+english;
// console.log(name);
// console.log(age);
// console.log(totalMarks);

//Q4

// let name = "banty";
// let age = 22;
// let isStudent = true;
// let result = null;
// let address;
// console.log(name);
// console.log(age);
// console.log(isStudent);
// console.log(result);
// console.log(address);

//Q5

// let name = "banty";
// let age = 22;
// let salary = 1500.50
// let isStudent = true;
// let city;
// let result = null;

// console.log("name:" , typeof name);
// console.log("age:" , typeof age);
// console.log("salary:" , typeof salary);
// console.log("isStudent:" , typeof isStudent);
// console.log("result:" , typeof result);
// console.log("city:" , typeof city);

//Q6

// let a = 20;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

//Q7

// let a = 17;
// let b = 5;
// console.log(a%b);
// console.log(a**b);

//Q8

// let price = 800;
// let quantity = 3;
// let discount = 200;
// let deliveryCharge = 50;
// let finalBill = (price*quantity)-discount+deliveryCharge;
// console.log(finalBill);

//Q9

// let score = 10;
// score += 10;
// console.log(score);

//Q10

// let balance = 1000;
// balance += 500;
// balance -= 200;
// console.log(balance);

//Q11

// let number = 20;
// number *= 3;
// number /= 10;
// number += 5;
// console.log(number);

//Q12

// let age =22;
// console.log(age > 18);

//Q13 

// let password = 1234;
// console.log(password===1234);

//Q14

// let age = 23;
// let minimumAge = 18;
// console.log(age >= minimumAge && age < 30 );

//Q15 

// let age = 22;
// let hasId = true;
// console.log(age>=18 && hasId === true);

//Q16

// let marks = 75;
// let attendance = 80;
// console.log(marks >= 40 || attendance >= 75);

//Q17

// let age =22;
// let hasId = true;
// let isBanned = false;
// console.log(age >= 18 && hasId === true &&! isBanned );

//Q18

// let count = 10;
// count++;
// console.log(count);

//Q19

// let x =10;
// console.log(x++);
// console.log(x);

//Q20

// let number = 10;
// console.log(++number);
// console.log(--number);
// console.log(number);

//Q21

// let age = 20;
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("you can not vote");
// }

//Q22

// let marks = 75;
// if(marks>=40){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }

//Q23

// let age = 22;
// let hasId = true;
// if(age>=18 && hasId === true){
//     console.log("Entry allowed");
// }else{
//     console.log("Not allowed");
// }

//Q24

// let number = 10;
// if(number>10){
//     console.log("Greater");
// }else{
// console.log("Not Greater");
// }

//Q25

// let age = 17;
// if(age>=18){
//     console.log("Adult");
// }else{
//     console.log("minor");
// }

//Q26

// let marks = 65;
// console.log("marks:", marks);
// if(marks>=50){
//     console.log("Result: Pass");
// }else{
//     console.log("fail");
// }

//Q27

// let marks = 75;
// if (marks>=80){
//     console.log("Grade A");
// }else if(marks>=60) {
//     console.log("Grade B");
// }else{
//     console.log("Grade C");
// }

//Q28

// let temperature = 35;
// if(temperature>=40){
//     console.log("Very Hot");
// }else if (temperature>=30){
//     console.log("Hot");
// }else if(temperature>=20){
//     console.log("Normal");
// }else{
//     console.log("Cold");
// }

//Q29

// let marks = 82;
// if(marks >= 90){
//     console.log("Grade A - Excellent");
// }else if (marks >= 75){
//     console.log("Grade B - Very Good");
// }else if (marks >= 50){
//     console.log("Grade C - Good");
// }else if(marks >= 40){
//     console.log("Grade D - Pass");
// }else {
//     console.log("Fail");
// }

//Q30

// let age = 20;
// let hasId = true;
// if(age >= 18){
//     if(hasId ===true){
//         console.log("Entry Allowed");
//     }else{
//         console.log("ID Required");
//     }

// }else{
//     console.log("Not eligible");
// }

//Q31

// let username = "banty";
// let password = 1234;
// if (username==="banty"){
//     if(password===1234){
//         console.log("Login Successful");
//     }else{
//         console.log("Wrong Password");
//     }

// }else{
//     console.log("Wrong Username");
// }

//Q32

// let age = 22;
// let hasTicket = true;
// let hasId = true;
// if (age >= 18){
//     if(hasTicket === true){
//         if(hasId===true){
//             console.log("Entry Allowed")
//         }else{
//             console.log("ID Required");
//         }
//     }else{
//         console.log("Ticket Required");
//     }

// }else{
//     console.log("Not Eligible");
// }

//Q33

// let day = 3;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     default:
//         console.log("Invalid day")
// }

//Q34

// let operator = "+";
// let a =20;
// let b = 5;
// switch (operator){
//     case "-":
//         console.log(a-b);
//         break;
//     case "*":
//         console.log(a*b);
//         break;
//     case "+":
//         console.log(a+b);
//         break;
//     case "/":
//         console.log(a/b);
//         break;
//     default:
//         console.log("Invalid Operator");
// }

//Q35

// let month = 2;
// switch(month){
//     case 12:
//     case 1:
//     case 2:
//         console.log("Winter");
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log("Summer");
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log("Monsoon");
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log("Autum");
//         break;
//     default:
//         console.log("Ivalid month");
// }

//Q36

// let units = 150;
// if(units>=0&&units<=50){
//     let bill = units*3;
//     console.log(bill);
// }else if(units>=51&&units<=100){
//     let remaining = units-50;
//     let bill= (50*3)+(remaining*5);
//     console.log(bill)
// }else{
//     let remaining = units-100;
//     let bill = (50*3)+(50*5)+(remaining*8);
//     console.log(bill);
// }

//Q38

// let amount = 6000;
// if(amount>=0&&amount<=1000){
//     console.log("No discount");
// }else if(amount>=1001&&amount<=5000){
//     let bill = (amount*10)/100;
//     let finalamount = amount-bill;
//     console.log(finalamount);
// }else {
//     let bill = (amount*20)/100;
//     console.log(bill);
//     let finalAmount = amount-bill;
//     console.log(finalAmount);
// }

//Home work given by sir

//Q1

// let num1 = 25;
// let num2 = 2;
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1%num2);
// console.log(num1/num2);

// Q2 m1

// let a = 10;
// let b =20;
// let temp = a;
// a=b;
// b = temp;
// console.log(a);
// console.log(b);

//m2
// let a = 10;
// let b =20;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);

//Q3

// let math = 85;
// let science = 90;
// let english = 75;
// let totalmarks =math+science+english;
// console.log(totalmarks);
// let averagemarks = totalmarks/3;
// console.log(averagemarks);
// let percentage = (totalmarks/300)*100;
// console.log(percentage);

// Q4

// let price = 500;
// let quantity = 3;
// let TotalBil = price*quantity;
// console.log(TotalBil);
// let DiscountAmount=(TotalBil*10)/100;
// console.log(DiscountAmount);
// let FinalBill = TotalBil-DiscountAmount;
// console.log(FinalBill);

//Q5

// let length = 20;
// let width = 30;
// let areaOfRectangle = length*width;
// console.log(areaOfRectangle);
// let perimeterOfRectangle = 2 * (length + width);
// console.log(perimeterOfRectangle);

//Q6

// let number = 20;
// if(number%2===0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }

//Q7

// let number= 0;
// if(number>0){
//     console.log("Positive Number");
// }else if(number<0){
//     console.log("Negative Number");
// }else {
//     console.log("Zero");
// }

//Q8

// let num1 =255;
// let num2 = 255;
// if (num1>num2){
//     console.log("First Number Is Greater");
// }else if (num1<num2){
//     console.log("Second Number Is Greater");
// }else{
//     console.log("Both Are Equal");
// }

//Q9

// let a = 100;
// let b =85;
// let c = 80;
// if(a>b&&a>c){
//     console.log("A is largest");
// }else if(b>a&&b>c) {
//     console.log("B is largest");
// }else{
//     console.log("C is largest");
// }

//Q10

// let age = 12;
// if(age>=18){
//     console.log("Eligible to vote");
// }else {
//     console.log("Not eligible to vote");
// }

//Q11

// let age = 25;
// let hasLicense = true;
// console.log(age >=18 && hasLicense ===true);

//Q12

// let number =15;
// if(number>=10&&number<=100){
//     console.log("number is between 10 and 100")
// }else {
//     console.log("not in 10 to 100")
// }

//Q13

// let percentage = -5;
// if(percentage>=90&&percentage<=100){
//     console.log("Grade A ");
// }else if (percentage>=80&&percentage<=89){
//     console.log("Grade B");
// }else if (percentage>=70&&percentage<=79){
//     console.log("Grade C");
// }else if(percentage>=60&&percentage<=69){
//     console.log("Grade D");
// }else if (percentage>=40&&percentage<=59){
//     console.log("Grade E");
// }else if (percentage<40&&percentage>=0){
//     console.log("fail");
// }else{
//     console.log("invalid");
// }

//Q14

// let math = 5;
// let science = 5;
// let english = 6;
// let totalMarks = math+science+english;
// let average = (math+science+english)/3
// if(math>=40&&science>=40&&english>=40){
//     if(average>=75){
//         console.log("Distinction");
//     }else if (average>=60){
//         console.log("First Division");
//     }else if(average>=50){
//         console.log("Second Division");
//     }else{
//         console.log("Pass");
//     }
// }else{
//     console.log("fail");
// }

//Q15

// let units = 250;
// if (units>=0&&units<=100) {
//     let bill = units*5;
//     console.log(bill);
// }else if(units>=101&&units<=200){
//     let remaining = units-100;
//     let bill= (100*5)+(remaining*7)
//     console.log(bill);
// }else {
//     let remaining = units - 200;
//     let bill = (100*5) + (100*7) +(remaining*10)
//     console.log(bill);
// }

//Q16

// let username = "adm2in";
// let password = "1234";
// if (username === "admin" && password === "12345") {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid username or password");
// }

//Q17

// let salary = 10000;
// let experience = 1;
// let bonus = 0;
// if(experience>=10){
//      bonus =(salary*20)/100;
// }else if (experience>=5){
//      bonus = (salary*10)/100;
// }else if (experience>=2){
//      bonus = (salary*5)/100;
// }else {
//     bonus =0;
// }
// let finalsalary = salary+bonus;
// console.log("Original Salary" , salary);
// console.log("Bonus" , bonus);
// console.log("Final salary" , finalsalary);

//Q18

// let age = -80;
// if(age<0){
//     console.log("Invalid negative age");
// }else if(age>=0&&age<=12){
//     console.log("Child");
// }else if(age>=13&&age<=19){
//     console.log("Teenager");
// }else if(age>=20&&age<=59){
//     console.log("Adult");
// }else{
//     console.log("Senior Citizen");
// }

//Q19

// let number = -6;
// switch (number) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Day")
// }

//Q20

// let num1 = 20;
// let num2 = 5;
// let operator = "*";
// switch(operator){
//     case "+":
//         console.log(num1+num2);
//         break;
//     case "-":
//         console.log(num1-num2);
//         break;
//     case "*":
//         console.log(num1*num2);
//         break;
//     case "/":
//         console.log(num1/num2);
//         break;
//     case "%":
//         console.log(num1%num2);
//         break;
// }

//Q21

// let number = 6;
// switch (number) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("febuary");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//         console.log("auguest");
//         break;
//     case 9:
//         console.log("september");
//         break;
//     case 10:
//         console.log("october");
//         break;
//     case 11:
//         console.log("november");
//         break;
//     case 12:
//         console.log("December");
//         break;
//     default:
//         console.log("Invalid month")
// }

//Q22

// let num1 = 20;
// let num2 = 5;
// let choice = 2;
// switch(choice){
//     case 1:
//         console.log(num1+num2);
//         break;
//     case 2:
//         console.log(num1-num2);
//         break;
//     case 3:
//         console.log(num1*num2);
//         break;
//     case 4:
//         console.log(num1/num2);
//         break;
//     case 5:
//         console.log(num1%num2);
//         break;
// }

//Q23

// let color = "Green";
// switch (color){
//     case "Red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Wait");
//         break;
//     case "Green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid Signal");
// }

//Q24