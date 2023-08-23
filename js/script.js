"use strict"

// vars 

const arr = []
let entries = []
let index = 0

const player = document.createElement("input")
const add = document.createElement("button")
const submit = document.createElement("button")
const buttonDiv = document.createElement("div")
const div = document.createElement("div")
const img = document.createElement("img")
const h1 = document.createElement("h1")
const h2 = document.createElement("h2")
const btn = document.createElement("button")

// options 

player.type = "text"
player.placeholder = "Player"
add.innerText = "Add Player"
submit.innerText = "Start Game"
img.src = "./image/santa.png"
img.alt = "santa"
h1.innerText = "Secret Santa: Unknown"
h2.innerText = "Happy Kid: Unknown"
btn.innerText = "GO!"
div.className = "main"

// functions 

function addPlayer () {
    arr.push(player.value)
    player.value = ""
    console.log(arr)
}

function secretSanta () {
    for (let i = arr.length; i >= 0; i--) {
        const index = Math.floor(Math.random() * i)
        arr.push(arr.splice(index, 1)[0])
    }
    
    for (let i = 0; i < arr.length; i++) {
        let santa = arr[i]
        let child = arr[(i + 1) % arr.length]
        entries.push(new Array(santa))
        entries[i].push(child)
    }
    console.table(entries)
}

// listeners 

add.addEventListener("click", addPlayer)

submit.addEventListener("click", () => {
    player.disabled = true
    add.removeEventListener("click", addPlayer)
    secretSanta()
})

btn.addEventListener("click", function() {
    if (index < entries.length) {
        h1.innerText = `Secret Santa: ${entries[index][0]}`
        h2.innerText = `Happy Kid: ${entries[index][1]}`
        index++
    } else {
        h1.innerText = "Thank you!"
        h2.innerText = "Enjoy your gifts!"
        index = 0
        player.disabled = false
        add.addEventListener("click", addPlayer)
        arr.length = 0
        entries.length = 0
    }
})

// appendance 

buttonDiv.append(add, submit)
div.append(player, buttonDiv, img, h1, h2, btn)
document.body.appendChild(div)