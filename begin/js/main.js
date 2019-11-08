let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen_section = document.querySelector(".screen");
const calc_button = document.querySelector(".calc-buttons");

let previousNumber= 0;
const handleMathOperations = (userClick) => {
    switch(userClick){
        case "+":
            runningTotal += parseInt(buffer)
            buffer="0" 
            console.log(userClick);
            console.log("runningTotal", runningTotal);
        break;
        case "−":
            runningTotal -= parseInt(buffer)
            buffer="0" 
            console.log(userClick);
            console.log("runningTotal", runningTotal);
        break;
        case "×":
            runningTotal *= parseInt(buffer)
            buffer="0" 
            console.log(userClick);
            console.log("runningTotal", runningTotal);
        break;
        case "÷": 
            runningTotal /= parseInt(buffer)
            buffer="0" 
            console.log(userClick);
            console.log("runningTotal", runningTotal);
        break;
    }
}


let joinNumber="";
let keepNumber=true;
const handleNumber = (valueAsString) => {
    if(buffer === "0"){
        buffer = valueAsString
    }else{
        buffer += valueAsString
    }
    screen_section.innerHTML=buffer
    console.log(buffer);
}

const handleOperator = (userClick) => {
    if(userClick === "C"){
        buffer = "0";
        runningTotal = 0;
        screen_section.innerHTML=buffer
    }else{
        switch(userClick){
            case "←":
                console.log("back");
            break;
            case "+":
            case "−":
            case "×":
            case "÷":
                screen_section.innerHTML=userClick
                handleMathOperations(userClick);
            break;
            case "=":
                console.log("equal");
            break;
    
        }
    }
    
}


const buttonClicked = (userClick) => {
    if(isNaN(userClick)){
        handleOperator(userClick);
    }else{
        handleNumber(userClick);
    }
}

function main() {
    calc_button.addEventListener('click', (e) => {
        buttonClicked(e.target.innerText);      
    });
}
main();





























/*

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




*/





















