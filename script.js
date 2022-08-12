let die1 = document.getElementById("die1") //die 1
let die2 = document.getElementById("die2")
let die3 = document.getElementById("die3")
let die4 = document.getElementById("die4")
let die5 = document.getElementById("die5")
let die6 = document.getElementById("die6")

let winTexts = document.getElementById("winText") // text for winning

let ones = [] //lists
let twos = []
let threes = []
let fours = []
let fives = []
let sixes = []

let scoreArray = 0 // total score value
let pOneScore = 0 //player one score
let pTwoScore = 0 //player two score

let dice = [die1.textContent, die2.textContent, die3.textContent, die4.textContent, die5.textContent, die6.textContent]

let counts = {};

counts[1] = 0
counts[2] = 0
counts[3] = 0
counts[4] = 0
counts[5] = 0
counts[6] = 0

let rollCount = 0

let lock1btn = document.getElementById("lock1")
let lock2btn = document.getElementById("lock2")
let lock3btn = document.getElementById("lock3")
let lock4btn = document.getElementById("lock4")
let lock5btn = document.getElementById("lock5")
let lock6btn = document.getElementById("lock6")

let lock1val = 0
let lock2val = 0
let lock3val = 0
let lock4val = 0
let lock5val = 0
let lock6val = 0

let turn = 0

let pOne = document.getElementById("pOne")
let pTwo = document.getElementById("pTwo")

function lock1() {
    if (lock1val === 0) {
        lock1val = 1
        lock1btn.textContent = "Unlock"
    } else {
        lock1val = 0
        lock1btn.textContent = "Lock"
    }
}

function lock2() {
    if (lock2val === 0) {
        lock2val = 1
        lock2btn.textContent = "Unlock"
    } else {
        lock2val = 0
        lock2btn.textContent = "Lock"
    }
}

function lock3() {
    if (lock3val === 0) {
        lock3val = 1
        lock3btn.textContent = "Unlock"
    } else {
        lock3val = 0
        lock3btn.textContent = "Lock"
    }
}

function lock4() {
    if (lock4val === 0) {
        lock4val = 1
        lock4btn.textContent = "Unlock"
    } else {
        lock4val = 0
        lock4btn.textContent = "Lock"
    }
}

function lock5() {
    if (lock5val === 0) {
        lock5val = 1
        lock5btn.textContent = "Unlock"
    } else {
        lock5val = 0
        lock5btn.textContent = "Lock"
    }
}

function lock6() {
    if (lock6val === 0) {
        lock6val = 1
        lock6btn.textContent = "Unlock"
    } else {
        lock6val = 0
        lock6btn.textContent = "Lock"
    }
}

