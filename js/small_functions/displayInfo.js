const displayArea = document.querySelector("#cardDisplay")

export function displayInfo() {

    let allTaskList = JSON.parse(localStorage.getItem("tasklist"))

    allTaskList.forEach(e => {
        const div = document.createElement("div")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const btn = document.createElement("button")

        btn.textContent = "Slett"
        btn.addEventListener("click", () => {
            console.log("hei hei")
        })

        const h3Txt = document.createTextNode(e.task)
        const pTxt = document.createTextNode(e.taskdsc)

        const label = document.createElement("label");
        const input = document.createElement("input")

        input.type = "checkbox"
        if (e.done == "on") {
            input.checked = true
        }

        const labelTxt = document.createTextNode("is done?: ")

        label.append(labelTxt, input)

        h3.append(h3Txt)
        p.append(pTxt)

        div.append(h3, p, label, btn)
        displayArea.append(div)
    })
}