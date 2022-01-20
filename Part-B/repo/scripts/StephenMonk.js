/**
 * AUTHOR: Stephen Monk
 *
 * Determines whether a student has passed or failed a course.
 * To pass, both of the following conditions must be true:
 * (a) the average mark is not less than the stated minimum average mark; AND
 * (b) each individual mark is not less than the specified minimum individual mark.
 *
 * @param {array of number} marks an array of marks, each in the range [0,100]
 * @param {number} minAverage the required minimum for the average of the marks
 * @param {number} minIndividual the required minimum for each individual mark
 * @returns {string} one of the following messages:
 *     "PASS"
 *     "FAIL: average too low"
 *     "FAIL: individual mark too low"
 *     "BADINPUT: must be at least one mark"
 *     "BADINPUT: each mark must be in the range [0,100]
 *     "BADINPUT: minimum average parameter must be in the range [0,100]"
 *     "BADINPUT: minimum individual parameter must be in the range [0,100]"
 */


function evaluateMarks(marks, minAverage, minIndividual) {
    let res = "PASS";

    if (minIndividual <= 0 || minIndividual >= 100) {
        res = "BADINPUT: minimum individual parameter must be in the range [0,100]";
    }

    return res;
}
