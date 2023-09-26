// console.log("Hello World!")

let activeMoleTile
let badMoleTile
let score = 0
let gameOver = false


window.onload = function() {
    startGame()
}

function startGame() {
    for (let i=0; i<9; i++) {
        let tile = document.createElement("div")
        tile.id = i.toString()
        tile.addEventListener("click", pickTile)
        document.querySelector("#board").appendChild(tile)
    }

    setInterval(placeMole, 2000)
    setInterval(placeBadMole, 1000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString()
}

function placeMole() {
    if (activeMoleTile) {
        activeMoleTile.innerHTML = ""
    }
    let mole = document.createElement("img")
    mole.src= "./assets/FighterSprite.gif"
    
    let num = getRandomTile()
    if (badMoleTile && badMoleTile.id == num) {
        return
    } else {
    activeMoleTile = document.getElementById(num)
    activeMoleTile.appendChild(mole)
    }
}

function placeBadMole() {
    if (badMoleTile) {
        badMoleTile.innerHTML = ""
    }
    let badMole = document.createElement("img")
    badMole.src = "./assets/BMageSprite.gif"
    
    let num = getRandomTile()
    if (activeMoleTile && activeMoleTile.id == num) {
        return
    } else {
    badMoleTile = document.getElementById(num)
    badMoleTile.appendChild(badMole)
    }
}

function pickTile() {

    if(this == activeMoleTile) {
        score += 10
        document.querySelector("#score").innerText = score.toString()
    } else if (this == badMoleTile)
    document.querySelector("#score").innerText = "Game Over"
    gameOver = true
}