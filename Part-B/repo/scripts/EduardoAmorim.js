//  IS EMPTY TEST
let isMarkEmpty = marks => marks.length === 0;
let isAverageEmpty = minAverage => !minAverage;
let isIndividualEmpty = minIndividual => !minIndividual;


// IN RANGE TEST
let isMarkInRange = marks => {
    for (let mark of marks) {
        if(!(0 <= mark && mark <= 100)) return false;
    }
    return true;
}
let isIndividualInRange = minIndividual => 0 <=minIndividual && minIndividual <=100;
let isAverageInRange = minAverage => 0 <=minAverage && minAverage <=100;


// IS NUMBER TEST
let isMarkANumber = (marks) => {
    for (let mark of marks) {
        if (isNaN(mark)) return false;
    }
    return true;
}

// LOW INDIVIDUAL MARK TEST
let areMarksGood = (marks, minIndividual) => {
    for (let mark of marks) {
        if(mark < minIndividual) return false;
    }
    return true;
}


// LOW AVERAGE TEST
let isAverageGood = (marks, minAverage) => {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    let average = total / marks.length;

    return average >= minAverage;
}


// FULL TEST
let evaluateMarks = (marks, minAverage, minIndividual) => {

    if (isMarkEmpty(marks)) return "BADINPUT: must be at least one mark";
    if (isAverageEmpty(minAverage)) return "BADINPUT: must set the minimum average parameter";
    if (isIndividualEmpty(minIndividual)) return "BADINPUT: must set the minimum individual parameter";

    if(!isMarkANumber(marks)) return "BANDINPUT: marks must be a numbers";

    if (!isMarkInRange(marks)) return "BANDINPUT: each mark must be in the range [0, 100]"
    if (!isIndividualInRange(minIndividual)) return "BANDINPUT: minimum individual parameter must be in the range [0, 100]"
    if (!isAverageInRange(minAverage)) return "BANDINPUT: each mark must be in the range [0, 100]"

    if(!areMarksGood(marks, minIndividual)) return "FAIL: individual mark too low";
    if(!isAverageGood(marks, minAverage)) return "FAIL: average too low"

    return "PASS";
}

