

// let container = document.querySelector("#container")

// let h1 = document.createElement("h1")
// h1.textContent = "Swadist sudha"
// container.appendChild(h1)


// let p =document.createElement("p")
// p.textContent = "Price : 199"
// container.appendChild(p)


// let h2 = document.createElement("h2")
// h2.textContent = "Arisha Pitha 250g"
// let p = document.createElement("p")
// p.textContent = "Price : 299"
// container.append(h2,p)

// let h3 = document.createElement("h3")
// h3.textContent = "Our Products"
// container.prepend(h3)


// let product = document.createElement("div")
// product.dataset.name = "Arisha ptha";
// product.dataset.price = "202"

// console.log(product.dataset.name);
// console.log(product.dataset.price);


// let product = document.createElement("h1")
// product.setAttribute("title", "Best Arisha Pitha")
// product.getAttribute("title")
// console.log(product.getAttribute("title"));



// let product = document.createElement("button")
// product.setAttribute("disabled", "")
// product.removeAttribute("disabled")
// console.log(product.getAttribute("disabled"));


// let product = document.createElement("div")
// product.classList.add("product-card")
// console.log(product.classList.contains("product-card"));



// product = document.createElement("div")
// product.classList.add("active")
// product.classList.remove("active")
// console.log(product.classList.toggle("dark-mhode"));
// console.log(product.classList.contains("dark-mode"));


// let product =  document.createElement("div")
// console.log(product.style.backgroundColor = "lightblue");

// let product =  document.createElement("div")
// let p = document.createElement("p")
// let h2 = document.createElement("h2")   
// h2.innerHTML = "arisha";
// p.innerText = "Product Available";
// product.append(p,h2)

// container.append(product)



// let container = document.querySelector("#container")
// let h2 = document.createElement("h2")
// h2.textContent = "SWadist Sudha";
// let p = document.createElement("p");
// p.textContent= "Authentic taste of Odisha";
// container.append(h2,p)


// let heading = document.querySelector("#heading")
// let info = document.querySelector("#info")
// heading.remove()
// info.remove()

// let container = document.querySelector("#container")
// let div = document.createElement("div")
// let h2 = document.createElement("h2")
// h2.textContent = "Swadist Sudha"
// let p = document.createElement("p")
// p.textContent = "Arisha pitha - 299"
// div.classList.add("product-card")
// div.append(h2, p)
// container.append(div)


// let container = document.querySelector("#container")
// let heading = document.querySelector("#heading")
// heading.textContent = "Our Brand"
// let status = document.querySelector("#status")
// status.classList.add("active")
// container.classList.add("product")
// let h3 = document.createElement("h3")
// h3.textContent = "Our Products"
// container.prepend(h3)


// let container = document.querySelector("#container")
// let div = document.createElement("div")
// div.classList.add("card")

// div.innerHTML= `<h2> Arisha Pitha</h2>`;
// let p = document.createElement("p")
// p.innerText = "Product Available";
// p.classList.add("available")
// let p1 = document.createElement("p")
// p1.innerText = "Price : 299";
// div.append(p,p1)
// container.append(div)
// console.log(div.dataset.price = "299");



// let h1 = document.getElementById("title")
// let p = document.querySelector(".description")
// let btn = document.getElementById("btn")
// let price = document.querySelector(".price")
// console.log(h1,p,btn,price);


// let product = document.querySelector("#product")
// console.log(product.textContent);
// console.log(product.innerText);
// console.log(product.innerHTML);


// let container = document.querySelector("#container")
// let p = document.createElement("p")
// p.textContent= "Arisha pitha 199"
// container.append(p)



// let container = document.querySelector("#container")
// let p = document.createElement("p") 
// p.textContent = "Welcome to Swadist Sudha"
// container.prepend(p)


// let btn = document.querySelector("#btn")
// btn.setAttribute("title","Place your order")
// console.log(btn.getAttribute("title"));
// btn.removeAttribute("disabled")


// let product = document.querySelector("#product")
// product.dataset.name = "Arisha Pitha"
// product.dataset.price = "299"
// console.log(product.dataset.name);
// console.log(product.dataset.price );


// let product= document.querySelector("#product")
// product.classList.add("premium");
// console.log(product.classList.contains("premium"));
// let card = document.querySelector(".card")
// card.classList.remove("card")


