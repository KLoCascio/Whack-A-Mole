// console.log("Hello World!")

let activeMoleTile // Hero.gif
let badMoleTile // Cactuar.gif
let secretOneTile // Secret1.gif
let secretTwoTile // Secret2.gif
let secretThreeTile // Secret3.gif

let score = 0
let gameOver = false
let secrets = 0

// global secret values
let mole
let badMole
let secret1
let secret2
let secret3

// secrets booleans
let oneCollected = false
let twoCollected = false
let threeCollected = false

// setting interval IDs
let placeMoleInterval
let placeBadMoleInterval
let placeSecret1Interval
let placeSecret2Interval
let placeSecret3Interval

window.onload = function() {
    startGame()
    const pauseBtn = document.getElementById("pauseBtn")
    if (pauseBtn) {
        pauseBtn.onclick = function() {
            console.log("Pause Clicked")
          modal.style.display = "block"
        }
    } else {
        console.log("pauseBtn not found")
    }
}

const modal = document.getElementById("startModal")
let span = document.getElementsByClassName("close")[0]

span.onclick = function() {
    console.log("Close Clicked")
  modal.style.display = "none"
}
window.onclick = function(event) {
  if (event.target == modal) {
    console.log("Window Clicked")
    modal.style.display = "none"
  }
}

function startGame() {
    for (let i=0; i<12; i++) {
        let tile = document.createElement("div")
        tile.id = i.toString()
        tile.addEventListener("click", pickTile)
        document.querySelector("#board").appendChild(tile)
    }

    placeMoleInterval = setInterval(placeMole, 2000)
    placeBadMoleInterval = setInterval(placeBadMole, 1000)
    placeSecret1Interval = setInterval(placeSecret1Tile, 10000)
    placeSecret2Interval = setInterval(placeSecret2Tile, 20000)
    placeSecret3Interval = setInterval(placeSecret3Tile, 40000)
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 12)
    return num.toString()
}

// Placing the Moles and Secrets
function placeMole() {
    if (gameOver) {
        return
    }
    if (activeMoleTile) {
        activeMoleTile.innerHTML = ""
    }
    mole = document.createElement("img")
    mole.src= "./assets/Hero.gif"
    
    let num = getRandomTile()
    if (badMoleTile && badMoleTile.id == num
        || secretOneTile && secretOneTile.id == num
        || secretTwoTile && secretTwoTile.id == num
        || secretThreeTile && secretThreeTile.id == num) {
        return
    }
    activeMoleTile = document.getElementById(num)
    activeMoleTile.appendChild(mole)
}

function placeSecret1Tile() {
    if (gameOver || oneCollected == true) {
        return
    }
    if (secretOneTile) {
        secretOneTile.innerHTML = ""
    }
    secret1 = document.createElement("img")
    secret1.src = "./assets/Secret1.gif"

    let num = getRandomTile()
    if (activeMoleTile && activeMoleTile.id == num
        || badMoleTile && badMoleTile.id == num
        || secretTwoTile && secretTwoTile.id == num
        || secretThreeTile && secretThreeTile.id == num) {
        return
    }
    secretOneTile = document.getElementById(num)
    secretOneTile.appendChild(secret1)
}

function placeSecret2Tile() {
    if (gameOver || twoCollected == true) {
        return
    }
    if (secretTwoTile) {
        secretTwoTile.innerHTML = ""
    }
    secret2 = document.createElement("img")
    secret2.src = "./assets/Secret2.gif"

    let num = getRandomTile()
    if (activeMoleTile && activeMoleTile.id == num
        || badMoleTile && badMoleTile.id == num
        || secretOneTile && secretOneTile.id == num
        || secretThreeTile && secretThreeTile.id == num) {
        return
    }
    secretTwoTile = document.getElementById(num)
    secretTwoTile.appendChild(secret2)
}

function placeSecret3Tile() {
    if (gameOver || threeCollected == true) {
        return
    }
    if (secretThreeTile) {
        secretThreeTile.innerHTML = ""
    }
    secret3 = document.createElement("img")
    secret3.src = "./assets/Secret3.gif"

    let num = getRandomTile()
    if (activeMoleTile && activeMoleTile.id == num
        || badMoleTile && badMoleTile.id == num
        || secretOneTile && secretOneTile.id == num
        || secretTwoTile && secretTwoTile.id == num) {
        return
    }
    secretThreeTile = document.getElementById(num)
    secretThreeTile.appendChild(secret3)
}

function placeBadMole() {
    if (gameOver) {
        return
    }
    if (badMoleTile) {
        badMoleTile.innerHTML = ""
    }
    badMole = document.createElement("img")
    badMole.src = "./assets/Cactuar.gif"
    let num = getRandomTile()
    if (activeMoleTile && activeMoleTile.id == num
        || secretOneTile && secretOneTile.id == num
        || secretTwoTile && secretTwoTile.id == num
        || secretThreeTile && secretThreeTile.id == num) {
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
    if (this == activeMoleTile && !activeMoleTile.clicked) {
        score += 10
        activeMoleTile.clicked = true
        document.querySelector("#score").innerText = score.toString()
        //CLEAR THE TILE NEEDED
        activeMoleTile.removeChild(mole)
    } else if (this == secretOneTile && !secretOneTile.clicked) {
        secrets += 1
        secretOneTile.clicked = true
        document.querySelector("#secrets").innerText = secrets.toString()
        oneCollected = true
        let secret1Collected = document.getElementById("display1")
        secret1Collected.classList.add("collected")
        clearTiles()
    }  else if (this == secretTwoTile && !secretTwoTile.clicked) {
        secrets += 1
        secretTwoTile.clicked = true
        document.querySelector("#secrets").innerText = secrets.toString()
        twoCollected = true
        let secret2Collected = document.getElementById("display2")
        secret2Collected.classList.add("collected")
        clearTiles()
    }  else if (this == secretThreeTile && !secretThreeTile.clicked) {
        secrets += 1
        secretThreeTile.clicked = true
        document.querySelector("#secrets").innerText = secrets.toString()
        threeCollected = true
        let secret3Collected = document.getElementById("display3")
        secret3Collected.classList.add("collected")
        clearTiles()
    } else if (this == badMoleTile && !badMoleTile.clicked) {
        score -= 10
        badMoleTile.clicked = true
        document.querySelector("#score").innerText = score.toString()
        // CLEAR THE TILE NEEDED
        if (score < 0){
            document.querySelector("#score").innerText = "Game Over"
            gameOver = true
            console.log(gameOver)

        }
    }
}

function clearTiles() {
    if (oneCollected && secretOneTile.contains(secret1)) {
        clearInterval(placeSecret1Interval)
        secretOneTile.removeChild(secret1)
    } else if (twoCollected && secretTwoTile.contains(secret2)) {
        clearInterval(placeSecret2Interval)
        secretTwoTile.removeChild(secret2)
    } else if (threeCollected && secretThreeTile.contains(secret3)) {
        clearInterval(placeSecret3Interval)
        secretThreeTile.removeChild(secret3)
    }
}

console.log(oneCollected)
