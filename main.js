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
        resultQue
        holdQue (for use with the 'CE' function--holds the last entry, NOT the result. It gets populated from the inputQue after operator selection)
    addeventlistener for number buttons
    addeventlistener for operators
    Function for numeric button click
        Get input element by id
        Place button value into input element
    Switch/case for operator onclick
        "CE" Set input element to holdQue && clear inputQue/operatorQue
        "AC" Set input element to 0(zero) && clear all que's
        "Operators" Convert input element to number && update the inputQue/holdQue && calculate inputQue by operatorQue && update the resultQue
        "=" Display resultQue in input element && clear all que's
*/

// setup page on load || reload


// global vars


// addEventListener's


// Function -- numeric button click


// switch/case
