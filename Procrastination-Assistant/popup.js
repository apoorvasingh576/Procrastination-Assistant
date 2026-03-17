document.addEventListener("DOMContentLoaded", function(){

document.getElementById("excuseBtn").addEventListener("click", generateExcuse)
document.getElementById("timerBtn").addEventListener("click", startTimer)
document.getElementById("distractionBtn").addEventListener("click", giveDistraction)

})

function generateExcuse(){

let excuses = [
"My laptop started updating unexpectedly.",
"The WiFi stopped working during my study session.",
"I was doing deep research on the topic.",
"My brain needed a short reboot.",
"I was preparing mentally before starting.",
"I had to help a friend with an assignment."
]

let random = Math.floor(Math.random()*excuses.length)
let excuse = excuses[random]

document.getElementById("excuse").innerText = excuse

// copy excuse to clipboard
navigator.clipboard.writeText(excuse)

// open gmail compose
window.open("https://mail.google.com/mail/?view=cm&fs=1&su=Assignment Delay&body="+excuse)

}


function giveDistraction(){

let distractions = [
"https://youtube.com",
"https://reddit.com",
"https://9gag.com",
"https://poki.com",
"https://www.coolmathgames.com"
]

let random = Math.floor(Math.random()*distractions.length)

document.getElementById("distraction").innerText =
"Opening distraction..."

window.open(distractions[random])

}


function startTimer(){

let time = 10

let timer = setInterval(function(){

document.getElementById("timer").innerText =
"Fake studying... " + time + " sec"

time--

if(time < 0){

clearInterval(timer)

document.getElementById("timer").innerText =
"Break time! Enjoy 😄"

window.open("https://youtube.com")

}

},1000)

}