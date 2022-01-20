/*
*** PLAN TEST ORDER ***

# MARKS VALIDATION
Test case ID: EM-004-NoInputMarks - "BADINPUT: There must be at least one mark."
Test case ID: EM-007-OutOfRangeMark - "BADINPUT: each mark must be in the range [0,100]."
Test case ID: EM-010-StringInputMark - "BADINPUT: All marks informed must be a number." new

# MINIMUM AVERAGE VALIDATION
Test case ID: EM-005-NoInputMinAverage - "BADINPUT: The minimum average parameter must be set." new
Test case ID: EM-008-OutOfRangeMinAverage - "BADINPUT: The minimum average parameter must be in the range [0,100]."

# MINIMUM INDIVIDUAL VALIDATION
Test case ID: EM-006-NoInputMinIndividual - "BADINPUT: The minimum individual parameter must be set." new
Test case ID: EM-009-OutOfRangeMinIndividual - "BADINPUT: The minimum individual parameter must be in the range [0,100]."

# GOOD INPUTS VALIDATION VALIDATION
Test case ID: EM-002-LowAverage - "FAIL: The average is too low."
Test case ID: EM-003-LowIndividualMark - "FAIL: The individual mark is too low."
Test case ID: EM-001-Pass - "PASS"
*/

const MIN_RANGE = 0;
const MAX_RANGE = 100;

function evaluateMarks(marks, minAverage, minIndividual) {
    const MIN_AVG = minAverage;
    const MIN_INDIVIDUAL_MARK = minIndividual;

    // # MARKS VALIDATION
    // Test case ID: EM-004-NoInputMarks
    if(isEmpty("marks")) return "BADINPUT: There must be at least one mark.";

    // Test case ID: EM-007-OutOfRangeMark
    if(isOutOfRange(marks)) return "BADINPUT: each mark must be in the range [0,100].";

    // Test case ID: EM-010-StringInputMark
    if(isString(marks)) return "BADINPUT: All marks informed must be a number.";

    // # MINIMUM AVERAGE VALIDATION
    // Test case ID: EM-005-NoInputMinAverage 
    if(isEmpty("minAverage")) return "BADINPUT: The minimum average parameter must be set.";

    // Test case ID: EM-008-OutOfRangeMinAverage
    if(isOutOfRange(minAverage)) return "BADINPUT: The minimum average parameter must be in the range [0,100].";

    // # MINIMUM INDIVIDUAL VALIDATION
    // Test case ID: EM-006-NoInputMinIndividual
    if(isEmpty("minIndividual")) return "BADINPUT: The minimum individual parameter must be set.";

    // Test case ID: EM-009-OutOfRangeMinIndividual
    if(isOutOfRange(minIndividual)) return "BADINPUT: The minimum individual parameter must be in the range [0,100].";;

    //# GOOD INPUTS VALIDATION VALIDATION
    // Test case ID: EM-002-LowAverage
    if(isLowAvg(marks, MIN_AVG)) return "FAIL: The average too low.";

    // Test case ID: EM-003-LowIndividualMark
    if(isLowIndividualMark(marks, MIN_INDIVIDUAL_MARK)) return "FAIL: The individual mark is too low.";

    // Test case ID: EM-001-Pass
    return "PASS";
}

function isEmpty(val){
    if(document.querySelector("#"+val+"Input").value === "") return true
    else return false;
}

function isOutOfRange(val){
    if(Array.isArray(val)){
        for(let i = 0; i < val.length; i++){
            if(val[i] < MIN_RANGE || val[i] > MAX_RANGE) return true;
        }
    }
    else{
        if(val < MIN_RANGE || val > MAX_RANGE) return true;
    }
   return false;
}

function isString(arr){
    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])) return true;
    }
    return false;
}

function isLowAvg(arr, min_avg){
    let avg = 0;
    arr.forEach(element => {
        avg += element;
    });
    if(avg/arr.length < min_avg) return true;
    return false;
}

function isLowIndividualMark(arr, min_individual_mark){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min_individual_mark) return true;
    }
    return false;
}
