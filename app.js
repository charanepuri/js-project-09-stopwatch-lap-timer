const display = document.getElementById("display")
const startBtn = document.getElementById("start")
const pauseBtn = document.getElementById("pause")
const resetBtn = document.getElementById("reset")
const lapBtn = document.getElementById("lap")
const laps = document.getElementById("laps")

let seconds = 0
let minutes = 0
let hours = 0

let interval = null

// Format time
function formatTime() {
    let h = hours < 10 ? "0" + hours : hours
    let m = minutes < 10 ? "0" + minutes : minutes
    let s = seconds < 10 ? "0" + seconds : seconds

    display.innerText = `${h}:${m}:${s}`
}

// Start
startBtn.addEventListener("click", () => {

    if (interval !== null) return

    interval = setInterval(() => {

        seconds++

        if (seconds === 60) {
            seconds = 0
            minutes++
        }

        if (minutes === 60) {
            minutes = 0
            hours++
        }

        formatTime()

    }, 1000)

})

// Pause
pauseBtn.addEventListener("click", () => {
    clearInterval(interval)
    interval = null
})

// Reset
resetBtn.addEventListener("click", () => {
    clearInterval(interval)
    interval = null

    seconds = 0
    minutes = 0
    hours = 0

    formatTime()
    laps.innerHTML = ""
})

// Lap
lapBtn.addEventListener("click", () => {

    if (interval === null) return

    const li = document.createElement("li")
    li.innerText = display.innerText
    laps.appendChild(li)

})