// const form = document.querySelector("#form")

// form.addEventListener("submit" ,(e) =>{
//     e.preventDefault();
//     console.log("hii");
// })



// const form = document.querySelector("#form")

// form.addEventListener("submit" ,(e) =>{
//     e.preventDefault();

//     const name = document.querySelector("#name").value
//     const password = document.querySelector("#password").value
//     const email= document.querySelector("#email").value

//     console.log({name, password , email});
// })


// const form = document.querySelector("#form")
// const btn = document.querySelector("#btn")
// const username = document.querySelector("#username")

// form.addEventListener("submit" ,(e) =>{
//     e.preventDefault();

//     const password = document.querySelector("#password").value
//     const email= document.querySelector("#email").value

//     console.log({username :username.value , password , email});
// })

// username.addEventListener("input", (e)=> {
//     console.log(username.value);
// })



// const form = document.querySelector("#form")
// const btn = document.querySelector("#btn")
// const username = document.querySelector("#username")
// const bio = document.querySelector("#bio")
// const charCount = document.querySelector("#char-count")

// const LIMIT = 8
// charCount.textContent = `${LIMIT} character remaining`

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const password = document.querySelector("#password").value
//     const email = document.querySelector("#email").value

//     console.log({ username: username.value, password, email });
// })

// bio.addEventListener("input", (e) => {
//     const remaining = LIMIT - bio.value.length
//     charCount.textContent = `${remaining} character remaining :`
//     // console.log(bio.value);
//     // console.log(bio.value.length);//length count karega console main 
// })





// const username = document.querySelector("#username")

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log({ username: username.value, password, email });
// })

// username.addEventListener("change", (e) => {
//     console.log("change event", username.value);

// })
// username.addEventListener("input", (e) => {
//     console.log("input event", username.value);
// })




// const username = document.querySelector("#username")
// const checkbox = document.querySelector("#checkbox")

// checkbox.addEventListener("input", (e) => {
//     console.log(checkbox.checked);
// })





// const country = document.querySelector("#country")

// country.addEventListener("change", (e)=>{
//     console.log(country.value);
// })





// const username = document.querySelector("#username")

// username.addEventListener("focus", (e) => {
//     console.log("focus");
// })

// username.addEventListener("blur", (e) => {
//     console.log("blur");
// })




// const passwordHint = document.querySelector("#password-hint")
// const password = document.querySelector("#password")

// password.addEventListener("focus", (e) => {
//     passwordHint.classList.remove("hidden")
// })

// password.addEventListener("blur", (e) => {
//     passwordHint.classList.add("hidden")
// })



// //m1
// const form = document.querySelector("#form")
// const btn = document.querySelector("#btn")
// const username = document.querySelector("#username")
// const bio = document.querySelector("#bio")
// const charCount = document.querySelector("#char-count")
// const errorMessage = document.querySelector(".error-message")

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (username.value.trim().length === 0) {
//         console.log("Enter your name");
//         // alert("enter your name")//popup message ayega
//         errorMessage.textContent = "please enter your name"
//         return;
//     }

//     const email = document.querySelector("#email").value
//     console.log({ username: username.value, password: password.value, email });

// })




// const form = document.querySelector("#form")
// const btn = document.querySelector("#btn")
// const username = document.querySelector("#username")
// const bio = document.querySelector("#bio")
// const charCount = document.querySelector("#char-count")
// const errorMessage = document.querySelector(".error-message")

// function validUsername(username) {
//     if (username.value.trim().length === 0) {
//         errorMessage.textContent = "please enter your name"
//         return false
//     }

//     if (username.value.trim().length < 3) {
//         errorMessage.textContent = "username at least 3 character"
//         return false
//     }

//     return true
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const isUsernameValid = validUsername(username)

//     if (isUsernameValid) {
//         console.log("form is valid");
//     } else {
//         console.log("form is invalid");
//     }

// })






const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const errorMessage = document.querySelector("#error-message")
const password = document.querySelector("#password")

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = ""
}

function validUsername(username) {
    if (username.value.trim().length === 0) {
        showError(username, "please Enter your name ")
        return false
    }

    if (username.value.trim().length < 3) {
        showError(username, "username at least 3 character ")
        return false
    }

    clearError(username)
    return true
}

function validPassword(password) {
    if (password.value.trim().length === 0) {
        showError(password, "please Enter your password ")
        return false
    }

    if (password.value.trim().length < 8) {
        showError(password, "password at least 8 character ")
        return false
    }

    clearError(password)
    return true
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isUsernameValid = validUsername(username);
    const isPasswordValid = validPassword(password);

    // if (isUsernameValid) {
    //     console.log("form is valid");
    // } else {
    //     console.log("form is invalid");
    // }

    if (isUsernameValid && isPasswordValid) {
        document.querySelector("h1").classList.remove("hidden")
    } else {
        document.querySelector("h1").classList.add("hidden")
    }
})
