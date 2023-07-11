class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
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

    }

    // will calculate
    compute(){

    }

    // this function will update the display on the webpage
    updateDisplay(){
        this.currentOperand.innerText = '123'
    }
}




// select the HTML elements
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperand = document.querySelector('[data-previous]')
const currentOperand = document.querySelector('[data-current]')

// creating the calculator
const calculator = new Calculator(previousOperand, currentOperand)

// run for loop through the numberButtons
// 
numberButtons.forEach(number => {
    number.addEventListener('click', () => {
        calculator.append(number.innerHTML)
        calculator.updateDisplay()
        console.log(this.currentOperand)
    })
})



operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        console.log(operation.innerHTML)
    })
})

// when AC is clicked
// clear the previous and current operand
allClearButton.addEventListener('click', () => calculator.clear())

// when delete is clicked 
// delete the last digit of the current operand
deleteButton.addEventListener('click', () => calculator.delete())
