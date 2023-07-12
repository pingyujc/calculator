class Calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }

    // all clear AC
    // just clear the display at top
    // making everything empty
    clear(){
        this.previousOperand = ""
        this.currentOperand = ""
        this.operation = undefined
    }
    
    // delete one digit
    // remove the last digit
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }


    // call this function when a number is clicked and should be add to the display
    append(number){
        // if input is invalid: there are 2 '.' in the string, return
        if (number == '.' && this.currentOperand.includes('.')) {
            return
        }
        // print the current operand before appending
        console.log(this.currentOperand)
        // this line will make the current number into a string and add it to the end of the current number
        this.currentOperand = this.currentOperand.toString() + number.toString()
        // print again to check if the changes have been made
        console.log(this.currentOperand)

    }


    // this function will choose what operation we are performing
    chooseOperation(operation){
        this.operation = operation // saving the operation chosen
        this.previousOperand = this.currentOperand // saving the current number, move it to the prev
        this.currentOperand = '' // clearing the current number

    }

    // will calculate
    compute(){

    }

    // this function will update the display on the webpage
    updateDisplay(){
        this.currentOperandText.innerText = this.currentOperand
        this.previousOperandText.innerText = this.previousOperand
    }
}




// select the HTML elements
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandText = document.querySelector('[data-previous]')
const currentOperandText = document.querySelector('[data-current]')

// creating the calculator
const calculator = new Calculator(previousOperandText, currentOperandText)

// run for loop through the numberButtons
// when clicked
// append number to the end of the current 
// update whats on the screen
numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        calculator.append(number.innerText)
        calculator.updateDisplay()
        // console.log(this.currentOperandText)
    })
})

// run for all the operations
// when clicked
// move the original number to the prev
// save the 
operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        calculator.chooseOperation(operation.innerText)
        calculator.updateDisplay()
        console.log(operation.innerHTML)
    })
})

// when AC is clicked
// clear the previous and current operand
// update the display right after
allClearButton.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

// when delete is clicked 
// delete the last digit of the current operand
// once delete, update the display directly.
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

// when equal is clicked
// compute the math
// update the display
equalButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
