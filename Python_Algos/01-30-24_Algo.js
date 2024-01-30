/* 
    Recursive Factorial

    Input: integer
    Output: integer, product of ints from 1 up to given integer
    
    If less than zero, treat as zero.
    Bonus: If not integer, truncate (remove decimals).
    
    Experts tell us 0! is 1.
    
    rFact(3) = 6 (1*2*3)
    rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */
function factorial(n) {
    n = Math.floor(n)
    if (n === 0 || n === 1) return 1
    else{
        return n * factorial(n - 1)
    }
}

// console.log(factorial(num1))
// console.log(factorial(num2))
// console.log(factorial(num3))
/*****************************************************************************/

// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, 
// the second number is 1, and the nth number is the sum of the (n -1)th and (n -2)th numbers.
// Write a function that takes in an integer n and returns the nth Fibonacci number.

// Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1.
//  For the purpose of this question, the first Fibonnacci number is F0; 
//  therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..




//counting from 1 in the Fibonnacci Sequence

// 0,1,1,2,3,5,8,13,21,34,55, 


// Because: 0 + 1 = 1, and 1 + 1 = 2, and 1 + 2 = 3, and 2 + 3 = 5 and so on.....

/*****************************************************************************/
/**
 * Recursively solve for nth fibonnaci number of the sequence.
 * - Time: O(n) .
 * - Space: O(n) .
 * @param {number} n 
 * @returns {number} The nth fib of the fibonnacci sequence starting our counting from 1
 */

function getNthFib(n) {
    n = Math.floor(n)
    if (n === 0 ) {return 0}
    if (n === 1 ) {return 1}
    return getNthFib(n - 1) + getNthFib(n - 2);
}

// console.log(getNthFib(0));
// console.log(getNthFib(1));
console.log(getNthFib(4));
console.log(getNthFib(6));