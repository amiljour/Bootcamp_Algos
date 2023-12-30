//https://leetcode.com/problems/arranging-coins/

/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins.
The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

*/

function arrangeCoins(n){
    // your code here
    // let arry = []
    // let temp = []
    // while (n > 0 && temp > 0){
    //     temp += []
    //     n--
    // }
    // return arry
    let k = 0;
    let sum = 0;

    while (sum <= n) {
        k++;
        sum += k;
    }

    // Since the loop exits when sum exceeds n, we need to return k - 1
    return k - 1;
}



console.log(arrangeCoins(5)) // output: 2
console.log(arrangeCoins(8)) // output: 3
console.log(arrangeCoins(11)) // output: 4