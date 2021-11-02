/* 
    ?? QUESTIONS
    Is it easier to read the value from an element, or read the 'value' attribute?
    How can jQuery be incorporated?
*/
/* 
    Viewer displays 0 (zero) when page loads.    
    Place number into viewer when a number button is clicked.
    Perform calculation and store in que when an operator is clicked.
    Display result in viewer when "=" is clicked.
    Clear current number from viewer and que when "CE" is clicked.
    (Enable "C" when any number is clicked.)
    (Disable "C" after any operator || "=" is clicked,)
    Set viewer=0(zero) and clear que when "AC" is clicked.
*/
/* 
    PSEUDO CODE
    Set input to 0(zero) onload || reload
    Declare global var's
        inputQue (where the input element goes)
        operatorQue (for the clicked operator)
        holdQue (holds 1st value entered, or result of inputQue [operator] holdQue)
        resultQue
        ??  (for use with the 'CE' function--holds the last entry, NOT the result. It gets populated from the inputQue after operator selection)
    addeventlistener for number buttons
    addeventlistener for operators
    addeventlistener for CE (pass the "backspace" key)
    addeventlistener for AC
    Function for numeric button click
        Get input element by id
        Place button value into input element
    Switch/case for operator onclick
        "CE" -- pass the "backspace" key
        "AC" -- Set input element to 0(zero) && set all que's to 0[zero]
        "Operators" -- update operatorQue, IF holdQue === 0[zero] && resultQue === 0[zero], Convert input element to float && update holdQue, ELSE Convert input element to float && update inputQue &&calculate inputQue [operatorQue] holdQue && update resultQue
        "=" -- Display resultQue in input element && set all que's to 0[zero]
*/

// setup page on load || reload
$(document).ready(function () {
    console.log("zero");
    $("#viewer").val("0");
    // document.querySelector("#viewer").value = "0";
});

// global vars
let  inputQue, operatorQue, holdQue, resultQue

// Event Listener's
$(".numeral").click(function (e) { 
    e.preventDefault();
    // BUG elem is undefined!
    let elem = $(this).val()
    $("viewer").val(elem)
});

// Function -- numeric button click


// switch/case
