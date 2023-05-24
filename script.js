class Calculator{
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
        this.clear()
    }

    // all clear
    clear(){
        this.previousOperand = ""
        this.currentOperand = ""
        this.operation = undefined
    }

    delete(){

    }


    append(number){
        // if input is invalid: there are 2 '.' in the string, return
        // if (number == '.' && this.currentOperand.includes('.')) {
        //     return
        // }
        // console.log(this.currentOperand)
        // this.currentOperand = this.currentOperand.toString() + number.toString()
        // console.log(this.currentOperand)

        this.currentOperand = number
    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
        this.currentOperand.innerText = this.currentOperand
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
        // console.log(this.currentOperand)
    })
})



operationButtons.forEach(operation => {
    operation.addEventListener('click', () => {
        console.log(operation.innerHTML)
    })
})

// clear the previous and current operand
allClearButton.addEventListener('click', () => calculator.clear())