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
})

let allTasks = [];
function saveToStorage(data) {
    if(localStorage.getItem("tasklist")) {
        let fulltasklist = JSON.parse(localStorage.getItem("tasklist"))
        let index = 0

        fulltasklist.forEach(e => {
            if(!e.done) {
                const newObj = { ...e, done: "off", id: index }
                index++
                allTasks.push(newObj)
            } else {
                const indexed = { ...e, id: index }
                index++
                allTasks.push(e)
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



displayInfo()

