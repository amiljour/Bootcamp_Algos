/* 
Recursive Sigma

Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
    if (num > 0){
        num = Math.floor(num)
        return num + recursiveSigma(num-1)
    }
    else{
        return 0
    }
}

console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))
/*****************************************************************************/

function recursiveSigma1(num) {
    num = Math.floor(num)
    if (!Number.isInteger(num) || num < 0){
        return 0
    }
    if (num === 1){
        return 1
    }
    return num + recursiveSigma1(num -1)
}

console.log(recursiveSigma1(num1))
console.log(recursiveSigma1(num2))
console.log(recursiveSigma1(num3))