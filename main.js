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
    Set input to 0(zero) onload
    Declare global var's
        inputQue (where the input element goes)
        operatorQue (for the clicked operator)
        resultQue
        holdQue (for use with the 'CE' function)
    Switch/case for operator onclick
        "CE" Set input element to 0(zero) (or holdQue?) && clear inputQue
        "AC" Set input element to 0(zero) && clear all que's
        "Operators" Convert input element to number && add to the holdQue && calculate inputQue by operatorQue && add  to resultQue
        "=" Display resultQue in input element
*/

// setup page on load


// global vars


// switch/case
