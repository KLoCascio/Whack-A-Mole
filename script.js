// console.log("Hello World!")

let activeMoleTile // Hero.gif
let badMoleTile // Cactuar.gif
let secretOneTile // Secret1.gif
let secretTwoTile // Secret2.gif
let secretThreeTile // Secret3.gif

let score = 0
let gameOver = false

window.onload = function() {
    startGame()
}

function startGame() {
    for (let i=0; i<12; i++) {
        let tile = document.createElement("div")
        tile.id = i.toString()
        tile.addEventListener("click", pickTile)
        document.querySelector("#board").appendChild(tile)
    }

    setInterval(placeMole, 1000)
    setInterval(placeBadMole, 3000)
    setInterval(placeSecret1Tile, 2000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 12)
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
    mole.src= "./assets/Hero.gif"
    
    let num = getRandomTile()
    if (badMoleTile && badMoleTile.id == num) {
        return
    }
    activeMoleTile = document.getElementById(num)
    activeMoleTile.appendChild(mole)
}

function placeSecret1Tile() {
    if (gameOver) {
        return
    }
    if (secretOneTile) {
        secretOneTile.innerHTML = ""
    }
    let secret1 = document.createElement("img")
    secret1.src = "./assets/Secret1.gif"

    let num = getRandomTile()
    if (badMoleTile && badMoleTile.id == num || activeMoleTile && activeMoleTile.id == num) {
        return
    }
    secretOneTile = document.getElementById(num)
    secretOneTile.appendChild(secret1)
}

function placeBadMole() {
    if (gameOver) {
        return
    }
    if (badMoleTile) {
        badMoleTile.innerHTML = ""
    }
    let badMole = document.createElement("img")
    badMole.src = "./assets/Cactuar.gif"
    let num = getRandomTile()
    if (activeMoleTile && activeMoleTile.id == num) {
        return
    }
    badMoleTile = document.getElementById(num)
    badMoleTile.appendChild(badMole)
}

// Click Good += 10 points, Bad -=10 points
function pickTile() {
    if (gameOver) {
        return
    }
    if (this == activeMoleTile) {
        score += 10
        document.querySelector("#score").innerText = score.toString()
        const clickSound = document.querySelector("#clickSound")
        clickSound.play()
        // Secret One Clicked -- change sound add boolean for oneCollected
    } else if (this == secretOneTile) {
        score += 20
        document.querySelector("#score").innerText = score.toString()
        const clickSound = document.querySelector("#clickSound")
        clickSound.play()
        oneCollected = true
    }
    else if (this == badMoleTile) {
        score -= 10
        document.querySelector("#score").innerText = score.toString()
        const clickSound = document.querySelector("#clickSound")
        clickSound.play() 
        if (score < 0){
            document.querySelector("#score").innerText = "Game Over"
            gameOver = true
            console.log(gameOver)

        }
    }
}

let oneCollected = false
let twoCollected = false
let threeCollected = false

if (oneCollected) {
    

}

console.log(gameOver)

// if (oneCollected) {
//     let secret1Icon = document.createElement("img")
//     secret1Icon.src = "./assets/Secret1Icon.gif"
//     let displayCase = document.querySelector("secrets-display")
//     secret1Icon.appendChild(displayCase)

// }

// old clicking function. good += 10 points, bad = game over
// function pickTile() {
//     if (gameOver) {
//         return
//     }
//     if (this == activeMoleTile) {
//         score += 10
//         document.querySelector("#score").innerText = score.toString()
//         const clickSound = document.querySelector("#clickSound")
//         clickSound.play()
//     } else if (this == badMoleTile) {
//     document.querySelector("#score").innerText = "Game Over"
//     gameOver = true
//     console.log(gameOver)
//     }
// }