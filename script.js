const generateBtn = document.getElementById("generateBtn")
const resetBtn = document.getElementById("resetBtn")
// const numbers = document.querySelectorAll(".number")
let currentText = document.querySelector(".current-number span")
let excludedNumbers = []

function generateNumber() {
    const currentNumber = Math.floor(Math.random() * 90) + 1
    // console.log(currentNumber)
    return currentNumber
}

function showNumber(generatedNumber) {
    // console.log(generatedNumber)
    excludedNumbers.push(generatedNumber)
    currentText.innerText = generatedNumber
    number = document.getElementById(generatedNumber)
    // console.log(number.id)
    number.classList.add("done")
}

function resetGame() {
    location.reload()
    excludedNumbers = []
    currentText.innerText = "0"
    // console.log(excludedNumbers)
}

resetBtn.addEventListener("click", resetGame)

generateBtn.addEventListener("click", () => {
    // generateNumber()
    console.log(excludedNumbers)
    let generatedNumber = generateNumber()
    // console.log("yahoo")

    if (!excludedNumbers.includes(generatedNumber)) {
        // generateNumber()
        showNumber(generatedNumber)
    } else {
        // console.log('repeat number found' + generatedNumber)
        generatedNumber = generateNumber()
        showNumber(generatedNumber)
        // excludedNumbers.push(generatedNumber)
        // currentText.innerText = generatedNumber
    }
})