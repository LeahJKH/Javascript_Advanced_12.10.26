import {displayInfo} from './displayInfo.js'
export function deleteCard(CardId) {
    const localVal = JSON.parse(localStorage.getItem("tasklist"))
    const filteredOut = localVal.filter(e => e.id != CardId)
    localStorage.setItem("tasklist", JSON.stringify(filteredOut))
    displayInfo(JSON.parse(localStorage.getItem("tasklist")))
}