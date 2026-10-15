import {deleteCard} from './deleteCard.js'
import {refreshlocal} from './refreshLocal.js'
const displayArea = document.querySelector("#cardDisplay")

export function displayInfo(taskListed) {

    while (displayArea.firstChild) {
        displayArea.removeChild(displayArea.firstChild)
    }


    taskListed.forEach(e => {
        const CardId = e.id
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const btn = document.createElement("button")

        btn.textContent = "Slett"
        btn.addEventListener("click", () => {
            deleteCard(CardId)
        })

        const h3Txt = document.createTextNode(e.task)
        const pTxt = document.createTextNode(e.taskdsc)

        const label = document.createElement("label");
        const input = document.createElement("input")

        input.type = "checkbox"
        if (e.done == "on") {
            input.checked = true

        } else {


        }
        let item = e;
        input.addEventListener("click", (e) => {
            if(item.done == "on") {
                item.done = "off"
                input.checked = false
                console.log(item)
            } else if (item.done == "off"){
                item.done = "on"
                input.checked = true
                console.log(item)
            } else {
                console.log("problem")
            }
            refreshlocal(CardId, item)
        })

        const labelTxt = document.createTextNode("is done?: ")

        label.append(labelTxt, input)

        h3.append(h3Txt)
        p.append(pTxt)

        div.append(h3, p, label, btn)
        displayArea.append(div)
    })
}