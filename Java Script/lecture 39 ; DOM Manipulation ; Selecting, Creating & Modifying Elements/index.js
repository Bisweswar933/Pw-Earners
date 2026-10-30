
// let h1 = document.getElementById("hi")
// let h1 = document.querySelector("hi")
// let h1 = document.querySelector(".hi")
// let h1 = document.querySelector("#hi")

// let h1 = document.querySelectorAll("#hi")
// console.log(hi);

// let p = document.querySelector("#h1")
// console.log(p);

// p.textContent = "hello kaise ho bz"

// p.innerHTML = "<h2> heloo bantyyy <h2>"
// console.log(p.textContent);
// console.log(p.innerHTML);
// console.log(p.innerText);

// p.setAttribute("style", "background-color:pink; font-size:50px")



// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled", "true")
// btn.removeAttribute("disabled")
// btn.textContent = "remove"

// let res = btn.getAttribute("disabled")

// console.log(res);

// p.removeAttribute("style")


// p.classList.add("random")
// p.classList.remove("random")
// p.classList.toggle("random")

// console.log(p.classList.contains("random"));

// p.style.backgroundColor ="pink" 

// p.dataset.helloBantyHii= "hi"

// console.log(p.dataset.helloBantyHii);




// let div = document.createElement("div")
// let div2 = document.createElement("div")

// div.textContent="hello baby"
// div2.textContent="div2"

// console.log(div);

let body = document.querySelector("body")
// console.log(body);

// body.appendChild(div)

// body.append(div,div2)//insert last in body
// body.prepend(div,div2) //insert start in body


// let products = [
//     {
//         name: "iphone",
//         price: 254893
//     },
//     {
//         name: "iphone23",
//         price: 266663
//     },
//     {
//         name: "iphone52",
//         price: 89413
//     },
//     {
//         name: "iphone15",
//         price: 253413
//     }
//     ,
//     {
//         name: "iphone12",
//         price: 254013
//     }
//     ,
//     {
//         name: "iphone11",
//         price: 2513
//     },
// ]

// let productList = document.querySelector("#product-list")

// products.forEach((product) => {
//     // console.log(product);
//     const card = document.createElement("p")
//     card.textContent = `${product.name} - ${product.price}`
//     productList.append(card)

// })






let products = [
    {
        name: "Iphone 20",
        price: 12342,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Samsung 15",
        price: 62324,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "MI 23",
        price: 35354,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Poco 10",
        price: 43534,
        imgUrl: "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "Lava 12",
        price: 53422,
        imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]


let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");


// m-1
    // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")
    // const img = document.createElement("img")
    // img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")
    // upperDiv.append(img)
    // card.append(upperDiv)
    // productList.append(card)



// m-2
    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`

    productList.append(card)

})


let h2 = document.querySelector("#h2")

// body.removeChild(h2) // you have to perform on parent


// h2.remove() // directly on the element you want to remove

let clone = productList.cloneNode(true);

// body.append(clone)


const items = productList.children


// productList.insertBefore(h2 , items[2]) // for precise positioning

// items[2].before(h2)
items[2].after(h2)