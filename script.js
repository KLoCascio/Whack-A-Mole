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

    setInterval(placeMole, 1000)
    setInterval(placeBadMole, 3000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9)
    return num.toString()
}

function placeMole() {
    if (gameOver) {
        return
    }
    if (activeMoleTile) {
        activeMoleTile.innerHTML = ""
    }
    let mole = document.createElement("img")
    mole.src= "./assets/Cactuar.gif"
    
    let num = getRandomTile()
    if (badMoleTile && badMoleTile.id == num) {
        return
    }
    activeMoleTile = document.getElementById(num)
    activeMoleTile.appendChild(mole)
}

function placeBadMole() {
    if (gameOver) {
        return
    }
    if (badMoleTile) {
        badMoleTile.innerHTML = ""
    }
    let badMole = document.createElement("img")
    badMole.src = "./assets/FighterSprite.gif"
    let num = getRandomTile()
    if (activeMoleTile && activeMoleTile.id == num) {
        return
    }
    badMoleTile = document.getElementById(num)
    badMoleTile.appendChild(badMole)
}

function pickTile() {
    if (gameOver) {
        return
    }
    if (this == activeMoleTile) {
        score += 10
        document.querySelector("#score").innerText = score.toString()
    } else if (this == badMoleTile) {
    document.querySelector("#score").innerText = "Game Over"
    gameOver = true
    console.log(gameOver)
    }
}

console.log(gameOver)