// let box = document.querySelector("#box")
// let card = document.querySelector(".card")
// box.classList.toggle("active")
// box.style.backgroundColor = "yellow";
// card.style.color = "black";


// let second = document.querySelector("#second")
// second.remove()


// let btn = document.querySelector("#btn")
// let message = document.querySelector("#message")
// btn.addEventListener("click",()=>{
//     console.log("Your order has been placed");
// })


// let btn = document.querySelector("#btn")
// btn.addEventListener("click", (event)=>{
//     console.log(event.type);
//     console.log(event.target);
// })



// let parent = document.querySelector("#parent")
// parent.addEventListener("click",(e)=>{
//     console.log(e.target);
//     console.log(e.currentTarget);
// })


// let myForm = document.querySelector("#myform")
// myForm.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("Form submitted");
// })



// let productlist = document.querySelector("#productlist")
// productlist.addEventListener("click",(e)=>{
//     if(e.target.tagName==="LI"){
//         console.log(e.target.textContent);
//     }
// })


// let btn = document.querySelector(".btn")
// btn.addEventListener("click",(e)=>{
//     let card = e.target.closest(".card")
//     let heading = card.querySelector("h2")
//   console.log(heading.textContent);
// })


// let btn = document.querySelector("#btn")

// function handleclick(){
//   console.log("Button clicked");
// }
// btn.addEventListener("click",handleclick)
// btn.removeEventListener("click",handleclick)


// let list = document.querySelector("#list")
// let addbtn = document.querySelector("#addBtn")

// addbtn.addEventListener("click", (e) => {
//   // e.stopPropagation();
//   let li = document.createElement("li")
//   li.textContent = "mango"
//   list.appendChild(li)
//   console.log(li.textContent);
// })

// list.addEventListener("click",(e)=>{
//   if(e.target.tagName === "LI"){
//     console.log(e.target.textContent);
//   }
// })


// let username = document.querySelector("#username")
// let btn = document.querySelector("#btn")
// let result = document.querySelector("#result")

// btn.addEventListener("click",(e)=>{
//   let name =username.value
//   result.textContent = `hello${name}`
// })


// const form = document.querySelector("#form")
// const username = document.querySelector("#username")
// const email = document.querySelector("#email")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const use = username.value;
//     const em = email.value;
//     console.log(use,em);
// })


// const username =document.querySelector("#username")
// const output =document.querySelector("#output")
// username.addEventListener("input",(e)=>{
//     e.preventDefault();
//     console.log(username.value);
//     console.log(e.target.value);
// })


// const username =document.querySelector("#username")
// username.addEventListener("input",(e)=>{
//     console.log("input event", username.value);
// })
// username.addEventListener("change",(e)=>{
//     console.log("change event", username.value);
// })

// const subscribe =document.querySelector("#subscribe")
// subscribe.addEventListener("input",(e)=>{
//     console.log(subscribe.checked);
// })

// const food =document.querySelector("#food")
// food.addEventListener("change",(e)=>{
//     console.log(food.value);
// })


// const email =document.querySelector("#email")
// email.addEventListener("focus",(e)=>{
//     console.log("email field focused");
// })
// email.addEventListener("blur",(e)=>{
//     console.log("email field blured");
// })



// const form =document.querySelector("#form")
// const username =document.querySelector("#username")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     if(username.value.trim()===""){
//         console.log("invalid useraname");
//     }else{
//         console.log(username.value);
//     }
// })


// const form =document.querySelector("#form")
// const username =document.querySelector("#username")
// function checkUsername(){
//     if(username.value.trim()===""){
//         console.log("username requried");
//         return;
//     }
//     console.log("acpect");
// }
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//      checkUsername()

// })


// const check =document.querySelector("#check")
// const username =document.querySelector("#username")

// function validUsername(){
//     if(username.value.trim()===""){
//         console.log("Username Required");
//       return;
//     }
//     if(username.value.trim().length<3){
//         console.log("minium 3 character required");
//         return;
//     }
//     console.log("username valid");
// }

// check.addEventListener("click",(e)=>{
//     validUsername()
// })


// const password =document.querySelector("#password")
// const errorMessage = password.parentElement.querySelector(".error-message")

// errorMessage.textContent= "password required"


// const email = document.querySelector("#email")
// const clear = document.querySelector("#clear")

