setTimeout(function(){

// create blur overlay
let overlay = document.createElement("div")

overlay.style.position = "fixed"
overlay.style.top = "0"
overlay.style.left = "0"
overlay.style.width = "100%"
overlay.style.height = "100%"
overlay.style.background = "rgba(0,0,0,0.4)"
overlay.style.backdropFilter = "blur(6px)"
overlay.style.zIndex = "9998"

document.body.appendChild(overlay)


// popup box
let box = document.createElement("div")

box.innerHTML =
"<h2 style='margin-bottom:10px'>⚠️ Excessive Productivity Detected</h2>" +
"<p style='margin-bottom:15px'>You have been studying too much.<br>Take a break 😄</p>" +
"<button id='break'>Take Break</button>"


// popup styling
box.style.position = "fixed"
box.style.top = "50%"
box.style.left = "50%"
box.style.transform = "translate(-50%, -50%)"
box.style.background = "white"
box.style.color = "#333"
box.style.padding = "30px"
box.style.borderRadius = "15px"
box.style.textAlign = "center"
box.style.zIndex = "9999"
box.style.width = "300px"
box.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)"

document.body.appendChild(box)


// button styling
let button = document.getElementById("break")

button.style.padding = "10px 20px"
button.style.border = "none"
button.style.borderRadius = "8px"
button.style.background = "#ff4d4d"
button.style.color = "white"
button.style.cursor = "pointer"
button.style.fontSize = "14px"


// break button action
button.onclick = function(){

overlay.remove()
box.remove()

window.open("https://youtube.com")

}

},2000)