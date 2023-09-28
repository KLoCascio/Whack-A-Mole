
let activeMoleTile
let badMoleTile 
let secretOneTile
let secretTwoTile 
let secretThreeTile

let score = 0
let secrets = 0
let gameOver = false
let winner

let mole
let badMole
let secret1
let secret2
let secret3

let oneCollected = false
let twoCollected = false
let threeCollected = false

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
    }
}

const modal = document.getElementById("startModal")
let span = document.getElementsByClassName("close")[0]

const menuContent = document.querySelector(".menu-content")
menuContent.innerHTML = `
<h1>How to Play</h1>
    <p>Click our Heroes, but avoid clicking the Cactuar.</p>
<h1>Point Values</h1>
    <div id="pointValues">
    <img src="./assets/Hero.gif" alt="Hero Gif" /><h2>Cloud Strife</h2><p>+10 Points</p>
    <img src="./assets/Cactuar.gif" alt="Cactuar Gif" /><h2>Cactuar</h2><p>-10 Points</p>
    </div>
<h1> How to Win</h1>
    <div id="secrets-menu">
    <img src="./assets/Secret1.gif" alt="Vivi Trophy" /> <img src="./assets/Secret2.gif" alt="Moogle Trophy" /> <img src="./assets/Secret3.gif" alt="Sora Trophy" />
    </div>
    <div id="winReq">
    <p>Collect All Three Secret Heroes to Win! // Earn 100 Points!</div>
    <button id="resumeButton">Resume</button>`

const resumeButton = document.querySelector("#resumeButton")
resumeButton.onclick = function() {
    modal.style.display = "none"
}

span.onclick = function() {
  modal.style.display = "none"
}
window.onclick = function(event) {
  if (event.target == modal) {
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
    if (score != 0) {
        score = 0
    }
    if (secrets != 0) {
        secrets = 0
    }
    if (gameOver) {
        gameOver = false
    }
    winner = false
    placeMoleInterval = setInterval(placeMole, 2000)
    placeBadMoleInterval = setInterval(placeBadMole, 1000)
    placeSecret1Interval = setInterval(placeSecret1Tile, 10000)
    placeSecret2Interval = setInterval(placeSecret2Tile, 20000)
    placeSecret3Interval = setInterval(placeSecret3Tile, 30000)
}

function endGame() {
    clearInterval(placeMoleInterval)
    clearInterval(placeBadMoleInterval)
    menuContent.innerHTML = `<div id="winningMessage">
    <h1>YOU WIN!</h1>
    <img src="./assets/CloudVictory.gif" alt="Cloud Victory Pose Gif" />
    <button id="replayButton">Replay?</button>
    </div>`
    modal.style.display = "block"
    let victorySound = document.querySelector("#victory-sound")
    victorySound.play()
    replayBtn = document.querySelector("#replayButton")
    replayBtn.addEventListener("click", function () {
        location.reload()
    })
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
    setTimeout(() => {
        secretOneTile.innerHTML = "";
    }, 1000);
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
    setTimeout(() => {
        secretTwoTile.innerHTML = "";
    }, 1000);
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
    setTimeout(() => {
        secretThreeTile.innerHTML = "";
    }, 1000);
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

function pickTile() {
    if (gameOver || winner) {
        return
    }
    if (this == activeMoleTile) {
        score += 10
        document.querySelector("#score").innerText = score.toString()
        activeMoleTile.removeChild(mole)
        if (oneCollected &&
            twoCollected &&
            threeCollected &&
            score >= 100) {
                endGame()
            }
    } else if (this == secretOneTile && !secretOneTile.clicked) {
        secrets += 1
        secretOneTile.clicked = true
        document.querySelector("#secrets").innerText = secrets.toString()
        oneCollected = true
        let secret1Collected = document.getElementById("display1")
        secret1Collected.classList.add("collected")
        clearTiles()
        if (oneCollected &&
            twoCollected &&
            threeCollected &&
            score == 100) {
                endGame()
            }
    }  else if (this == secretTwoTile && !secretTwoTile.clicked) {
        secrets += 1
        secretTwoTile.clicked = true
        document.querySelector("#secrets").innerText = secrets.toString()
        twoCollected = true
        let secret2Collected = document.getElementById("display2")
        secret2Collected.classList.add("collected")
        clearTiles()
        if (oneCollected &&
            twoCollected &&
            threeCollected &&
            score == 100) {
                endGame()
            }
    }  else if (this == secretThreeTile && !secretThreeTile.clicked) {
        secrets += 1
        secretThreeTile.clicked = true
        document.querySelector("#secrets").innerText = secrets.toString()
        threeCollected = true
        let secret3Collected = document.getElementById("display3")
        secret3Collected.classList.add("collected")
        clearTiles()
        if (oneCollected &&
            twoCollected &&
            threeCollected &&
            score == 100) {
                endGame()
            }
    } else if (this == badMoleTile) {
        score -= 10
        document.querySelector("#score").innerText = score.toString()
        badMoleTile.removeChild(badMole)
        if (score < 0){
            document.querySelector("#score").innerText = "Game Over"
            gameOver = true
            console.log(gameOver)
        }
    }
}