// function clearError(input) {
//     const erroMessage = email.parentElement.querySelector(".error-message");
//     erroMessage.textContent = " ";
// }

// clear.addEventListener("click", (e) => {
//     clearError(email)
// })



// const form = document.querySelector("#form")
// const password = document.querySelector("#password")
// const username = document.querySelector("#username")
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if (username.value.trim() !== "" && password.value.trim() !== "") {
//         console.log("Login succesfully ");
//     } else {
//         console.log("both fillled are required");
//     }
// })

// const message = document.querySelector("#message")
// const check = document.querySelector("#check")

// check.addEventListener("click",(e)=>{
//     console.log(message.value.length);
// })


// const check = document.querySelector("#check")
// const username = document.querySelector("#username")
// check.addEventListener("click",(e)=>{
//     if(username.value.length<3){
//         console.log("Too short");
//     }else{
//         console.log("valid username");
//     }
// })



// const check = document.querySelector("#check")
// const message = document.querySelector("#message")
// check.addEventListener("click",(e)=>{
//     if(message.value.length>10){
//         console.log("Limit Excessed");
//     }else{
//         console.log("Within limit");
//     }
// })


// const check = document.querySelector("#check")
// const username = document.querySelector("#username")

// check.addEventListener("click",(e)=>{
//     if(username.value.trim().length===0){
//         console.log("username required");
//     }
//     else if(username.value.trim().length<3){
//         console.log("Too short");
//     }else{
//         console.log("valid username");
//     }
// })


// const check = document.querySelector("#check")
// const message = document.querySelector("#message")

// check.addEventListener("click",(e)=>{
//     if(message.value.trim().length===0){
//         console.log("message required");
//     }
//     else if(message.value.trim().length>=1&&message.value.trim().length<=10){
//         console.log("message Too short");
//     }else if(message.value.trim().length>=11&&message.value.trim().length<=50){
//         console.log("mesage  accpect");
//     }else{
//         console.log("message too long");
//     }
// })


// const message = document.querySelector("#message")
// const count = document.querySelector("#count")

// message.addEventListener("input",(e)=>{
//   const counter =   message.value.trim().length
// count.textContent=`Character : ${counter}`

// })


// const password = document.querySelector("#password");
// const toggle = document.querySelector("#toggle");

// toggle.addEventListener("click", (e) => {

//     if (password.getAttribute("type") === "password") {

//         password.setAttribute("type", "text");
//         toggle.textContent = "Hide Password";

//     } else {

//         password.setAttribute("type", "password");
//         toggle.textContent = "Show Password";

//     }

// });



// const itemInput = document.querySelector("#itemInput");
// const shoppingList = document.querySelector("#shoppingList");
// const addBtn = document.querySelector("#addBtn");
// addBtn.addEventListener("click", (e) => {
//     if (itemInput.value.trim() === "") {
//         console.log("Please enter an item");
//     } else {
//         const li = document.createElement("li")
//         li.textContent = `${itemInput.value}`
//         shoppingList.append(li)
//         itemInput.value=""
//     }
// })



// const itemInput = document.querySelector("#itemInput");
// const shoppingList = document.querySelector("#shoppingList");
// const addBtn = document.querySelector("#addBtn");

// addBtn.addEventListener("click",(e)=>{
//     if(itemInput.value.trim()===""){
//         console.log("please enter an item");
//         return
//     }

//     const li = document.createElement("li")
//     li.textContent=itemInput.value

//     const button = document.createElement("button")
//     button.textContent="delete"

// button.addEventListener("click",(e)=>{
//     li.remove();
// });

// li.append(button)
// shoppingList.append(li)
// itemInput.value=""

// })

// const question = document.querySelectorAll("h3")
// question.forEach((question) => {
//     question.addEventListener("click", (e) => {
//         const parent = question.parentElement
//         const answer = parent.querySelector(".answer")
//         answer.classList.toggle("hide")
//     })
// })



// const todoInput = document.querySelector("#todoInput")
// const addBtn = document.querySelector("#addBtn")
// const todoList = document.querySelector("#todoList")

// addBtn.addEventListener("click",(e)=>{
//    if(todoInput.value.trim()===""){
//     console.log("please ");
//    }
//    const li =document.createElement("li")
//   li.textContent=`${todoInput.value}` 

//   const button = document.createElement("button")
//   button.textContent="delete"
//   li.append(button)
//   todoList.append(li)
//   todoInput.value=""

//   button.addEventListener("click",(e)=>{
//     li.remove()
//   })
// })

// console.log("welcome");

// setTimeout(()=>{
//   console.log("Learning javascript");
// },2000)

// console.log("Pratice start"); 


// let count =1;
// let timer= setInterval(() => {
//     console.log(count);
//     count++;
//     if (count === 4) {
//       clearInterval(timer)
//     }

//   },1000)



// function order(bi){
//   console.log("order placed");
//   bi()
// }
// function banty(){
//   console.log("food prepairing");
// }
// order(banty)


// function step1(callback){
//   console.log("login succefully");
//   callback()
// }

// function step2(callback){
//   console.log("Profilw loaded ");
//   callback()
// }
// step1(()=>{
//   step2(()=>{
//     console.log("Dashboard opned");
//   })
// })



// const myPromise = new Promise((resolve, reject)=>{
//   reject("Login failed")
// });

// myPromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(()=>{
//     console.log("Procses complete");
//   })



// function getData(){
//   return new Promise(resolve  =>{
//     resolve("Order confirened")
//   })
// }

// async function showdata(params) {
//  let result = await getData() 
// console.log(result);
// }

// showdata()



// const p1 = Promise.resolve("100")
// const p2 = Promise.resolve("200")
// const p3 = Promise.resolve("300")

// Promise.all([p1,p2,p3])
// .then(result =>{
//   console.log(result);
// })


// const p1 = new Promise(resolve => {
//   setTimeout(() => resolve("100"), 3000
//   );
// });

// const p2 = new Promise(resolve => {
//   setTimeout(() => resolve("200"), 1000
//   );
// });
// Promise.race([p1, p2])
//   .then(result => console.log(result));


// const p1 = Promise.resolve("fulfilled");
// const p2 = Promise.reject("rejected");
// const p3 = Promise.resolve("fullfiled");

// Promise.allSettled([p1, p2, p3])
// .then(result => {
//     console.log(result);
// });



// const p1 = Promise.resolve("fulfilled");
// const p2 = Promise.reject("rejected");
// const p3 = Promise.resolve("fullfiled");

// Promise.allSettled([p1, p2, p3])
//   .then(result => {
//     console.log(result[0].status);
//     console.log(result[1].status);
//     console.log(result[2].status);
//   });


// const p1 = Promise.reject("reject");

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("Apple"), 3000);
// });

