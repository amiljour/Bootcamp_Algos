/* 
Given an array of numbers,
return a count of how many are both even and negative.
*/

const nums1 = [1, 5, -1, 2, -4, 9, -10, 0, -3, -2];
const expected1 = 3;

const nums2 = [];
const expected2 = 0;

const nums3 = [-4, -2, -6];
const expected3 = 3;

/**
 * Counts how many numbers are both even and negative.
 * @param {number} nums
 * @returns {number} The count.
 */
function countEvenNegatives(nums) {
    //your code here
    var x = 0
    for (var i = 0; i <= nums.length; i++) {
        if (nums[i] < 0 && nums[i] % 2 == 0) {
            x++;
        }
    }
    return x
}
// Tests
console.log("\n************Algo #1***********");
const result1 = countEvenNegatives(nums1);
console.log(result1, "should be", expected1);
const result2 = countEvenNegatives(nums2);
console.log(result2, "should be", expected2);
const result3 = countEvenNegatives(nums3);
console.log(result3, "should be", expected3);

/*****************************************************************/

/* 
Array: Concat

.push allowed: arrName.push(newItem)

Replicate JavaScript’s concat() which combines two arrays into one NEW array

Input: two arrays
Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expectedA = ["a", "b", 1, 2, 3];

const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expectedB = [1, 2, 3, "a", "b"];

/**
 * Concatenates the given arrays together into order that they are passed in.
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */
function concat(items1, items2) {
    // code here
    var x = []
    for (var i = 0; i < items1.length; i++) {
        x.push(items1[i])
    }
    for (var i = 0; i < items2.length; i++) {
        x.push(items2[i])
    }
    return x
}

// Tests
console.log("\n************Algo #2***********");
console.log("A");
const resultA = concat(arrA1, arrB1);
console.log(resultA, "should be", expectedA);
console.log(arrA1, "should still be", arrA1)
console.log(arrB1, "should still be", arrB1)


console.log("\nB");
const resultB = concat(arrA2, arrB2);
console.log(resultB, "should be", expectedB);
console.log(arrA2, "should still be", arrA2)
console.log(arrB2, "should still be", arrB2)


// console.log("\nB");
// const resultB = concat(arrA2, arrB2);
// console.log(resultB, "should be", expectedB);
// console.log(arrA2, "should still be", arrA2 )
// console.log(arrB2, "should still be", arrB2 )