// starting over  ':-/
/*
    use borrowed.js as a guide.
    they make better use of classes and id's
*/
// edit template as required

/*
PSEUDO CODE
set "viewer" to 0
declare vars
    inputOne
    inputTwo
    operator
    resultQue
add event listener for numeral & decimal point
add event listener for operator
on numeral/decimal click
    update inputOne && viewer
on operator click
    update operator  && switch/case by operator
    switch/case 
        "+" -- sum inputOne + inputTwo && update resultQue
        "-" -- subtract inputOne - inputTwo && update resultQue
        "*" -- multiply inputOne * inputTwo && update resultQue
        "/" -- divide inputOne * inputTwo && update resultQue
        "=" -- update viewer with resultQue && re-set all vars and viewer to 0
*/

$(document).ready(function () {
    $("#viewer").val(0);

    // number clicked
    $(".numeral").click(function (e) { 
        e.preventDefault();
        console.log("numeral"+e.target.textContent)
        let elem=$("#viewer").val();
        // if(elem==="0"){$("#viewer").val("")}
        if(elem==="0"){
            $("#viewer").val(e.target.textContent)}
        else $("#viewer").val(elem+e.target.textContent)})

    // operator clicked
    $(".operator").click(function (e) { 
        e.preventDefault();
        console.log("operator"+e.target.textContent)
    });
});