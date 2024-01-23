/* 
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [3,1,2,1]
const expected3 = 1

const nums4 = [3,7,6,2,3,1,4]
const expected4 = 2

const nums5 = [5,5,5,5,3,20]
const expected5 = 4

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    if (nums.length < 3) {
        return -1; // An array with less than 3 elements cannot have a balance index
    }

    let leftSum = 0;
    // the slice function removes the 1st index from the .reduce method so it would not be counted
    // .reuduce is a function that will add the sum of the array
    let rightSum = nums.slice(1).reduce((a, b) => a + b, 0);

    // This for loop runs throught the whole nums array
    for (let i = 0; i < nums.length; i++) {
        // Checks if i is greater then 0 before running the if statement
        if (i > 0) {
            // Adds to the left side 1 less then the current index
            leftSum += nums[i - 1];
            // Subtracts from right sum the current index
            rightSum -= nums[i];
        }

        // Checks if the left sum is == to the right sum if true return i
        if (leftSum === rightSum) {
            return i;
        }
    }

    return -1;
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))
console.log(balanceIndex(nums4))
console.log(balanceIndex(nums5))

/*****************************************************************************/