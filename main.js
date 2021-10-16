/* 
    Viewer displays 0 (zero) when page loads.    
    Place number into viewer when a number button is clicked.
    Perform calculation and store in que when an operator is clicked.
    Display result in viewer when "=" is clicked.
    Clear current number from viewer and que when "C" is clicked.
    Enable "C" when any number is clicked.
    Disable "C" after any operator || "=" is clicked,
    Set viewer=0(zero) and clear que when "CE" is clicked.
*/
/* 
    Pseudo code
    Set input to 0(zero) onload
    Declare global var's
        que
    Switch/case onclick
        "CE" Set input to 0(zero) && clear que
        "C" Clear current entry from input && set input to 0(zero) ??&& disable btn??
        "0 t0 9" Enter digit in input
        "Operators" Convert input to number && calculate input && add result to que
        "=" Display que in input
*/

// setup page on load