// const p3 = Promise.resolve("banana");

// Promise.any([p1, p2, p3])
//     .then(result => console.log(result));


// try {
//     // console.log("login Start");

//     throw new Error("user not found ");

//     console.log("End");

// } catch (error) {
//     console.log(error.name);

// } finally {
//     console.log("search completed");
// }


// class product {
//     constructor(productname, price) {
//         this.productName = productname;
//         this.price = price;
//     }

//     result(){
//         console.log(this.price);
//     }
// }

// const product1 = new product("arisha pitha",299)
// console.log(product1.productName);
// product1.result()


// const person = {
//     name: "Rahul"
// };

// function showName() {
//     console.log(this.name);
// }
// showName.call(person)


const todoInput = document.querySelector("#todoInput")
const addBtn = document.querySelector("#addBtn")
const todoList = document.querySelector("#todoList")

addBtn.addEventListener("click", () => {
    const task = todoInput.value
    if (task.trim() === "") {
        return;
    }

    const li = document.createElement("li")
    li.textContent = task

    const dltbutton = document.createElement("button")
    dltbutton.textContent = "delete"
    li.append(dltbutton)

    const editTodo = document.createElement("button")
    editTodo.textContent = "edit"
    li.append(editTodo)

    const completeButton = document.createElement("button")
    completeButton.textContent = "complete"
    li.append(completeButton)
    todoList.append(li)

    todoInput.value = ""

})

todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        if (e.target.textContent === "delete") {
            const li = e.target.closest("li")
            li.remove()
        }
        if (e.target.textContent === "edit") {
            const li = e.target.closest("li")
            const b = li.firstChild.textContent

            const newTask = prompt("add new task")
            if (newTask === null || newTask.trim() === "") {
                return;
            }
            li.firstChild.textContent = newTask;
        };
        if (e.target.textContent === "complete") {
            const li = e.target.closest("li")
            li.classList.toggle("completed")
        }

    };

});

