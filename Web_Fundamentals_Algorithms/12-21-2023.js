// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, 
// the second number is 1, and the nth number is the sum of the (n -1)th and (n -2)th numbers.
// Write a function that takes in an integer n and returns the nth Fibonacci number.

// Important note: the Fibonacci sequence is often defined with its first two numbers as F0 = 0 and F1 = 1.
//  For the purpose of this question, the first Fibonnacci number is F0; 
//  therefore, getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc..

function getNthFib(n) {
    let lastTwo = [0, 1];

    //Your code here
    while (n > lastTwo.length){
        lastTwo.push(lastTwo[lastTwo.length - 1]+lastTwo[lastTwo.length - 2])
    }
    console.log(n)
    console.log(lastTwo)
    // return n > 1 ? lastTwo[1] : lastTwo[0];
}
console.log(getNthFib(5));