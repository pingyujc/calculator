class calculator {
    // defines all the functions needed here
    clear() {
        // AC, clear the numbers
    }
    add() {
        // add
    }
    subtract() {
        // sub
    }
    multiply() {
        // mult
    }
    equal() {
        // =
    }
    divide() {
        // 
    }
    appendNumber() {
        // when typing numbers, the display should change too
    }
}




// get reference to the HTML elements
const result = document.querySelector('#result');
// const number0 = document.querySelector('#number0');
const number0 = document.getElementById('#number0');
const number1 = document.querySelector('#number1');
const number2 = document.querySelector('#number2');
const number3 = document.querySelector('#number3');
const number4 = document.querySelector('#number4');
const number5 = document.querySelector('#number5');
const number6 = document.querySelector('#number6');
const number7 = document.querySelector('#number7');
const number8 = document.querySelector('#number8');
const number9 = document.querySelector('#number9');
const numberArray = [number0, number1, number2, number3, number4, number5, number6, number7, number8, number9];

// function to test if we can use the number button
function displayClick(numstr){
    console.log(numstr);
}


number0.addEventListener('click', () => displayClick('0'));
// // add event lister for all number buttons
// for (let i=0; i<numberArray.length; i++){
//     let numberEL = numberArray[i]; // the current button
//     // numberEL.addEventListener('click', displayClick(i.toString()));
//     numberEL.addEventListener('click', () => displayClick(i.toString()));
// }

