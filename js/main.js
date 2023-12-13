// Cached elements
const numberInput = document.getElementById('input')
const resultDisplay = document.getElementById('result')
const addBtn = document.getElementById('add')
const subtractBtn = document.getElementById('subtract')

// State variables
let currentResult = 0;

 // Set initial values
 numberInput.value = '1'
 resultDisplay.innerText = "0"

// Event listeners
addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)

// Functions
function add() {
    const inputValue = Number(numberInput.value)
    currentResult += inputValue
    updateResult()
}

function subtract() {
    const inputValue = Number(numberInput.value)
    currentResult -= inputValue
    updateResult()
}

function updateResult() {
    resultDisplay.innerText = currentResult
    if(resultDisplay.innerText < 0) {
        resultDisplay.style.color = 'red'
    } else {
        resultDisplay.style.color = 'black'
    }
}

if(resultDisplay < 0) {
    resultDisplay.style.color = 'red'
}