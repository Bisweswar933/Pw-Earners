

// localStorage.setItem("num1",1)
// localStorage.setItem("num2",1)
// localStorage.setItem("num3", 1)

// let result = localStorage.getItem("banty")//yea null dega 
// console.log(result);

// let result2 = localStorage.key("0")
// console.log(result2);

// localStorage.removeItem("num")

// document.querySelector("#clear-storage").addEventListener("click", () => {
//     localStorage.clear()
// })


// document.querySelector("#session-storage").addEventListener("click", () => {
//     sessionStorage.setItem("session", "item")
// })







// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     let data = xhttp.responseText;
//     console.log(data);
// };
// xhttp.open("GET", "https://api.github.com/users/Bisweswar933", true);
// xhttp.send();



//
// fetch("https://api.github.com/users/Bisweswar933").
//     then(data => data.json()).
//     then(data => console.log(data))



// async function getUser(username = "nishantsaini2331") {
//     const response = await fetch(`https://api.github.com/users/${username}`)
//     const data = await response.json()
//     console.log(data);
// }

// getUser()





async function  getUser(username = "nishantsaini2331") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data;
}


document.querySelector("#github-form").addEventListener("submit" , async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value

    const data  =  await getUser(username)

    document.querySelector("#show-profile").innerHTML =    `
        <img src=${data.avatar_url} width="100px" height="100px" alt="">
        <h2>${data.name}</h2>
        <i>username : ${data.login}</i>
        <p>bio : ${data.bio}</p>
        <p>followers : ${data.followers}</p>
        <p>following :  ${data.following}</p>
        <p>Public repos : ${data.public_repos}</p>
        `  
})

// function updateStatus(){
//     document.querySelector("#live-status").textContent = navigator.onLine ? "Online" : "offline"
// }

// window.addEventListener("online"  , updateStatus)
// window.addEventListener("offline" , updateStatus)