function rollAll() {
    rollCount += 1
    if (rollCount <= 3) {
        if (lock1val === 0) {
            die1.textContent = Math.floor(Math.random() * 6) + 1
        }
        if (lock2val === 0) {
            die2.textContent = Math.floor(Math.random() * 6) + 1
        }
        if (lock3val === 0) {
            die3.textContent = Math.floor(Math.random() * 6) + 1
        }
        if (lock4val === 0) {
            die4.textContent = Math.floor(Math.random() * 6) + 1
        }
        if (lock5val === 0) {
            die5.textContent = Math.floor(Math.random() * 6) + 1
        }
        if (lock6val === 0) {
            die6.textContent = Math.floor(Math.random() * 6) + 1
        }

        counts[1] = 0
        counts[2] = 0
        counts[3] = 0
        counts[4] = 0
        counts[5] = 0
        counts[6] = 0


        let dice = [parseInt(die1.textContent), parseInt(die2.textContent), parseInt(die3.textContent), parseInt(die4.textContent), parseInt(die5.textContent), parseInt(die6.textContent)]


        for (let num of dice) {
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
    }
}

function checkOnes() {
    if (counts[1] === 0) {
        scoreArray = scoreArray
    } else if (counts[1] === 1) {
        scoreArray += 100
    } else if (counts[1] === 2) {
        scoreArray += 200
    } else if (counts[1] === 3) {
        scoreArray += 300
    } else if (counts[1] === 4) {
        scoreArray += 1000
    } else if (counts[1] === 5) {
        scoreArray += 2000
    } else if (counts[1] === 6) {
        scoreArray += 3000
    } 
}

function checkTwos() {
    if (counts[2] === 0) {
        scoreArray = scoreArray
    } else if (counts[2] === 3) {
        scoreArray += 200
    } else if (counts[2] === 4) {
        scoreArray += 1000
    } else if (counts[2] === 5) {
        scoreArray += 2000
    } else if (counts[2] === 6) {
        scoreArray += 3000
    } 
}

function checkThrees() {
    if (counts[3] === 0) {
        scoreArray = scoreArray
    } else if (counts[3] === 3) {
        scoreArray += 300
    } else if (counts[3] === 4) {
        scoreArray += 1000
    } else if (counts[3] === 5) {
        scoreArray += 2000
    } else if (counts[3] === 6) {
        scoreArray += 3000
    } 
}

function checkFours() {
    if (counts[4] === 0) {
        scoreArray = scoreArray
    } else if (counts[4] === 3) {
        scoreArray += 400
    } else if (counts[4] === 4) {
        scoreArray += 1000
    } else if (counts[4] === 5) {
        scoreArray += 2000
    } else if (counts[4] === 6) {
        scoreArray += 3000
    } 
}

function checkFives() {
    if (counts[5] === 0) {
        scoreArray = scoreArray
    } else if (counts[5] === 1) {
        scoreArray += 50
    } else if (counts[5] === 2) {
        scoreArray += 100
    } else if (counts[5] === 3) {
        scoreArray += 500
    } else if (counts[5] === 4) {
        scoreArray += 1000
    } else if (counts[5] === 5) {
        scoreArray += 2000
    } else if (counts[5] === 6) {
        scoreArray += 3000
    } 
}

function checkSixes() {
    if (counts[6] === 0) {
        scoreArray = scoreArray
    } else if (counts[6] === 3) {
        scoreArray += 600
    } else if (counts[6] === 4) {
        scoreArray += 1000
    } else if (counts[6] === 5) {
        scoreArray += 2000
    } else if (counts[6] === 6) {
        scoreArray += 3000
    } 
}

function resetLocks() {
    lock1val = 0
    lock1btn.textContent = "Lock"
    lock2val = 0
    lock2btn.textContent = "Lock"
    lock3val = 0
    lock3btn.textContent = "Lock"
    lock4val = 0
    lock4btn.textContent = "Lock"
    lock5val = 0
    lock5btn.textContent = "Lock"
    lock6val = 0
    lock6btn.textContent = "Lock"
}

function checkPoints() {
    resetLocks()
    checkOnes()
    checkTwos()
    checkThrees()
    checkFours()
    checkFives()
    checkSixes()
}

function checkWinner() {
    if (pOneScore >= 10000) {
        winTexts.textContent = "Player One Wins!" + " " + pOneScore
    } else if (pTwoScore >= 10000) {
        winTexts.textContent = "Player Two Wins!" + " " + pTwoScore
    } else {
        winTexts.textContent = " "
    }
}

function endTurn() {
    if (turn === 0) {
        checkPoints()
        die1.textContent = 0
        die2.textContent = 0
        die3.textContent = 0
        die4.textContent = 0
        die5.textContent = 0
        die6.textContent = 0
        rollCount = 3
        pOneScore += scoreArray
        pOne.textContent = "Player One Score:"  + " " + pOneScore
        scoreArray = 0
        turn = 1
        rollCount = 0
        counts[1] = 0
        counts[2] = 0
        counts[3] = 0
        counts[4] = 0
        counts[5] = 0
        counts[6] = 0
    } else {
        checkPoints()
        die1.textContent = 0
        die2.textContent = 0
        die3.textContent = 0
        die4.textContent = 0
        die5.textContent = 0
        die6.textContent = 0
        rollCount = 3
        pTwoScore += scoreArray
        pTwo.textContent = "Player Two Score:" + " " + pTwoScore
        scoreArray = 0
        turn = 0
        rollCount = 0
        counts[1] = 0
        counts[2] = 0
        counts[3] = 0
        counts[4] = 0
        counts[5] = 0
        counts[6] = 0
    }
    checkWinner()
}