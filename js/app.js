// // document.querySelector("#enId")
// let Test = localStorage.getItem("key")
// // localStorage.setItem("key", "value")
// console.log(Test)


const form = document.querySelector("#login-Form")
const singUp = document.querySelector("#signup")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let formdata = new FormData(form)
    let data = Object.fromEntries(formdata.entries())

    logIn(data)
})
// JSON
// Javascript object notation
let allUsers = [];
singUp.addEventListener("click", (e) => {
    let formdata = new FormData(form)
    let data = Object.fromEntries(formdata.entries())

    signUp(data)
})


function logIn(Curr) {
    const users = JSON.parse(localStorage.getItem("currentUsers"))

    users.forEach(e => {
        if(e.username == Curr.navn && e.password == Curr.passord) {
            const usedUser = {
                userName: Curr.navn,
                passWord: Curr.passord
          }
            sessionStorage.setItem("CurrUser", JSON.stringify(usedUser))
            console.log("bruker eksisterer")
            window.location.href =  "./page/dashboard.html"

        } else {
            console.log("bruker eksisterer ikke")
        }
    })
}



function signUp (userData) {

if (localStorage.getItem("currentUsers")) {
    let current = JSON.parse(localStorage.getItem("currentUsers"))
    localStorage.removeItem("currentUsers")
    current.forEach(e => {
        allUsers.push(e)
    });
}

const peopleObj = {
    username: userData.navn,
    password: userData.passord
}
allUsers.push(peopleObj)

localStorage.setItem("currentUsers", JSON.stringify(allUsers))
}

// localStorage lagres forraltid
// sessionStorage lagres kun når browser er oppe

// localStorage.clear() sletter alt
// localStorage.removeItem("key id") sletter en key