import { displayInfo } from "./small_functions/displayInfo.js"

////
const wlcmMsg = document.querySelector("#welcomeMsg") 

let UserInfo = JSON.parse(sessionStorage.getItem("CurrUser"))

wlcmMsg.textContent = `Welcome ${UserInfo.userName}`
//////


const form = document.querySelector("#taskForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let formdata = new FormData(form)
    let data = Object.fromEntries(formdata.entries())
    saveToStorage(data)
    displayInfo(JSON.parse(localStorage.getItem("tasklist")))
})

let allTasks = [];
let index = 0
function saveToStorage(data) {
    allTasks = [];
    if(localStorage.getItem("tasklist")) {
        let fulltasklist = JSON.parse(localStorage.getItem("tasklist"))

        fulltasklist.forEach(e => {
            if(!e.done) {
                const newObj = { ...e, done: "off", id: index }
                index++
                allTasks.push(newObj)
            } else {
                const indexed = { ...e, id: index }
                index++
                allTasks.push(indexed)
            }
        });
        if(!data.done) {
            const notDoneData = {
                ...data,
                done: "off",
                id: index
            }
            index++
            allTasks.push(notDoneData)
        } else {
            const indexed = {
                ...data,
                id: index
            }
            index++
            allTasks.push(indexed)
        }
        localStorage.setItem("tasklist", JSON.stringify(allTasks))
    } else {
        allTasks.push(data)
        localStorage.setItem("tasklist", JSON.stringify(allTasks))
    }
}



displayInfo(JSON.parse(localStorage.getItem("tasklist")))



// const BigObject = {
//     id: 2,
//     lamacount: 23,
//     price: 2000
// }
//{...BigObject}
// variabel = variabel 1 , variabel 2, variabel 3

// const bigArray = [1, 2, 3 ]
// const [first, second, third] = bigArray
// console.log(second)


const searchbar = document.querySelector("#search")

searchbar.addEventListener("input", (e) => {
    let empty = []
    let input = e.target.value.toLowerCase()
    let localStore = JSON.parse(localStorage.getItem("tasklist"))
    
    localStore.forEach(e => {
        let lower = e.task.toLowerCase()
        let desclower = e.taskdsc
        if(lower.includes(input) || desclower.includes(input)) {
            empty.push(e)
        }
    })

    displayInfo(empty)
})

const selected = document.querySelector("#selected")

selected.addEventListener("change", (e) => {
    let empty = []
    let input = e.target.value.toLowerCase()
    let localStore = JSON.parse(localStorage.getItem("tasklist"))
    
    localStore.forEach(e => {
        if(e.done == input) {
            empty.push(e)
        } else if (input == "") {
            empty.push(e)
        }
    })

    displayInfo(empty)
})