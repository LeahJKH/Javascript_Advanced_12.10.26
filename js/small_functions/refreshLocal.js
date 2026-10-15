export function refreshlocal(CardId, item) {
    let newArr = [];
    const localVal = JSON.parse(localStorage.getItem("tasklist"))
    
    const filteredOut = localVal.filter(e => e.id != CardId)

    filteredOut.forEach(e => {
        newArr.push(e)
    });
    newArr.push(item)

    let sorted = newArr.sort((a, b) => {return a.id - b.id})
    
    localStorage.setItem("tasklist", JSON.stringify(sorted))
}