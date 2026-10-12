const wlcmMsg = document.querySelector("#welcomeMsg") 

let UserInfo = JSON.parse(sessionStorage.getItem("CurrUser"))

wlcmMsg.textContent = `Welcome ${UserInfo.userName}`