/* 
  Efficiently combine two already sorted multiSet arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (de-duped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/
//! do not use Set()

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multiSets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    de-duped.
 */
function orderedIntersection(sortedA, sortedB) {
  //! write the PSEUDOCODE first!
  // create a new array variable
  let newArray = []
  // create 2 variables for the  while loop
  let i = 0
  let j = 0
  // create the while loop to iterate through both of the arrays length
  while (i < sortedA.length && j < sortedB.length){
    // create an if statement that checks the current variable exits in both arrays
    if (sortedA[i] === sortedB[j]){
      // create another if statement to check if the variable already exists in the newArray
      // if (!newArray.includes(sortedA[i])){
        if (newArray[newArray.length - 1] !== sortedA[i]){
        // if the variable passes both if checks then push to the newArray
        newArray.push(sortedA[i])
      }
      // increment both of the variables for the while loop
      i++
      j++
    }
    // create an else if and an else statement to skip over elements in the array if they are different since it is a sorted array
    else if (sortedA[i] < sortedB[j]){
      i++;
    }
    else {
      j++
    }
  }
  // return the newArray
  return newArray
}

console.log(orderedIntersection(arrA1, arrB1));
console.log(orderedIntersection(arrA2, arrB2));
console.log(orderedIntersection(arrA3, arrB3));