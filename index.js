let initialScoreHome = 0
let initialScoreGuest = 0
let ScoreHomeEle = document.getElementById("score-home")
let ScoreGuestEle = document.getElementById("score-guest")


function socreAdd1Home() {
    initialScoreHome += 1
    ScoreHomeEle.textContent = initialScoreHome
}

function socreAdd2Home() {
    initialScoreHome += 2
    ScoreHomeEle.textContent = initialScoreHome
}

function socreAdd3Home() {
    initialScoreHome += 3
    ScoreHomeEle.textContent = initialScoreHome
    
}

function socreAdd1Guest() {
    initialScoreGuest += 1
    ScoreGuestEle.textContent = initialScoreGuest
}

function socreAdd2Guest() {
    initialScoreGuest += 2
    ScoreGuestEle.textContent = initialScoreGuest
}

function socreAdd3Guest() {
    initialScoreGuest += 3
    ScoreGuestEle.textContent = initialScoreGuest
    
}

function newGame() {
    initialScoreHome = 0
    initialScoreGuest = 0
    ScoreHomeEle.textContent = 0
    ScoreGuestEle.textContent = 0
}