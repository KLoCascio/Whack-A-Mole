// console.log("Hello World!")

let activeMoleTile
let badMoleTile

window.onload = function() {
    startGame()
}

function startGame() {
    for (let i=0; i<9; i++) {
        let tile = document.createElement("div")
        tile.id = i.toString()
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
    }
    activeMoleTile = document.getElementById(num)
    activeMoleTile.appendChild(mole)
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
    }
    badMoleTile = document.getElementById(num)
    badMoleTile.appendChild(badMole)
}

