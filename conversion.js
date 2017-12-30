// console.log("calculator.js: ");

// formula you time will === (700/Your Power)*Listed Time

// **********************
// *    Get elements:      *
// **********************
let pwr = document.getElementById("power");
let cookTimeMin = document.getElementById("cookTimeM");
let cookTimeSec = document.getElementById("cookTimeS");
let answer = document.getElementById("answerArea");
let calc = document.getElementById("calculate");

// **********************
// *    Add listeners:      *
// **********************
calc.addEventListener("click", function(){
    yourTime();
});

// console.log("Minutes :", cookTimeMin);
// console.log("Seconds :", cookTimeSec);
// console.log("Calc fired :", calc);
// console.log("yourTime fired :", yourTime);


// **********************
// *    Declare funtions:      *
// **********************

function yourTime(event){
    // pwr, cookTimeMin, cookTimeSec
    let minuteConversion = (700 / pwr.value) * cookTimeMin.value;
        console.log("minuteConversion: ", minuteConversion);

    let minutesToSeconds = (minuteConversion * 60);

    let decimalSeconds = (cookTimeSec.value / 60) * 100;
        console.log("decimalSeconds: ", decimalSeconds);

    let secondConversion = (700 / pwr.value) * decimalSeconds;
        console.log("secondConversion: ", secondConversion);

    let standardSeconds = (secondConversion / 100) * 60;
        console.log("standardSeconds: ", standardSeconds);


    let yourResultDecimal = (minutesToSeconds + standardSeconds) / 60;
        console.log("yourResultDecimal: ", yourResultDecimal);

    // let yourResultTime = (yourResultDecimal / 100) * 60;
    //     console.log("yourResultTime: ", yourResultTime);



    let total = answer.innerHTML = yourResultDecimal.value;

    return yourTime;
}

// function answer (yourResult){
//     answerArea.innerHTML = yourResult;
// }

