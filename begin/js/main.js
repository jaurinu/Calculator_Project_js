let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen_section = document.querySelector(".screen");

const numbersTarget_button = document.getElementsByClassName("number-target");
const operatorsTarget_button = document.getElementsByClassName("operator-target");
const plus_button = document.getElementById("+");
const minus_button = document.getElementById("-");

const calcButton = document.getElementsByClassName("calc-button");
const seven_button = document.getElementById("seven");
const eight_button = document.getElementById("eight");



// const clickedNumber = (userClick) => {
//     const choices = ["+", "-"]
//     //si choices es apretado ir 

//     switch ( userClick ){
//         case "7":
//         case "8":
//             caseJoinNumber(userClick);
//         break;
//         case "+":
//         case "-":
//             caseSaveNumber(userClick)
//     }    
// }

const operatorClick = (userClick) => {
    const choices = ["C", "←", "÷", "×", "-", "+", "="];
//console.log(userClick);
let choice = userClick
return choice

}

let unirnumeros = ""
let guardarnumero = true

const joinNumber = (userClick) => {

    let isAnOperator='';
    let isANumber='';
    const choices = ["C", "←", "÷", "×", "−", "+", "="];
    const choicesnumbers = ["1", "2", "3", "4", "5", "6", "7", "8","9","0"];
    for(let i=0; i<choices.length; i++){
        if (userClick == choices[i]){
            isAnOperator = userClick
            //console.log("isAnOperator", isAnOperator);
    }
    }
    for(let i=0; i<choicesnumbers.length; i++){
        if (userClick == choicesnumbers[i]){
            isANumber = userClick
            //console.log("isANumber", isANumber);
    }
    }


    if (isANumber && guardarnumero == true){
        unirnumeros += userClick
        screen_section.innerHTML = unirnumeros
        //console.log("unirnumeros", unirnumeros)
    }else if(isAnOperator && guardarnumero == true){
        buffer += unirnumeros
        unirnumeros = ""        
        previousOperator = isAnOperator
        guardarnumero =false
        console.log("buffer", buffer);
        //console.log("unirnumeros es igual a 0", unirnumeros);
        console.log(previousOperator)
        return operaciones(buffer, previousOperator)
    }else if(isANumber && guardarnumero == false){
       
        unirnumeros +=userClick
        buffer = ""
        screen_section.innerHTML = unirnumeros
        guardarnumero = true
        console.log("unirnumerosnuevo", unirnumeros);
        //console.log("guardarnumero", guardarnumero);
        
    }
}

//["C", "←", "÷", "×", "−", "+", "="];
const operaciones = (buffer, previousOperator) => {
    let bufferNumero = parseInt(buffer)
    // const sabertotal = operacionSuma()
    switch (previousOperator){
        case "+":
            operationSum(bufferNumero);
        break;
        case "−":
            operationMinus(bufferNumero);
        break;
        case "×":
            operationTimes(bufferNumero);
        break;
        case "÷":
            operationDivision(bufferNumero);
        break;
        case "←":
            operationBack(bufferNumero);
        break;
        case "C":
            operationClear(bufferNumero);
        break;
        case "=":
            operationEquals(bufferNumero);
        break;
    }
    
}

const operationSum = (bufferNumero) => {
    runningTotal += bufferNumero
    //console.log("runningTotal", runningTotal);
    //screen_section.innerHTML = runningTotal
    return runningTotal
}

const operationMinus = (bufferNumero) => {
    runningTotal -= bufferNumero
    //console.log("runningTotal", runningTotal);
    //screen_section.innerHTML = runningTotal
    return runningTotal
}

const operationTimes = (bufferNumero) => {
    runningTotal *= bufferNumero
    console.log("runningTotal", runningTotal);
    screen_section.innerHTML = runningTotal
    return runningTotal
}

const operationDivision = (bufferNumero) => {
    runningTotal /= bufferNumero
    console.log("runningTotal", runningTotal);
    screen_section.innerHTML = runningTotal
    return runningTotal
}

const operationBack = (bufferNumero) => {
    runningTotal /= bufferNumero
    console.log("runningTotal", runningTotal);
    screen_section.innerHTML = runningTotal
    return runningTotal
}

const operationClear = (bufferNumero) => {
    runningTotal += bufferNumero
    console.log("runningTotal", runningTotal);
    screen_section.innerHTML = runningTotal
    return runningTotal
}

const operationEquals = () => {
    const sum = operationSum();
    const minur = operationMinus();







    screen_section.innerHTML = sum
    //runningTotal += bufferNumero
   // console.log("runningTotal", runningTotal);
    return runningTotal
}
























for(let i=0; i<calcButton.length; i++){
    calcButton[i].addEventListener("click", () => {
            let operatorClicked = calcButton[i].textContent;
            joinNumber(operatorClicked);
        });
    }




// operatorsTarget_button[].addEventListener('click', () => {
//     operatorClicked(operatorsTarget_button)
// });

// plus_button.addEventListener('click', () => {
//     joinNumber("+")
// });
// minus_button.addEventListener("click", () => {
//     joinNumber("-")
// })
// seven_button.addEventListener('click', () => {
//     joinNumber("7")
// })
// eight_button.addEventListener('click',() => {
//     joinNumber("8")
// })



















//=============================================
/*seven_button.addEventListener('click', () => {
    let numberParser = seven_button.innerText

    joinNumber(numberParser)
})

eight_button.addEventListener('click', () => {
    let numberParser = eight_button.innerText

    joinNumber(numberParser)
})

plus_button.addEventListener('click', () => {
    
    stopJoinAction(plus_button.innerHTML)
})

let numberJoined = [];
const joinNumber = (numberParser) => {
console.log(numberParser);
    //  buffer = numberParser
     numberJoined.push(numberParser)
     let quitarComas = numberJoined.join("")
     console.log(numberJoined)
     screen_section.innerHTML = quitarComas
     
     if (plusButton.addEventListener('click', () => {
        buffer = quitarComas    
        quitarComas = ""; 
    }))
    stopJoinAction(buffer)
} 

let stopJoinAction = (userClick) => {
   
    previousOperator = 

   
}
===================================================
*/


















/*
const num = 10;
const div = document.querySelector(".number-target"); // the div right above this block
console.log(num, typeof num); // this is a number here
div.innerText = num;
console.log(div.innerText, typeof div.innerText); // it's a string here
*/


// let operation=[];
// let joinNumber = (numberClicked) => {
//     if(numberClicked !== "+"){
//     let numeros = operation.push(numberClicked);
//     let quitarcomas = operation.join('')
//    return calculate(quitarcomas)
//     }else{
//         operation=[]
//         quitarcomas=[]
//         console.log(operation)
//         console.log(quitarcomas)
//     }
// }

// let calculate = (operatorClicked) => {
//     const numberunido = joinNumber()
//     console.log(numberunido)
// } 

// function main(){
//     for (let i=0; i<numbersTarget_button.length; i++){
//         numbersTarget_button[i].addEventListener("click", () => {
//             let numberClicked = numbersTarget_button[i].textContent;
//             joinNumber(numberClicked);
//         });
//     }
//     plusButton.addEventListener("click", () => joinNumber("+"));
    // for(let i=0; i<operatorsTarget_button.length; i++){
    //     operatorsTarget_button[i].addEventListener("click", () => {
    //         let operatorClicked = operatorsTarget_button[i].textContent;
    //         calculate(null, operatorClicked);
    //     });
    // }
// }
// main()